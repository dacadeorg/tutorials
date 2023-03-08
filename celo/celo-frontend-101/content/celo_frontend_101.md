# CELO Frontend 101
In this tutorial, we will be building the frontend for a simple marketplace dapp on the Celo blockchain. The decentralized marketplace application will allow users to list their items for sale, purchase items, and view listed items.

### Prerequisites
- [Node JS](https://nodejs.org/en/download/) - Please make sure you have Node.js v16 or higher installed.
- [Git](https://git-scm.com/downloads) - Please make sure you have Git v2.38 or higher installed. 
- [React](https://reactjs.org/)- You should have a basic understanding of React and know how to use JSX, props, state, lifecycle methods, and hooks.

### Tech Stack
We will use the following tech stack in this tutorial:
- [Celo](https://docs.celo.org/) - A carbon-negative, mobile-first, EVM-compatible blockchain ecosystem leading a thriving new digital economy for all.
- [Celo Composer](https://github.com/celo-org/celo-composer#how-to-use-celo-composer) - A CLI tool that enables you to quickly build and deploy dapps on Celo.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [NextJS](https://nextjs.org/) - A popular open-source framework for building React applications with server-side rendering, automatic code splitting, and optimized performance.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- [RainbowKit](https://www.rainbowkit.com/) - A React library that makes it easy to add a wallet connection to your dapp.
- [WAGMI](https://wagmi.sh/) - A collection of React hooks that makes it easy to interact with a blockchain.

### WARNING
This tutorial is for educational purposes only. Do not use this tutorial to deploy a production application. The application code has not been audited and is not secure. Use at your own risk.

### Overview
This tutorial consists of five parts:
1. Project Setup (10 min)
2. Contract Connection (20 min)
3. Component Implementation (40 min)
4. Testing our Dapp (15 min)
5. Conclusion (1 min)

The total time to complete this tutorial is about 80 minutes, but this will vary depending on your experience level.

## 1. Project Setup
In the first part of this tutorial, we will be setting up our project. We will be using the Celo Composer to generate our boilerplate code. Then we will be installing the necessary dependencies and removing unnecessary code.

### 1.1 Project Initialization with Celo Composer
First, you are going to initialize your project from the boilerplate repository, where you will already have the build process and necessary libraries available. You should have installed `node.js 16` or higher.

Open your command-line interface.

We will be creating our boilerplate code using [Celo Composer](https://github.com/celo-org/celo-composer#how-to-use-celo-composer). A CLI tool that enables you to quickly start building dApps on Celo for multiple frameworks including React, React Native (w/o Expo), Flutter and Angular. You can create the dapp using default Composer templates provided by Celo or you can create your own templates.

In your terminal, run the following command to create a new Celo composer project:
```bash
npx @celo/celo-composer create
```

This will prompt you to select the framework and the template you want to use.
```bash
Celo Composer CLI
? Choose front-end framework: (Use arrow keys)
❯ React 
  React Native (With Expo) 
  React Native (without Expo) 
  Flutter 
  Angular 
```

Select the option that says "React" as shown above.

Next, you will be prompted to select the web3 library for react app. For the sake of this tutorial, we will be using Rainbowkit-celo. This is a web3 library that provides a simple API for interacting with the Celo blockchain based on the popular [RainbowKit](https://www.rainbowkit.com/) library. It also provides a set of React hooks that can be used to interact with the Celo blockchain via the [WAGMI](https://wagmi.sh/) library.
```bash
? Choose web3 library for react app: (Use arrow keys)
  React-celo 
❯ Rainbowkit-celo 
```

Next, you will be prompted to select the smart contract framework. For the sake of this tutorial, we will be using [Hardhat](https://hardhat.org/). Hardhat is a development environment to compile, deploy, test, and debug your smart contracts. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introducing more functionality around this workflow. We won't cover the usage of Hardhat in this tutorial though.

```bash
? Choose smart contract framework: (Use arrow keys)
❯ Hardhat 
  Truffle 
  None
```

Next, we are asked to create a subgraph. Simply select `No`:
```bash
? Create a subgraph: (Use arrow keys)
  Yes 
❯ No 
```

Next, you need to name your project. We will call it celo-frontend-101. You can use whatever name you want.

Now we should have the required boilerplate code for our project.

### 1.2 Boilerplate Structure
The boilerplate generated by the Celo composer is structured in a mono repo. This means that the project is divided into multiple packages. The packages are located in the packages folder. The structure of the packages folder is as follows:
- celo-frontend-101
    - packages
        - hardhat
        - react-app


The `hardhat` folder contains hardhat generated code which enables us to write our smart contracts, test them and deploy them to the Celo testnet or mainnet and provide us the deployment address.

The `react-app` contains React(NextJS) code which we will use to build the frontend that interacts with our smart contract. In this tutorial, we will focus on the react-app folder.

Let's have a look at the pages and components that were generated by the Celo Composer for us.

The `pages` folder in the `react-app` folder contains the following files:
```markdown
|--react-app
    |---pages
        |----_app.tsx
        |----index.tsx
```

The `_app.tsx` file is the root component of our application. It is used to initialize pages. We will be using this file to initialize our web3 provider and set up our wallet connector and WAGMI client.

The `index.tsx` file is the landing page of our application. This is just a placeholder page for now.

The `components` folder contains the following files:
```markdown
|--components
    |---Footer.tsx
    |---HeaderRC.tsx
    |---HeaderRK.tsx
    |---Layout.tsx
```

We will use the `HeaderRK.tsx` component so you can go ahead and delete `HeaderRC.tsx`. The `HeaderRK.tsx` contains a logo, the navigation and a button to connect your wallet. The `Footer.tsx` contains the footer of our application. The `Layout.tsx` file contains the `Header.tsx` and `Footer.tsx` components and wraps our page components.

### 1.3 Celo Composer installation
Let's go ahead and install the dependencies for our project. First, we navigate into our newly created project directory and install the npm packages for our boilerplate code.
Navigate into the react folder of your project:

```bash     
cd celo-frontend-101/packages/react-app
```

Next, run the following command to install the packages:
```
yarn install
```

or if you are using npm (if this leads to errors, try using yarn instead).

```
npm install
```

This will install all the required packages used for the hardhat and react frontend implementation.

At this point, our Celo composer boilerplate has been set up and generated with all the initial configurations we will need for our decentralized marketplace application.

Go into your terminal and run the command in the `react-app` folder to start the development server:

```
npm run dev
```

or if you are using yarn

```
yarn run dev
```

You should see the following output in your terminal:

```bash
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Now, open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the following page:

![](https://i.imgur.com/Bf1wevC.png)

Great job on setting up your boilerplate🔥

If you want to test how to connect your wallet to the application, you can install the [MetaMask](https://metamask.io/) extension on your browser and create a wallet.

After you have set up the MetaMask wallet, you can use this [Link](https://chainlist.org/chain/44787) and click on "Connect Wallet", under "Celo Alfajores Testnet" to change the network of your wallet to the Alfajores testnet.

Make sure that you change the network before connecting to avoid any errors.

You can get some testnet tokens from the [Celo faucet](https://celo.org/developers/faucet). You should then be able to see a Celo balance if you click on your wallet address on the top right corner of the page.

### 1.4 React-Toastify, React-Blockies and use-debounce installation

Next, let us install the required packages for our frontend implementation.

We will be using the following packages:
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction) A react component that provides a toast notification system.
- [react-blockies](https://www.npmjs.com/package/react-blockies) - A react component that generates identicons based on the Celo address.
- [use-debounce](https://www.npmjs.com/package/use-debounce) - A react library that provides a hook to debounce state changes so that we can limit the number of times a function is called and our smart contract is only called when the user has stopped typing.

In the react-app folder, run the following command:
```
yarn add react-blockies @types/react-blockies react-toastify use-debounce 
```

Or if you are using npm:

```
npm install react-blockies @types/react-blockies react-toastify use-debounce 
```



### 1.5 Wrap App with RainbowKitProvider and WagmiConfig
Now, we wrap our application with RainbowKitProvider and WagmiConfig so that we can connect to our wallet and interact with our smart contract.

We will also import the React-Toastify plugin and its CSS file so that our toast notifications will appear across the entire application.

Open the `_app.tsx` file in the `pages` folder:
```markdown
|--react-app
    |---pages
        |----_app.tsx
```

Replace the code in the `_app.tsx` file with the following code:
```typescript
// This file is the entry point for the app. It is used to wrap the app with the RainbowKitProvider and WagmiConfig components. 

// Import the global style sheet as well as the RainbowKit and react-toastify stylesheets.
import 'react-toastify/dist/ReactToastify.css';
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";

// Import the connectorsForWallets function to create a list of wallets to connect to. 
// Import the RainbowKitProvider component to wrap the app with.
import {
  connectorsForWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";

// Import three different wallets connectors from the RainbowKit package.
import {
  metaMaskWallet,
  omniWallet,
  walletConnectWallet
} from "@rainbow-me/rainbowkit/wallets";

// Import configureChains, createClient, and WagmiConfig from the Wagmi package to configure the Wagmi client.
import { configureChains, createClient, WagmiConfig } from "wagmi";

// Import the jsonRpcProvider from the Wagmi package to specify the RPC URLs of the chains we want to connect to.
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Import known recommended CELO wallets
import { Valora, CeloWallet, CeloDance } from "@celo/rainbowkit-celo/wallets";

// Import CELO chain information
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";

import Layout from "../components/Layout";

// Import the ToastContainer component from react-toastify to display notifications.
import {ToastContainer} from "react-toastify";

// Configure the information for the chains we want to connect to through RainbowKit.
const { chains, provider } = configureChains(
  [Alfajores, Celo],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }) })]
);

// Create the list of wallets to connect to.
const connectors = connectorsForWallets([
  {
    groupName: "Recommended with CELO",
    wallets: [
      Valora({ chains }),
      CeloWallet({ chains }),
      CeloDance({ chains }),
      metaMaskWallet({ chains }),
      omniWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

// Create the Wagmi client.
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// Create and export the App component wrapped with the RainbowKitProvider and WagmiConfig.
function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode={true}>
        <ToastContainer position={'bottom-center'} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App;
```
Throughout the tutorial, we will link to the code of larger files. Below you can find the code for the `_app.tsx` file:

[Code _app.tsx](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/_app.tsx)

That's it for the setup. We are now ready to connect to the Celo network and interact with our smart contract.

## 2. Contract Connection
In this section, we will implement the smart contract that will be used to save and fetch data from the blockchain.

### 2.1 Importing Contract ABIs

We have created a smart contract for the marketplace and deployed it on the Celo Alfajores testnet.

The contract has the following features:
- Users can add products to the marketplace.
- Users can view products in the marketplace.
- Users can buy products from other users for cUSD.

For this tutorial, we will be using the ABI and bytecode of the smart contract that we have already deployed on the Celo Alfajores testnet.

You can view the smart contract on the Celo Explorer [here](https://alfajores-blockscout.celo-testnet.org/address/0x67d87837504C5f271ef0561CBC80bE08114E127C/contracts).

You can find the commented code for the smart contract below:

[Code marketplace.sol](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/marketplace.sol)

Next, we need to add the ABI(Application Binary Interface) of the contract in order to interact with it. The ABI is a JSON object that contains information about the functions in our smart contract and the parameters and return types of these functions.

The ABI is used to generate a contract object that we can use to interact with our smart contract.

Let us create a folder called `abi` in our react-app folder. 
We will then create a file called `Marketplace.json` in the `packages/react-app/abi` folder.

```markdown
|--packages
    > react-app
        |---abi
            |---Marketplace.json
```

Add the following code to the `Marketplace.json` file:

[Code Marketplace.json](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/abi/Marketplace.json)

Next we create another file inside our `abi` folder called `erc20.json`.
```markdown
|---abi
    |---Marketplace.json
    |---erc20.json
```

This file will contain the ABI of an ERC20 token, because we will be using cUSD stablecoin as our token to buy products from the marketplace, and cUSD is an ERC20 token.

Add the following code to the `erc20.json` file:
[Code erc20.json](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/abi/erc20.json)

### 2.2 Hook for Contract Read
Now that we have our smart contract and its ABI, we can create hooks to interact with it. First, we will create a hook to make read calls to our smart contract.

We will create a folder called `hooks` in our react-app directory. This will contain all our hooks for our application. Inside our hooks folder, we create a folder called `contracts`.

Let us create a file called `useContractRead.ts` inside the `hooks/contract` directory.

```markdown
|--packages
    > react-app
        |---hooks
            |---contract
                |---useContractRead.ts
```

Inside this file we implement the following code:
```typescript
// This hook is used to read from a smart contract

// Import the wagmi hook to read from a smart contract
import { useContractRead } from 'wagmi';
// Import the Marketplace ABI(Interface)
import MarketplaceInstance from "../../abi/Marketplace.json";

// read from smart contract
export const useContractCall = (functionName: string, args?: Array<any>, watch?: boolean, from? : `0x${string}` | undefined) => {
    const resp = useContractRead({
        // The address of the smart contract, in this case the Marketplace from the JSON file
        address: MarketplaceInstance.address as `0x${string}`,
        // The ABI of the smart contract, in this case the Marketplace from the JSON file
        abi: MarketplaceInstance.abi,
        // The smart contract function name to call
        functionName: functionName,
        // The arguments to pass to the smart contract function
        args,
        // A boolean to watch for changes in the smart contract. If true, the hook will re-run when the smart contract changes
        watch,
        // The address of the user to call the smart contract function from which is optional
        overrides: from ? { from } : undefined,
        onError: (err) => {
            console.log({ err })
        }
    })

    return resp
}
```

Next, we will add a hook to make write calls to our smart contract. 

### 2.3 Hook for Contract Write
We create a file called `useContractWrite.ts` in the same folder as our read hook to make write calls (transactions) to our smart contract.

Add the following code to the `useContractWrite.ts` file:
```typescript
// This hook is used make write calls to a smart contract (send transactions)

// Import the wagmi hooks to prepare and write to a smart contract
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
// Import the Marketplace ABI(Interface)
import MarketplaceInstance from "../../abi/Marketplace.json";
// Import BigNumber from ethers to handle big numbers used in Celo
import {BigNumber} from "ethers";

// write to a smart contract
export const useContractSend = (functionName: string, args: Array<any>) => {
    // The gas limit to use when sending a transaction
    const gasLimit = BigNumber.from(1000000);

    // Prepare the write to the smart contract
    const { config } = usePrepareContractWrite({
        // The address of the smart contract, in this case the Marketplace from the JSON file
        address: MarketplaceInstance.address as `0x${string}`,
        // The ABI of the smart contract, in this case the Marketplace from the JSON file
        abi: MarketplaceInstance.abi,
        // The smart contract function name to call
        functionName,
        // The arguments to pass to the smart contract function
        args,
        // The gas limit to use when sending a transaction
        overrides: {
            gasLimit
        },
        onError: (err) => {
            console.log({ err })
        }
    })

    // Write to the smart contract using the prepared config
    const { data, isSuccess, write, writeAsync, error, isLoading } = useContractWrite(config)
    return { data, isSuccess, write, writeAsync, isLoading }
}
```
Great now we have our hooks to read and write to our smart contract. Next, we will create a hook to approve our ERC20 token to be spent via our smart contract.

### 2.4 Hook for Contract Approve
Finally, we create a hook to approve our ERC20 token to be spent via our smart contract, this file is very similar to our write hook and you might be able to combine them into one hook. But for the sake of simplicity, we will create a separate hook for this.

We create a file called `useApprove.ts` in the same folder as our read and write hooks and add the following code:
```typescript
// This hook is used to approve the marketplace contract to spend the user's cUSD tokens

// Import the wagmi hooks to prepare and write to a smart contract
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
// Import the ERC20 ABI(Interface)
import Erc20Instance from "../../abi/erc20.json";
// Import the Marketplace ABI(Interface)
import MarketplaceInstance from "../../abi/Marketplace.json";
// Import BigNumber from ethers to handle big numbers used in Celo
import {BigNumber} from "ethers";

// write to a smart contract
export const useContractApprove = (price: number | string) => {
    // The gas limit to use when sending a transaction
    const gasLimit = BigNumber.from(1000000);
    // Prepare the write to the smart contract
    const { config } = usePrepareContractWrite({
        // The address of the smart contract, in this case the ERC20 cUSD token address from the JSON file
        address: Erc20Instance.address as `0x${string}`,
        // The ABI of the smart contract, in this case the ERC20 cUSD token address from the JSON file
        abi: Erc20Instance.abi,
        // The smart contract function name to call
        functionName: 'approve',
        // The arguments to pass to the smart contract function, in this case the Marketplace address and the product price
        args: [MarketplaceInstance.address, price],
        // The gas limit to use when sending a transaction
        overrides: {
            gasLimit
        },
        onError: (err) => {
            console.log({ err })
        }
    })

    // Write to the smart contract using the prepared config
    const { data, isSuccess, write, writeAsync, error, isLoading } = useContractWrite(config)
    return { data, isSuccess, write, writeAsync, isLoading }
}
```

Now we have all the hooks we need to interact with our smart contract. Next, we will create the components we will use to build our application.

## 3. Component implementation
In this section, we will implement the components we will use to build our application. For the styling of our application, we will be using [Tailwind CSS](https://tailwindcss.com/) which is a utility-first CSS framework. This means that instead of writing CSS classes, we will be writing utility classes that will be used to style our components. This makes it easier to style our components and also makes our codebase more readable.

### 3.1 Alert Components
Let's implement the components we will use as building blocks for our application, we will start with the alert components.

Inside the `components` folder, we see three files:
```markdown
|--react-app
    |---components
        |---Footer.tsx
        |---HeaderRK.tsx
        |---Layout.tsx
```

Next, we create a folder under components called `alerts`. Inside this `alerts` folder, let us create three files as below:
```markdown
|--components
    |---alerts
        |---ErrorAlert.tsx
        |---LoadingAlert.tsx
        |---SuccessAlert.tsx
```

These components will be used as reusable components to display information to the user when our marketplace is interacting with our smart contracts.
They will accept two props, a `message` prop which is the message body of your alert, and an optional `clear` function which is a function that will clear the alert message.

To keep this tutorial short we will not explain all the code here but we link to the code of the components that have been extensively commented on. 

Add the following code to the alert components:

[Code ErrorAlert.tsx](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/alerts/ErrorAlert.tsx)

[Code LoadingAlert.tsx](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/alerts/LoadingAlert.tsx)

[Code SuccessAlert.tsx](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/alerts/SuccessAlert.tsx)

### 3.2 Product Component
Now let us create our Product component. This component will display our product details and also allow us to buy the product.

Create a file called `Product.tsx` in the components folder.

```markdown
|--components
    |---Product.tsx
```

Let's create the code for our `Product` component file.

First, we import the dependencies we need for our component:
```typescript
/* eslint-disable @next/next/no-img-element */
// This component displays and enables the purchase of a product

// Importing the dependencies
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
// Import ethers to format the price of the product correctly
import { ethers } from "ethers";
// Import the useConnectModal hook to trigger the wallet connect modal
import { useConnectModal } from "@rainbow-me/rainbowkit";
// Import the useAccount hook to get the user's address
import { useAccount } from "wagmi";
// Import the toast library to display notifications
import { toast } from "react-toastify";
// Import our custom identicon template to display the owner of the product
import { identiconTemplate } from "@/helpers";
// Import our custom hooks to interact with the smart contract
import { useContractApprove } from "@/hooks/contract/useApprove";
import { useContractCall } from "@/hooks/contract/useContractRead";
import { useContractSend } from "@/hooks/contract/useContractWrite";
```

Next, we create an interface for our product:
```typescript
// Define the interface for the product, an interface is a type that describes the properties of an object
interface Product {
  name: string;
  price: number;
  owner: string;
  image: string;
  description: string;
  location: string;
  sold: boolean;
}
```

Now, we create our `Product` component that takes in an id, an error setter, a loading setter and a clear function:
```typescript
// Define the Product component which takes in the id of the product and some functions to display notifications
const Product = ({ id, setError, setLoading, clear }: any) => {
  // Use the useAccount hook to store the user's address
  const { address } = useAccount();
  // Use the useContractCall hook to read the data of the product with the id passed in, from the marketplace contract
  const { data: rawProduct }: any = useContractCall("readProduct", [id], true);
  // Use the useContractSend hook to purchase the product with the id passed in, via the marketplace contract
  const { writeAsync: purchase } = useContractSend("buyProduct", [Number(id)]);
  const [product, setProduct] = useState<Product | null>(null);
  // Use the useContractApprove hook to approve the spending of the product's price, for the ERC20 cUSD contract
  const { writeAsync: approve } = useContractApprove(
    product?.price?.toString() || "0"
  );
  // Use the useConnectModal hook to trigger the wallet connect modal
  const { openConnectModal } = useConnectModal();
  // Format the product data that we read from the smart contract
  const getFormatProduct = useCallback(() => {
    if (!rawProduct) return null;
    setProduct({
      owner: rawProduct[0],
      name: rawProduct[1],
      image: rawProduct[2],
      description: rawProduct[3],
      location: rawProduct[4],
      price: Number(rawProduct[5]),
      sold: rawProduct[6].toString(),
    });
  }, [rawProduct]);

  // Call the getFormatProduct function when the rawProduct state changes
  useEffect(() => {
    getFormatProduct();
  }, [getFormatProduct]);
```

Next, we create the functions that handle the purchase of the product:
```typescript
 // Define the handlePurchase function which handles the purchase interaction with the smart contract
  const handlePurchase = async () => {
    if (!approve || !purchase) {
      throw "Failed to purchase this product";
    }
    // Approve the spending of the product's price, for the ERC20 cUSD contract
    const approveTx = await approve();
    // Wait for the transaction to be mined, (1) is the number of confirmations we want to wait for
    await approveTx.wait(1);
    setLoading("Purchasing...");
    // Once the transaction is mined, purchase the product via our marketplace contract buyProduct function
    const res = await purchase();
    // Wait for the transaction to be mined
    await res.wait();
  };

  // Define the purchaseProduct function that is called when the user clicks the purchase button
  const purchaseProduct = async () => {
    setLoading("Approving ...");
    clear();

    try {
      // If the user is not connected, trigger the wallet connect modal
      if (!address && openConnectModal) {
        openConnectModal();
        return;
      }
      // If the user is connected, call the handlePurchase function and display a notification
      await toast.promise(handlePurchase(), {
        pending: "Purchasing product...",
        success: "Product purchased successfully",
        error: "Failed to purchase product",
      });
      // If there is an error, display the error message
    } catch (e: any) {
      console.log({ e });
      setError(e?.reason || e?.message || "Something went wrong. Try again.");
      // Once the purchase is complete, clear the loading state
    } finally {
      setLoading(null);
    }
  };

  // If the product cannot be loaded, return null
  if (!product) return null;

  // Format the price of the product from wei to cUSD otherwise the price will be way too high
  const productPriceFromWei = ethers.utils.formatEther(
    product.price.toString()
  );
```

And finally, we return the JSX for our component and export it:
```typescript
// Return the JSX for the product component
  return (
    <div className={"shadow-lg relative rounded-b-lg"}>
      <p className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-white xl:aspect-w-7 xl:aspect-h-8 ">
          {/* Show the number of products sold */}
          <span
            className={
              "absolute z-10 right-0 mt-4 bg-amber-400 text-black p-1 rounded-l-lg px-4"
            }
          >
            {product.sold} sold
          </span>
          {/* Show the product image */}
          <img
            src={product.image}
            alt={"image"}
            className="w-full h-80 rounded-t-md  object-cover object-center group-hover:opacity-75"
          />
          {/* Show the address of the product owner as an identicon and link to the address on the Celo Explorer */}
          <Link
            href={`https://explorer.celo.org/alfajores/address/${product.owner}`}
            className={"absolute -mt-7 ml-6 h-16 w-16 rounded-full"}
          >
            {identiconTemplate(product.owner)}
          </Link>
        </div>

        <div className={"m-5"}>
          <div className={"pt-1"}>
            {/* Show the product name */}
            <p className="mt-4 text-2xl font-bold">{product.name}</p>
            <div className={"h-40 overflow-y-hidden scrollbar-hide"}>
              {/* Show the product description */}
              <h3 className="mt-4 text-sm text-gray-700">
                {product.description}
              </h3>
            </div>
          </div>

          <div>
            <div className={"flex flex-row"}>
              {/* Show the product location */}
              <img src={"/location.svg"} alt="Location" className={"w-6"} />
              <h3 className="pt-1 text-sm text-gray-700">{product.location}</h3>
            </div>

            {/* Buy button that calls the purchaseProduct function on click */}
            <button
              onClick={purchaseProduct}
              className="mt-4 h-14 w-full border-[1px] border-gray-500 text-black p-2 rounded-lg hover:bg-black hover:text-white"
            >
              {/* Show the product price in cUSD */}
              Buy for {productPriceFromWei} cUSD
            </button>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Product;
```

[Code Product.tsx](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/Product.tsx)

In the `Product.tsx` file, we also display an identicon of the product owner's wallet address that will also link to the address in the Celo explorer. We will use the `react-blockies` package to generate the identicon.

Let us create our `identiconTemplate` helper function. This function will take in an address and return an identicon image.
We will create a folder called `helpers` in the `packages/react-app` folder. We will then create a file called `index.tsx` in the `helpers` folder.

It should look like this:
```markdown
|--packages
    > react-app
        |---components
        |---helpers
            |---index.tsx
```

Add the following code to the `index.tsx` file:
```typescript
import Blockies from 'react-blockies';

export const identiconTemplate = (address : string) => {
    return <Blockies size={14} // number of pixels square
    scale={4} // width/height of each 'pixel'
    className="identicon border-2 border-white rounded-full" // optional className
    seed={address} // seed used to generate icon data, default: random
    />
}
```

Let's also create an icon for the location of the product.
Let us create a file called `location.svg` in the public folder.

It should look like this:
```markdown
|--packages
    > react-app
        |---components
        |---helpers
        |---public
            |---location.svg
```

Add the following code to the `location.svg` file:
```svg
<?xml version="1.0" encoding="utf-8"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>location</title>
<path d="M11.163 11.554c0-2.655 2.166-4.807 4.837-4.807s4.837 2.152 4.837 4.807-2.166 4.806-4.837 4.806-4.837-2.152-4.837-4.806zM7.777 12.154c0 2.011 2.454 6.25 2.454 6.25l5.769 9.614 5.438-9.613c0 0 2.785-4.27 2.785-6.25 0-4.513-3.682-8.171-8.223-8.171s-8.223 3.657-8.223 8.17z"></path>
</svg>
```

### 3.3 Product List Component
We will now create our product list component. This component will display a list of products fetched from the blockchain. The `productList` component will fetch the amounts of products from our smart contract and then loop through the products and display the product details in our `Product` component. We will create a file called `ProductList.tsx` in the components folder.

It should look like this:
```markdown
|--components
    |---Product.tsx
    |---ProductList.tsx
```

Let us now create the code for the `ProductList.tsx` file.

First, we import the dependencies we need for the component:
```typescript
// This component is used to display all the products in the marketplace

// Importing the dependencies
import { useState } from "react";
// Import the useContractCall hook to read how many products are in the marketplace via the contract
import { useContractCall } from "@/hooks/contract/useContractRead";
// Import the Product and Alert components
import Product from "@/components/Product";
import ErrorAlert from "@/components/alerts/ErrorAlert";
import LoadingAlert from "@/components/alerts/LoadingAlert";
import SuccessAlert from "@/components/alerts/SuccessAlert";
```

Next, we create the `ProductList` which displays a list of products fetched from our marketplace smart contract and displays them in the `Product` component we created earlier:
```typescript
// Define the ProductList component
const ProductList = () => {
  // Use the useContractCall hook to read how many products are in the marketplace contract
  const { data } = useContractCall("getProductsLength", [], true);
  // Convert the data to a number
  const productLength = data ? Number(data.toString()) : 0;
  // Define the states to store the error, success and loading messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  // Define a function to clear the error, success and loading states
  const clear = () => {
    setError("");
    setSuccess("");
    setLoading("");
  };
  // Define a function to return the products
  const getProducts = () => {
    // If there are no products, return null
    if (!productLength) return null;
    const products = [];
    // Loop through the products, return the Product component and push it to the products array
    for (let i = 0; i < productLength; i++) {
      products.push(
        <Product
          key={i}
          id={i}
          setSuccess={setSuccess}
          setError={setError}
          setLoading={setLoading}
          loading={loading}
          clear={clear}
        />
      );
    }
    return products;
  };
```

And finally, we return the JSX for the component and export it:
```typescript
// Return the JSX for the component
  return (
    <div>
      {/* If there is an alert, display it */}
      {error && <ErrorAlert message={error} clear={clear} />}
      {success && <SuccessAlert message={success} />}
      {loading && <LoadingAlert message={loading} />}
      {/* Display the products */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {/* Loop through the products and return the Product component */}
          {getProducts()}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
```
[Code ProductList.tsx](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/ProductList.tsx)

That's it! Now we can display our products in the marketplace. In the next section, we will cover how to add products to our marketplace.

### 3.4 Add Product Component
We will now create our add product component. This component will display a button that will open a modal that will allow us to add a new product to our marketplace.
Create a file called `AddProduct.tsx` in the components folder and add the following code to the `AddProduct.tsx` file:
```typescript
// This component is used to render the AddProductModal component

// Importing the AddProductModal component
import AddProductModal from "./AddProductModal";

// Define the AddProduct component
const AddProduct = () => {
    return (
        <div className="flex justify-start">
            {/* Render the AddProductModal component */}
            <AddProductModal />
        </div>
    );
};

export default AddProduct;
```

That's it, but we still need to create the `AddProductModal` component that we used.

### 3.5 Add Product Modal Component
We will now create our `AddProductModal` component. This component will display a modal that will allow us to add a new product to our marketplace.
The component collects the product name, price, description, location and image-URL from the user and then calls the `writeProduct` function in our smart contract to add the product to our marketplace.

Create a file called `AddProductModal.tsx` in the `components` folder.

First, let us import the required dependencies:
```typescript
// This component is used to add a product to the marketplace and show the user's cUSD balance

// Importing the dependencies
import { useEffect, useState } from "react";
// import ethers to convert the product price to wei
import { ethers } from "ethers";
// Import the useAccount and useBalance hooks to get the user's address and balance
import { useAccount, useBalance } from "wagmi";
// Import the toast library to display notifications
import { toast } from "react-toastify";
// Import the useDebounce hook to debounce the input fields
import { useDebounce } from "use-debounce";
// Import our custom useContractSend hook to write a product to the marketplace contract
import { useContractSend } from "@/hooks/contract/useContractWrite";
// Import the erc20 contract abi to get the cUSD balance
import erc20Instance from "../abi/erc20.json";
```

Next, we initialize our state variables. We use the `useAccount` and `useBalance` hooks to get the user's wallet address and balance. We then use the `useDebounce` hook to delay the execution of our function to avoid unnecessary calls and use the `useContractSend` hook to write to our smart contract adding a new product to our marketplace.

```typescript
// The AddProductModal component is used to add a product to the marketplace
const AddProductModal = () => {
    // The visible state is used to toggle the modal
    const [visible, setVisible] = useState(false);
    // The following states are used to store the values of the form fields
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState<string | number>(0);
    const [productImage, setProductImage] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productLocation, setProductLocation] = useState("");
    // The following states are used to store the debounced values of the form fields
    const [debouncedProductName] = useDebounce(productName, 500);
    const [debouncedProductPrice] = useDebounce(productPrice, 500);
    const [debouncedProductImage] = useDebounce(productImage, 500);
    const [debouncedProductDescription] = useDebounce(productDescription, 500);
    const [debouncedProductLocation] = useDebounce(productLocation, 500);
    // The loading state is used to display a loading message
    const [loading, setLoading] = useState("");
    // The displayBalance state is used to store the cUSD balance of the user
    const [displayBalance, setDisplayBalance] = useState(false);

```

Next, we create some functions that check if the input fields are filled and clear the input fields after the product is added to the marketplace. We also add a function that converts the product price to wei, because the smart contract expects the product price to be in wei. Wei is the smallest unit of the cUSD token and has 18 decimal places.

```typescript
// Check if all the input fields are filled
  const isComplete =
    productName &&
    productPrice &&
    productImage &&
    productLocation &&
    productDescription;

  // Clear the input fields after the product is added to the marketplace
  const clearForm = () => {
    setProductName("");
    setProductPrice(0);
    setProductImage("");
    setProductDescription("");
    setProductLocation("");
  };

  // Convert the product price to wei
  const productPriceInWei = ethers.utils.parseEther(
    debouncedProductPrice.toString()
  );
```

Now, we create the functions to add a product to the marketplace:
```typescript
  // Use the useContractSend hook to use our writeProduct function on the marketplace contract and add a product to the marketplace
  const { writeAsync: createProduct } = useContractSend("writeProduct", [
    debouncedProductName,
    debouncedProductImage,
    debouncedProductDescription,
    debouncedProductLocation,
    productPriceInWei,
  ]);

  // Define function that handles the creation of a product through the marketplace contract
  const handleCreateProduct = async () => {
    if (!createProduct) {
      throw "Failed to create product";
    }
    setLoading("Creating...");
    if (!isComplete) throw new Error("Please fill all fields");
    // Create the product by calling the writeProduct function on the marketplace contract
    const purchaseTx = await createProduct();
    setLoading("Waiting for confirmation...");
    // Wait for the transaction to be mined
    await purchaseTx.wait();
    // Close the modal and clear the input fields after the product is added to the marketplace
    setVisible(false);
    clearForm();
  };

  // Define function that handles the creation of a product, if a user submits the product form
  const addProduct = async (e: any) => {
    e.preventDefault();
    try {
      // Display a notification while the product is being added to the marketplace
      await toast.promise(handleCreateProduct(), {
        pending: "Creating product...",
        success: "Product created successfully",
        error: "Something went wrong. Try again.",
      });
      // Display an error message if something goes wrong
    } catch (e: any) {
      console.log({ e });
      toast.error(e?.message || "Something went wrong. Try again.");
      // Clear the loading state after the product is added to the marketplace
    } finally {
      setLoading("");
    }
  };
```

Next, we get the user's cUSD balance and display it to the user. We could have separated this into a different component, but for the sake of simplicity, we will keep it here.

```typescript
  // Get the user's address and balance
  const { address, isConnected } = useAccount();
  const { data: cusdBalance } = useBalance({
    address,
    token: erc20Instance.address as `0x${string}`,
  });

  // If the user is connected and has a balance, display the balance
  useEffect(() => {
    if (isConnected && cusdBalance) {
      setDisplayBalance(true);
      return;
    }
    setDisplayBalance(false);
  }, [cusdBalance, isConnected]);
```

Finally, we return the JSX of the modal and the balance and export the component.
```typescript jsx
// Define the JSX that will be rendered
  return (
    <div className={"flex flex-row w-full justify-between"}>
      <div>
        {/* Add Product Button that opens the modal */}
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="inline-block ml-4 px-6 py-2.5 bg-black text-white font-medium text-md leading-tight rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          Add Product
        </button>

        {/* Modal */}
        {visible && (
          <div
            className="fixed z-40 overflow-y-auto top-0 w-full left-0"
            id="modal"
          >
            {/* Form with input fields for the product, that triggers the addProduct function on submit */}
            <form onSubmit={addProduct}>
              <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                  &#8203;
                </span>
                <div
                  className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  {/* Input fields for the product */}
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <label>Product Name</label>
                    <input
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                      required
                      type="text"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    />

                    <label>Product Image (URL)</label>
                    <input
                      onChange={(e) => {
                        setProductImage(e.target.value);
                      }}
                      required
                      type="text"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    />

                    <label>Product Description</label>
                    <input
                      onChange={(e) => {
                        setProductDescription(e.target.value);
                      }}
                      required
                      type="text"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    />

                    <label>Product Location</label>
                    <input
                      onChange={(e) => {
                        setProductLocation(e.target.value);
                      }}
                      required
                      type="text"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    />

                    <label>Product Price (cUSD)</label>
                    <input
                      onChange={(e) => {
                        setProductPrice(e.target.value);
                      }}
                      required
                      type="number"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    />
                  </div>
                  {/* Button to close the modal */}
                  <div className="bg-gray-200 px-4 py-3 text-right">
                    <button
                      type="button"
                      className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                      onClick={() => setVisible(false)}
                    >
                      <i className="fas fa-times"></i> Cancel
                    </button>
                    {/* Button to add the product to the marketplace */}
                    <button
                      type="submit"
                      disabled={!!loading || !isComplete || !createProduct}
                      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                    >
                      {loading ? loading : "Create"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Display the user's cUSD balance */}
      {displayBalance && (
        <span
          className="inline-block text-dark ml-4 px-6 py-2.5 font-medium text-md leading-tight rounded-2xl shadow-none "
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          Balance: {Number(cusdBalance?.formatted || 0).toFixed(2)} cUSD
        </span>
      )}
    </div>
  );
};

export default AddProductModal;
```

[Code AddProductModal.tsx](https://github.com/dacadeorg/tutorials/blob/main/celo/celo-frontend-101/code/AddProductModal.tsx)

### 3.6 Connecting our Components

Now we have created all the necessary components for our marketplace. Let's connect them in our `index.tsx` file.

Open the `index.tsx` file in the pages folder.
```markdown
|--packages
    > react-app
        |---components
        |---pages
            |---index.tsx
```

Inside of our `index.tsx` file, we will import our `AddProductModal` and `ProductList` components and display them on our root index page.

Update the `index.tsx` file with the following code:

```typescript jsx
// This is the main page of the app

// Import the AddProductModal and ProductList components
import AddProductModal from "@/components/AddProductModal";
import ProductList from "@/components/ProductList";

// Export the Home component
export default function Home() {
  return (
    <div>
        <AddProductModal />
        <ProductList />
    </div>
  )
}
```

## 4. Testing our Application
Now that we have completed our application, we can test it out. To do this, we will need to run the application if it's not already running. 

Go into your terminal and run the command in the `react-app` folder to start the development server:

```
npm run dev
```

or if you are using yarn

```
yarn run dev
```

You should see the following output in your terminal:

```bash
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Now, open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should now see the application running.


### 4.1 Metamask Wallet, Alfajores Testnet, and Celo Faucet
If you will need to get a wallet, change the network to the Alfajores testnet, and get some testnet tokens to test the application.

If you want to test how to connect your wallet to the application, you can install the [MetaMask](https://metamask.io/) extension on your browser and create a wallet.

After you have set up the MetaMask wallet, you can use this [Link](https://chainlist.org/chain/44787) and click on "Connect Wallet", under "Celo Alfajores Testnet" to change the network of your wallet to the Alfajores testnet.

We will need two accounts to test the buying functionality of the application. One account will be the seller and the other will be the buyer.

To create a new account, we will click on the account icon in the top right corner of our metamask wallet and click on the create account button.
We will repeat this process to create a second account.

The process should look like this:

![](https://i.imgur.com/qTBq1Rd.gif)

Now that we have two accounts, we can get some testnet tokens for each account. You can get some testnet tokens from the [Celo faucet](https://celo.org/developers/faucet). You should then be able to see a Celo balance if you click on your wallet address on the top right corner of the page.

### 4.2 Testing the Add Product functionality
Now that we have our wallet set up and have some testnet tokens, we can add a product to the marketplace, use the seller account for this.

Click on the "Add Product" button on the top right corner of the page. You should see a modal pop-up with the input fields for the product. Fill in the input fields with the product details and click on the "Create" button.

Once you have clicked on the create button, you will be prompted to sign a transaction in order to create the product. Click on the "Sign" button to sign the transaction.

Once the transaction is signed, we will be redirected to the product page where we can see the product we just created.

This process should look like the following:

![](https://i.imgur.com/G0xmIxK.gif)

### 4.3 Testing the Buy Product functionality
Now that we have created a product, we can test the buy product functionality.

Switch to the buyer account in Metamask. To do this, we will click on the account icon in the top right corner of our Metamask wallet and click on the switch account button. Make sure to disconnect the seller account from the application via Metamask by clicking on the green circle next to the account address, that says "Connected" and click on "Disconnect".

With the buyer account selected, we can now buy the product we just created. Click on the "Buy" button on the product page. Once you have clicked on the "Buy" button, you will be prompted to sign a transaction in order to approve the spending of the product price for the contract on your behalf. Click on the "Sign" button to sign the transaction. Next, you will be prompted to sign a transaction in order to buy the product. Click on the "Sign" button to sign this transaction as well.

If you refresh the page, you will see that your current balance has decreased by the product price and the seller's balance has increased by the product price.

The whole process should look like this:

![](https://i.imgur.com/oNcDpPC.gif)

## 5. Conclusion
Great job! You have now created a decentralized marketplace application on the Celo blockchain. 

You have learned:
- How to create a project with the Celo Composer
- How to connect to a smart contract on the Celo blockchain
- How to React hooks and components to interact with the smart contract

Now you can start to build your own decentralized applications on the Celo blockchain.