You will build the following smart contract in this chapter:
[marketplace.sol](https://github.com/dacadeorg/celo-development-101/blob/main/code/celo101-code-chapter_2/2-7-transactions-and-erc20-interface/marketplace.sol)
  
## 2.1 Remix Basics (8 min)

The Remix IDE is an open-source tool that helps you write Solidity contracts in your browser.

Remix is mainly used to write Solidity contracts for Ethereum but can also be used to write Solidity contracts for Celo.

While the development of Celo on Remix is quite similar to Ethereum on Remix, there are some differences. The main difference is that you must use Celo or cUSD for transactions and gas prices instead of Ether. Additionally, you will deploy to the Celo blockchain and the Celo testnets, Alfajores, instead of the Ethereum Blockchain or its testnets. To do that, you will use a Celo plugin for Remix, where you can compile, test, and deploy Solidity contracts for Celo.  You will learn how to do this later in the tutorial.

In this section, you will learn how to use the basic functionality of Remix.
  
1. Go to [https://remix.ethereum.org/](https://remix.ethereum.org/).
2. Click on featured plugins, “LEARNETH”.
3. Click on Remix Basics.
4. Start the tutorial and finish all lessons of Remix Basics.

![](https://cdn-celo-101-dacade.netlify.app/celo_2_1_remix_basics.gif)

## 2.2 Solidity File Setup (5 min)

You will start by setting up your Solidity file.

Go to remix.ethereum.org, create a new file, call it something like marketplace.sol, and open it.

You will now set up the first basic parameters for your contract.

```solidity
// SPDX-License-Identifier: MIT  

pragma solidity >=0.7.0 <0.9.0;
```

In the first line, you specify the license the contract uses. Here is a comprehensive list of the available licenses [https://spdx.org/licenses/](https://spdx.org/licenses/).

Using the `pragma` keyword, you specify the solidity version that you want the compiler to use. In this case, it should be higher than or seven and lower than nine. It is important to specify the version of the compiler because solidity changes constantly. If you want to execute older code without breaking it, you can do that by using an older compiler version.

```solidity
contract Marketplace {  

    string public product = "Burger";  
}
```

You define your contract with the keyword `contract` and give it a name.

In the next line, you declare a state variable.

By now, you should know what smart contracts are. If not, we recommend you take a look at our ([Introduction to Blockchain course](https://dacade.org/js-dev-101/introduction)). Like Ethereum, the Celo blockchain is a state machine. When you change a state variable through a transaction, that data synchronizes across the nodes of the entire Celo network.

You need to specify the type of the variable; in this case, it's a string ([Learn more about types](https://docs.soliditylang.org/en/latest/types.html)). You can define the visibility of the variable with the keyword public because you want users to access it from outside the contract and use an automatically generated getter function ([Learn more about visibility](https://docs.soliditylang.org/en/latest/contracts.html#visibility-and-getters)).

Then, name your variable `product` and assign it the string `"Burger"`.

Now compile the contract, deploy it, and get your variable by calling the automatic getter function.
![](https://cdn-celo-101-dacade.netlify.app/celo_2_2_solidity_file_setup.gif)

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_2/2-2-solidity-file-setup/marketplace.sol)

## 2.3 Read and Write Functions (6 min)

Currently, the value of your product variable is hardcoded into the contract. In this section, you will enable the user to enter and retrieve the value of the product variable.  
```solidity
contract Marketplace {

    string internal product;

    function writeProduct(string memory _product) public {
        product = _product;
    }
}
```
First, declare your variable `product`, but this time you don’t assign it a value. But it is a string. This time the visibility is internal, you will create your own getter function.

Next, create a function to let the user assign a new value to the product variable. Name it `writeProduct`.

You have to specify the type of parameters of the function. In this case, it’s just a string. A string is technically a special type of array. For arrays, you have to annotate the location where it is stored. For public function parameters, use memory ([Learn more about data location](https://docs.soliditylang.org/en/latest/types.html?highlight=memory#data-location)). Don't worry about the data location for now. In this tutorial, we will only concentrate on basic concepts where you can use memory.

Name the parameter, which is temporarily stored in memory, product, with an underscore to distinguish it from the state variable `product` that is stored in the blockchain.

You also have to define the visibility of your function, it will be public.

In the next line, assign the value of the parameter to your state variable.

Now you create a second function to let the user read out the value of the variable `product`.

```solidity
contract Marketplace {

    string internal product;

    function writeProduct(string memory _product) public {
        product = _product;
    }

    function readProduct() public view returns (string memory) {
        return product;
    }

}
```

Name the function `readProduct`. You don’t need any parameter. For now, you will just return product. This function will be public. Because this function doesn’t modify but only reads the state, use the keyword `view` ([Learn more about view functions](https://docs.soliditylang.org/en/latest/contracts.html#view-functions)).

You need to specify the return type. Because the return type is a string, you also need to select the data location where it is stored. Use `memory` for public functions.

In the next line, you just return your state variable product.

Your contract should now behave like this:
![](https://cdn-celo-101-dacade.netlify.app/celo_2_3_read_and_write_functions.gif)

Code for this section:
[Link to code](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_2/2-3-read-and-write-functions/marketplace.sol)


## 2.4 Save multiple Products with Arrays (5 min)
In your current contract, you can only store one product.
In this section, you will learn how to store multiple products.

First, remove the state variable product. You will use an array of strings instead.

```solidity
contract Marketplace {

    string[] public products;
```

This allows us to store string values in our products array. We will also give it a `public` visibility, this will automatically give us a getter function to fetch our products without having to create a `readProduct` function.

By default, the items in our array will start at index 0. So the first product will be at index 0, the second at index 1, and so on. This will come in handy when we want to fetch a specific product from the array.

Now you need to adapt your `writeProduct` function.

```solidity
function writeProduct(string memory _product) public {
	products.push(_product);
}
```
The function basically receives the product as a parameter and pushes it to our product array.

We do not need a `readProduct` function to get our products we saved in our products array. This is because we gave our product array a `public visibility`. This tells solidity to already create a getter function for us.
To fetch the product, all you will to pass the index of the product you want to fetch.

If you test it, it should look like this:
![](https://hackmd.io/_uploads/H1snkxMT2.gif)

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_2/2-4-save-multiple-products-with-mappings/marketplace.sol)

## 2.5 Save multiple Variables with Structs (8 min)

In this section of the tutorial, you will learn how to save a product with multiple variables.

At the moment you can only store one string for your product. When you look at the DApp that you want to build you can see that storing one string is not enough. You also need to store the address of the owner, an image link, a price, a location and the number of times it was sold.

In Solidity, you use structs to define new types that can group variables. A struct behaves similar to an object in javascript ([Learn more about structs](https://docs.soliditylang.org/en/latest/types.html#structs)).

```solidity
contract Marketplace {

    struct Product {
        address owner;
        string name;
        string image;
        string description;
        string location;
        uint256 price;
        uint256 sold;
    }
```

You create a new struct named Product with the `struct` keyword.

The first variable that you will store is of the type `address`. This variable will be named `owner` because it’s the address of the user who submitted the product.

Next, create `string` variables for the `name`, `image`, `description` and `location` of the product and the `uint` type for `price` and `sold`, since they will never be negative.

Next, we create an array of products to store multiple products. We will use the `public` visibility, so we can access it from outside the contract.
In this case we are no longer using a mapping as this allows us to loop over the products and fetch all of them. ([Learn more about arrays](https://docs.soliditylang.org/en/latest/types.html#arrays))

```solidity
  Product[] public products;
```

You also need to adapt the `writeProduct` function.

```solidity
  function writeProduct(
    string memory _name,
    string memory _image,
    string memory _description,
    string memory _location,
    uint256 _price
) external {
    products.push(Product(
        msg.sender,
        _name,
        _image,
        _description,
        _location,
        _price,
        0
    ));
   }

}

```
Because we are no longer using a mapping, we do not need to pass an index to the function. Instead, we will use the `push` function to add a new product to the array. The `push` function will add a new product to the end of the array. ([Learn more about arrays](https://docs.soliditylang.org/en/latest/types.html#arrays))

By default, the items in our array will start at index 0. So the first product will be at index 0, the second at index 1, and so on. This will come in handy when we want to fetch a specific product from the array.

The function stays `public`. When a user adds a new product to your marketplace contract, you set `_sold` to the value `0`, because it tracks the number of times the product was sold. Of course, this is initially always zero, and therefore you don't need a parameter.

The first variable in the struct was the payable owner address. The function `msg.sender` returns the address of the entity that is making the call, it is also `payable`. This is what you are going to save as the owners’ address.

You also need to input the value for the other variables from your parameters.

Since we are using an array to store the products and also gave it a public visibility, we do not need to create a new function to read the products. Instead, we can use the `products` array directly.

This is how it should behave:
!![](https://hackmd.io/_uploads/S1JoVo133.gif)


[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_2/2-5-save-multiple-variables-with-structs/marketplace.sol)

## 2.6 Optimising the Contract (4 min)
In this section of the tutorial, you will optimise your contract. You will create a state variable that keeps track of how many products are stored in your contract. You will need this later when you want to iterate over all products in the frontend. This variable will also help you to create the indexes for your products, so the users don’t have to take care of that themselves.

Let us add a function to the contract that returns the length of the products array.
=
```solidity
  function getProductsLength() external view returns (uint256) {
    return products.length;
}
```

The function is `public` and returns a `uint` value. In the function body, you return the length of the products array.

It should work like this:
![](https://hackmd.io/_uploads/B1oO9oynh.gif)

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_2/2-6-optimising-the-contract/marketplace.sol)

## 2.7 Transactions and ERC20 Interface (8 min)

In this section of the tutorial, you will enable your contract to make transactions via the Celo stablecoin cUSD, an ERC-20 token.

Most tokens are ancestors of the very popular ERC-20 token and follow its standard interface. It provides you with very practical basic functionality that you don’t have to implement yourself ([Learn more in the Celo docs](https://docs.celo.org/developer-guide/celo-for-eth-devs)).

First, insert the interface of an ERC-20 token so your contract can interact with it.

You can find the functions and events of the interface in the Celo documentation ([Celo Docs](https://docs.celo.org/developer-guide/celo-for-eth-devs)).


```solidity
// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface ITransferFromToken {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract Marketplace {
```
You create an interface using the interface keyword, followed by a name. You can choose `ITransferFromToken` or another name, and the functionality of the interface. In this case, the functionality of the ERC-20 token.

```solidity
contract Marketplace {
    // rest of code
        uint256 sold;
    }
    
    address public cUsdTokenAddress;
```

Next, you need to know the address of the cUSD ERC-20 token on the Celo alfajores test network so you can interact with it ([See the cUSD contract on the blockchain explorer](https://alfajores-blockscout.celo-testnet.org/address/0x874069fa1eb16d44d622f2e0ca25eea172369bc1/transactions)).

Now you need to create a function to buy products from your contract.

```solidity
	function buyProduct(uint256 _index) external {
    Product storage product = products[_index];

    require(
        ITransferFromToken(cUsdTokenAddress).transferFrom(
            msg.sender,
            product.owner,
            product.price
        ),
        "Transfer failed."
    );

    product.sold++;
}

	function getProductsLength() public view returns (uint) {
		return (productsLength);
	}
}
```


You create a `buyProduct` function, you need a parameter for the index of the type `uint`.

Firstly, you need to get the product from the array. You can do this by using the index and the `products` array. You need to use the `storage` keyword to get the product from the array. ([Learn more about storage](https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html#storage-memory-and-the-stack))

Now you can use a require function to ensure valid conditions. In this case, you want to ensure that the cUSD transaction was successful ([Learn more about error handling](https://docs.soliditylang.org/en/latest/control-structures.html#error-handling-assert-require-revert-and-exceptions)).

Use the interface of the ERC-20 token and the address where it is stored, and call its `transferFrom` method, to transfer cUSD.

For the first parameter, you need the address of the sender. In this case, you need the entity executing the transaction. You can access the address using the msg.sender method.

The second parameter is the recipient of the transaction. Here it is the entity who created the product, `products[_index].owner`.

Finally, you need the amount of cUSD token that will be transferred, which, in this case, is the price of the product `products[_index].price`.

If there was a problem with the transaction, display an error message. Otherwise, increase the number of `products[_index].sold` for the product that was sold.

You're done with your first contract! 

In order to test this properly, you need to install a Celo wallet and deploy your contract to the Celo testnet.

[Code for this section](https://github.com/dacadeorg/celo-development-101/tree/main/code/celo101-code-chapter_2/2-7-transactions-and-erc20-interface/marketplace.sol)

## 2.8 Deploying your Contract to the Celo Blockchain (5 min)

In this brief final section of this tutorial, you will create a Celo wallet and deploy your contract to the Celo testnet alfajores.

### 2.8.1 Install Metamask

1. Go to [metamask.io](https://metamask.io/).
2. Click on the download button, then click on install for your browser (e.g., Chrome) and add the extension to your browser.
3. Create a wallet as described.

### 2.8.2 Connect Metamask to Alfajores

1. Click on "Ethereum Mainnet" in your MetaMask extension, then click on "Add Network".
2. Enter the data provided in this [Celo documentation](https://docs.celo.org/getting-started/wallets/using-metamask-with-celo/manual-setup). Make sure to choose the data for the Alfajores Testnet.

This GIF demonstrates how to connect to the testnet:
![](https://raw.githubusercontent.com/dacadeorg/celo-development-201/main/content/gifs/connect_metamask_alfajores.gif)

### 2.8.3 Get Alfajores Testnet Tokens

1. Go to the Alfajores testnet faucet [https://celo.org/developers/faucet](https://celo.org/developers/faucet).
2. Enter your wallet address, confirm the captcha, and click on "Done".
3. When you open your MetaMask extension, you should be able to see the Celo tokens you have received. To see the cUSD tokens, click on assets, then click on the "Import tokens" link, and enter "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1" as the "Token Contract Address".

You should now have a balance of Celo tokens and cUSD tokens on the Alfajores testnet.

This GIF demonstrates how to get tokens from the faucet:
![](https://raw.githubusercontent.com/dacadeorg/celo-development-201/main/content/gifs/alfajores_testnet_tokens.gif)

### 2.8.4 Deploy Contract to Alfajores

1. Compile your contract in Remix.
2. Go to the deploy tab, change the "ENVIRONMENT" to "Injected Web3" and confirm.
3. Select the right contract ("marketplace"), click on "Deploy" and confirm the transaction.

Your contract should appear in the "Deployed Contracts" section.

This GIF demonstrates how to deploy the contract:
![](https://raw.githubusercontent.com/dacadeorg/celo-development-201/main/content/gifs/deploy_to_alfajores.gif)

Great! You deployed your first contract on the Celo blockchain. Congratulations 🎉.
