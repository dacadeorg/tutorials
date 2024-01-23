<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2024 Dacade.org -->

# Sui DeepBook Tutorial
Welcome to the Sui DeepBook tutorial! In this tutorial, we'll explore the fundamentals Sui defi with DeepBook and the Move language.

## 1. Introduction
We will be building with DeepBook, a decentralized exchange (DEX) protocol that enables the exchange of assets within the Sui ecosystem. We will use DeepBook to create a liquidity pool, handle deposits and withdrawals, and execute various trading operations.

### 1.1 What you will learn
- **Setting up your environment:** We'll guide you through the process of setting up your development environment to begin working with Sui DeepBook.
- **Building a Sui DeepBook contract:** We'll explore the implementation of a Sui DeepBook contract, including the logic for liquidity pool creation, custodian account management, limit and market orders, and asset withdrawal.
- **Testing the Sui DeepBook contract:** We'll explore how to test our Sui DeepBook contract using the Sui CLI. We'll be building and publishing our contract and interacting with it using the Sui CLI.

### 1.2 Prerequisites
Below are listed the prerequisites that can help you get the most out of this tutorial:

- **Basic knowledge of Rust** - Although this isn't strictly necessary, it could prove beneficial.
- **Basic knowledge of Blockchain technology** - It is recommended that you have a basic understanding of blockchain technology.
- **Basic knowledge of the Sui Blockchain** - Although not necessary, it would be helpful to have a basic understanding of the Sui blockchain and its features.
- **Basic Understanding of Defi** - It is recommended, although not strictly necessary, that you have a basic understanding of the fundamental concepts of Decentralized Finance (DeFi).
- **Understanding of the terminal** - It is recommended that you have a basic understanding of the terminal and how to use it.

### 1.3 Technologies Used
Here are the key technologies used in this tutorial:

1. **Sui Blockchain** - Sui is a permissionless layer 1 blockchain designed to be both developer and user-friendly. It can support a wide range of application development with unrivaled speed at low cost. Focusing on asset ownership and programmability, Sui enables the creation of new financial primitives and the seamless exchange of assets.
2. **Move Language** - The Move language is based on Rust and is a resource-oriented programming language. Move aims to address limitations and vulnerabilities in existing blockchain smart contract languages by focusing on resource management, safety, and flexibility for blockchain assets.
3. **DeepBook** - DeepBook is a decentralized exchange (DEX) protocol that enables the exchange of assets. It enables the creation of pools, handling deposits and withdrawals, and executing various other trading operations.


### 1.4 Key Concepts
Before we dive into the development process, let's explore some relevant concepts and terminology:

- **Liquidity Pool:** A liquidity pool is a smart contract that contains a reserve of assets. Technically, a liquidity pool is a collection of tokens locked in a smart contract. Liquidity pools are used to facilitate decentralized trading and asset exchange within the world of decentralized finance (DeFi).
- **Base and Quote Assets:** A base asset is the asset that is being traded for the quote asset. For example, in the BTC/USDT trading pair, BTC is the base asset, and USDT is the quote asset.
- **Custodian Account:** A custodian account is a special account that holds assets on behalf of another account. Custodian accounts are used to manage assets within the Sui ecosystem, providing security and flexibility.
- **SUI Token:** Sui's native token is SUI, used for transactions and computational resources. Transaction blocks often deal with fractions of one SUI, and to simplify these transactions, Sui provides MIST, where one billion MIST equals one SUI. Gas costs, associated with processing transaction blocks and storing data, are paid using SUI or MIST.

### 1.5 Overview
1. [Introduction](#1-introduction) (10 min) - You are here! This section provides an overview of the tutorial and gives you a brief introduction to it.
2. [Setup](#2-setup) (30 min) - In this section, we'll guide you through the process of setting up your development environment to begin working with Sui DeepBook.
3. [Creating the Sui DeepBook Contract](#3-creating-the-sui-deepbook-contract) (120 min) - In this section, we'll explore the implementation of the Sui DeepBook contract, including the logic for liquidity pool creation, custodian account management, limit and market orders, and asset withdrawal.
4. [Testing the Contract](#4-testing-the-contract) (40 min) - In this section, we'll explore how to test our Sui DeepBook contract using the Sui CLI. We'll begin by building and publishing our contract to the Sui blockchain, then we'll interact with our contract using the Sui CLI.
5. [Conclusion](#5-conclusion) (5 min) - This section provides a brief summary of the tutorial and gives you some ideas for further exploration.

If you want to have a look at the completed code, you can find it [here](https://github.com/dacadeorg/sui-move-deepbook).

### 1.6 Educational Disclaimer
The provided Sui DeepBook contract is intended for learning purposes and has not undergone a formal security audit. Users are encouraged to thoroughly review the code, conduct security assessments, and understand associated risks before deploying in any production environment.

## 2. Setup
In this section, we will install the necessary tools and dependencies to begin working with Sui DeepBook.

### 2.1 Bootstraping the Boilerplate
Firstly, let's set up the boilerplate for our Sui DeepBook contract. This boilerplate provides a starting point for your smart contract development.

**1. Open your terminal.**

**2. Clone the boilerplate repository using the following command:**
```bash
git clone https://github.com/dacadeorg/sui-move-deepbook
```

**3. Change into the boilerplate directory:**
```bash
cd sui-move-deepbook
```

[//]: # (**4. Verify that your environment is set up correctly by running the following command:**)

[//]: # (```bash)

[//]: # (sui --version)

[//]: # (```)
Now we have the boilerplate set up, let's explore installing the necessary tools and dependencies.


### 2.2 Installing Sui and Dev Tools
The first step is to install Sui, Move, and the necessary dev tools. Follow the instructions below based on your operating system.
Please note that if you are on a windows machine, you will need to install WSL2 to run Sui. You can find the instructions [here](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10).

#### **2.2.1 Installing on Codespaces (Recommended)**

If you are using Codespaces, you can use the following script to install Sui and the necessary dev tools.

#### 1. Run the following commands to install the required dependencies.
```bash
sudo apt update
sudo apt install curl git-all cmake gcc libssl-dev pkg-config libclang-dev libpq-dev build-essential -y
```

#### 2. Install Rust and Cargo
Run the following command to install Rust and Cargo.
```bash
curl https://sh.rustup.rs -sSf | sh
```
After running this command, you will be prompted to select an option. Type 1 and press Enter to proceed with the installation.

Next, run this command

After installation is successful, run this command
```bash
source "$HOME/.cargo/env"
```


#### 3. Install Sui Binaries
Firstly you need to run this command to grant execute permissions to the script.
```bash
chmod u+x download-sui-binaries.sh
```

Then you can run the script to install Sui and the necessary dev tools.
```bash
./download-sui-binaries.sh "v1.15.0" "devnet" "ubuntu-x86_64"
```



When this process is complete, restart your terminal and run the following command to verify that Rust and Cargo have been installed correctly.
```bash
rustc --version
```

Also, run the following command to verify that Sui has been installed correctly.
```bash
sui --version
```

With that, you should have Sui and the necessary dev tools installed to continue with the tutorial.

#### **2.2.2 Installing on Ubuntu/Debian/WSL2(Ubuntu)**
#### 1. Install Required Dependencies
Run the following commands to install the required dependencies.
```bash
sudo apt update
sudo apt install curl git-all cmake gcc libssl-dev pkg-config libclang-dev libpq-dev build-essential -y
```
#### 2. Install Rust and Cargo
Run the following command to install Rust and Cargo.
```bash
curl https://sh.rustup.rs -sSf | sh
```
After running this command, you will be prompted to select an option. Type 1 and press Enter to proceed with the installation.
When this process is complete, restart your terminal and run the following command to verify that Rust and Cargo have been installed correctly.
```bash
rustc --version
```

#### 3. Install Sui
Firstly you need to run this command to grant execute permissions to the script.
```bash
chmod u+x download-sui-binaries.sh
```

Then you can run the script to install Sui and the necessary dev tools.
```bash
./download-sui-binaries.sh "v1.15.0" "devnet" "ubuntu-x86_64"
```


The script takes three arguments:
- **Sui Version:** The version of Sui to install. This should be a valid Sui version number. For example, "v1.15.0".
- **Sui Branch:** The environment that you are targeting, in our case it's devnet. Other available options are: testnet and mainnet.
- **Target:** The target platform to install Sui for. This should be a valid target platform. For example, "ubuntu-x86_64". Other examples include "macos-x86_64" and "windows-x86_64".

Finally, restart your terminal and run the following command to verify that Sui has been installed correctly.
```bash
sui --version
```


#### **2.2.3 Installing on MacOS**


#### 1. Install Sui Binaries
Firstly you need to run this command to grant execute permissions to the script.
```bash
chmod u+x download-sui-binaries.sh
```

Then you can run the script to install Sui and the necessary dev tools.

If you are on a Silicon based Mac, run the following command:
```bash
./download-sui-binaries.sh "v1.15.0" "devnet" "macos-arm64"
```

If you are on an Intel based Mac, run the following command:
```bash
./download-sui-binaries.sh "v1.15.0" "devnet" "macos-x86_64"
```


#### 2. Install Rust and Cargo
Run the following command to install Rust and Cargo.
```bash
curl https://sh.rustup.rs -sSf | sh
```
After running this command, you will be prompted to select an option. Type 1 and press Enter to proceed with the installation.

Next, run this command

After installation is successful, run this command
```bash
source "$HOME/.cargo/env"
```

When this process is complete, restart your terminal and run the following command to verify that Rust and Cargo have been installed correctly.
```bash
rustc --version
```

Also, run the following command to verify that Sui has been installed correctly.
```bash
sui --version
```


#### **2.2.4 Manually Installing on Ubuntu/Debian/WSL2(Ubuntu)**
If you want to install Sui manually, you can follow the instructions below.

Firstly, perform steps 1 and 2 from the previous section to install the required dependencies and Rust and Cargo.
After that is completed, you can proceed with the following steps.

#### 1. Install Sui Binaries
Run the following command to install Sui.
```bash
cargo install --locked --git https://github.com/MystenLabs/sui.git --branch devnet sui
```


**Note:** This command will take a while to complete. Please be patient.





### 2.3 Understanding the Boilerplate Code
Now that we've set up the boilerplate, let's explore the structure of the provided code, understand the purpose of each file, and prepare the `main.move` file for our Sui DeepBook contract.

#### 2.3.1 Boilerplate Code Structure
You should see the following code structure in your boilerplate directory:

```bash
├── sources
│   ├── main-test.move
│   ├── main.move
│   ├── wbtc.move
├── Move.toml
├── build-publish.sh
├── README.md
```

Let's explore the purpose of each file:
- **main-test.move:** An empty file for potential unit tests related to the main contract.
- **main.move:** The main file where our Sui DeepBook contract will be implemented. This file is currently empty but will be populated in the next section.
- **wbtc.move:** The wbtc.move file contains a basic implementation of a wrapped Bitcoin (WBTC) module. It showcases the structure of a token on the Sui blockchain, including initialization, minting, and burning functions.
- **Move.toml:** This Move.toml file defines the package information for our smart contract. It specifies dependencies on the Sui and DeepBook frameworks, which provide essential functionalities for blockchain development. Additionally, it assigns an address to our smart contract on the blockchain.
- **build-publish.sh:** The build-publish.sh script automates the build and publishing process of the smart contract. It extracts necessary information from the build output and sets environment variables for subsequent use.

## 3. Creating the Sui DeepBook Contract
Now that we've gone through the foundational code, it's time to start building the functional aspects of our Sui DeepBook contract. This contract is designed to facilitate the formation of liquidity pools, manage both deposits and withdrawals, and carry out a range of trading activities.

### 3.1 Module Declaration and Imports
Let's begin by declaring our module and importing the necessary dependencies. We'll also define the module's address, which is used to identify the module on the blockchain.

```rust
#[lint_allow(self_transfer)]
module dacade_deepbook::book {
    use deepbook::clob_v2 as deepbook;
    use deepbook::custodian_v2 as custodian;
    use sui::sui::SUI;
    use sui::tx_context::{TxContext, Self};
    use sui::coin::{Coin, Self};
    use sui::balance::{Self};
    use sui::transfer::Self;
    use sui::clock::Clock;

    const FLOAT_SCALING: u64 = 1_000_000_000;
```

To understand the purpose of each dependency, let's take a closer look at the imports:
- **#[lint_allow(self_transfer)]**: A lint attribute allowing self-transfers, which might be restricted in some cases for safety reasons.
- **module dacade_deepbook::book**: we use the module keyword to declare a new module named `dacade_deepbook::book`. This module will contain the implementation of our Sui DeepBook contract.
- **use deepbook::clob_v2 as deepbook**: This import allows us to use the `clob_v2` module from the `deepbook` framework. This module provides the logic for liquidity pool creation, custodian account management, limit and market orders, and asset withdrawal.
- **use deepbook::custodian_v2 as custodian**: This import allows us to use the `custodian_v2` module from the `deepbook` framework. This module provides the logic for custodian account management.
- **use sui::sui::SUI**: This import allows us to use the `SUI` token from the `sui` framework. This token is used for transactions and computational resources.
- **use sui::tx_context::{TxContext, Self}**: This import allows us to use the `TxContext` struct from the `sui` framework. This struct provides information about the current transaction, including the sender, gas price, and more.
- **use sui::coin::{Coin, Self}**: This import allows us to use the `Coin` struct from the `sui` framework. This struct represents a coin, which is a token with a value and a type.
- **use sui::balance::{Self}**: This import allows us to use the `balance` function from the `sui` framework. This function returns the balance of a coin.
- **use sui::transfer::Self**: This import allows us to use the `transfer` function from the `sui` framework. This function transfers a coin from one account to another.
- **use sui::clock::Clock**: This import allows us to use the `Clock` struct from the `sui` framework. This struct provides information about the current block, including the timestamp, block height, and more.
- **const FLOAT_SCALING: u64 = 1_000_000_000**: This constant defines the float scaling for the contract. It is basically a denomination of 1 SUI in the smallest unit called MIST. 1 SUI = 1_000_000_000 MIST.

### 3.2 Liquidity Pool Creation
Now that we've imported the necessary dependencies, let's begin implementing the logic for liquidity pool creation. This functionality allows users to create new liquidity pools with ease, enabling the seamless exchange of assets.

```rust
public fun new_pool<Base, Quote>(payment: &mut Coin<SUI>, ctx: &mut TxContext) {
    let balance = coin::balance_mut(payment);
    let fee = balance::split(balance, 100 * 1_000_000_000);
    let coin = coin::from_balance(fee, ctx);

    deepbook::create_pool<Base, Quote>(
        1 * FLOAT_SCALING,
        1,
        coin,
        ctx
    );
}
```

Let's break down the logic for this function:
- **public fun new_pool<Base, Quote>(payment: &mut Coin<SUI>, ctx: &mut TxContext)**: Declares a public function named `new_pool` with two generic parameters: `Base` and `Quote`. This function accepts two mutable references as arguments: `payment` and `ctx`.
- **let balance = coin::balance_mut(payment)**: Creates a mutable reference to the balance of the `payment` argument.
- **let fee = balance::split(balance, 100 * 1_000_000_000)**: Splits the balance into two parts: `fee` and `balance`. The `fee` is set to 100 SUI, and the `balance` is set to the remaining amount.
- **let coin = coin::from_balance(fee, ctx)**: Creates a new coin from the `fee` and `ctx` arguments.
- **deepbook::create_pool<Base, Quote>(1 * FLOAT_SCALING, 1, coin, ctx)**: Creates a new liquidity pool using the `create_pool` function from the `deepbook` module. This function accepts four arguments: `1 * FLOAT_SCALING`, `1`, `coin`, and `ctx`. The first argument is the initial price of the pool, the second argument is the initial quantity of the pool, the third argument is the coin used to pay the fee, and the fourth argument is the transaction context.

**Note:** The `Base` and `Quote` generic parameters are used to define the base and quote assets of the liquidity pool. These parameters are not used in the function body but are required to ensure the correct types are used when calling the `create_pool` function.

### 3.3 Custodian Account Management
Next, let's implement the logic for custodian account management. This functionality supports the creation of custodian accounts, ensuring secure and personalized asset management.

```rust
 public fun new_custodian_account(ctx: &mut TxContext) {
        transfer::public_transfer(deepbook::create_account(ctx), tx_context::sender(ctx))
    }
```

This function simply calls the `create_account` function from the `deepbook` module and transfers the resulting account to the sender of the transaction.

### 3.4 Deposits and Withdrawals

Now that we've implemented the logic for liquidity pool creation and custodian account management, let's explore the logic for deposits and withdrawals. This functionality allows users to deposit and withdraw assets from the liquidity pool, providing flexibility and control.

```rust
 public fun make_quote_deposit<Base, Quote>(pool: &mut deepbook::Pool<Base, Quote>, coin: Coin<Quote>, account_cap: &custodian::AccountCap) {
        deepbook::deposit_quote(pool, coin, account_cap)
    }

    public fun withdraw_base<BaseAsset, QuoteAsset>(
        pool: &mut deepbook::Pool<BaseAsset, QuoteAsset>,
        quantity: u64,
        account_cap: &custodian::AccountCap,
        ctx: &mut TxContext
    ) {
        let base = deepbook::withdraw_base(pool, quantity, account_cap, ctx);
        transfer::public_transfer(base, tx_context::sender(ctx));
    }

    public fun withdraw_quote<BaseAsset, QuoteAsset>(
        pool: &mut deepbook::Pool<BaseAsset, QuoteAsset>,
        quantity: u64,
        account_cap: &custodian::AccountCap,
        ctx: &mut TxContext
    ) {
        let quote = deepbook::withdraw_quote(pool, quantity, account_cap, ctx);
        transfer::public_transfer(quote, tx_context::sender(ctx));
    }
```

Let's break down the logic for each function:
- **make_quote_deposit**: This function accepts three arguments: `pool`, `coin`, and `account_cap`. The `pool` argument is a mutable reference to the liquidity pool, the `coin` argument is the coin to deposit, and the `account_cap` argument is the account cap for the transaction. This function calls the `deposit_quote` function from the `deepbook` module, which deposits the specified coin into the liquidity pool.
- **withdraw_base**: This function accepts four arguments: `pool`, `quantity`, `account_cap`, and `ctx`. The `pool` argument is a mutable reference to the liquidity pool, the `quantity` argument is the quantity to withdraw, the `account_cap` argument is the account cap for the transaction, and the `ctx` argument is the transaction context. This function calls the `withdraw_base` function from the `deepbook` module, which withdraws the specified quantity from the liquidity pool and returns the base asset. The base asset is then transferred to the sender of the transaction.
- **withdraw_quote**: This function is relatively similar to the `withdraw_base` function, except it withdraws the quote asset from the liquidity pool and transfers it to the sender of the transaction.

**Note:** The `BaseAsset` and `QuoteAsset` generic parameters are used to define the base and quote assets of the liquidity pool. These parameters are not used in the function body but are required to ensure the correct types are used when calling the `deposit_quote`, `withdraw_base`, and `withdraw_quote` functions.

A quote asset is the asset that is being traded for the base asset. For example, in the BTC/USDT trading pair, BTC is the base asset, and USDT is the quote asset.

### 3.5  Limit and Market Orders
Let's explore the logic for limit and market orders. This functionality allows traders to place limit orders with specified prices and quantities, as well as execute market orders for instant trades.

```rust
public fun place_limit_order<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        client_order_id: u64,
        price: u64, 
        quantity: u64, 
        self_matching_prevention: u8,
        is_bid: bool,
        expire_timestamp: u64,
        restriction: u8,
        clock: &Clock,
        account_cap: &custodian::AccountCap,
        ctx: &mut TxContext
    ): (u64, u64, bool, u64) {
        deepbook::place_limit_order(
            pool, 
            client_order_id, 
            price, 
            quantity, 
            self_matching_prevention, 
            is_bid, 
            expire_timestamp, 
            restriction, 
            clock, 
            account_cap, 
            ctx
        )
    }

    public fun place_base_market_order<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        account_cap: &custodian::AccountCap,
        base_coin: Coin<Base>,
        client_order_id: u64,
        is_bid: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
        let quote_coin = coin::zero<Quote>(ctx);
        let quantity = coin::value(&base_coin);
        place_market_order(
            pool,
            account_cap,
            client_order_id,
            quantity,
            is_bid,
            base_coin,
            quote_coin,
            clock,
            ctx
        )
    }

    public fun place_quote_market_order<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        account_cap: &custodian::AccountCap,
        quote_coin: Coin<Quote>,
        client_order_id: u64,
        is_bid: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
        let base_coin = coin::zero<Base>(ctx);
        let quantity = coin::value(&quote_coin);
        place_market_order(
            pool,
            account_cap,
            client_order_id,
            quantity,
            is_bid,
            base_coin,
            quote_coin,
            clock,
            ctx
        )
    }

    fun place_market_order<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        account_cap: &custodian::AccountCap,
        client_order_id: u64,
        quantity: u64,
        is_bid: bool,
        base_coin: Coin<Base>,
        quote_coin: Coin<Quote>,
        clock: &Clock, // @0x6 hardcoded id of the Clock object
        ctx: &mut TxContext,
    ) {
        let (base, quote) = deepbook::place_market_order(
            pool, 
            account_cap, 
            client_order_id, 
            quantity, 
            is_bid, 
            base_coin, 
            quote_coin, 
            clock, 
            ctx
        );
        transfer::public_transfer(base, tx_context::sender(ctx));
        transfer::public_transfer(quote, tx_context::sender(ctx));
    }

```

This is a relatively complex chunk of code, so let's break the logic for each function down:

- **place_limit_order**:   This function is responsible for placing limit orders. It calls the `place_limit_order` function from the `deepbook` module, which places a limit order with the specified parameters to the liquidity pool. A limited order is an order to buy or sell an asset at a specific price or better.
- **place_base_market_order**: This function is responsible for placing base market orders. This function calls the `place_market_order` function, which places a market order with the specified parameters to the liquidity pool. A market order unlike a limit order is an order to buy or sell an asset at the best available price.
- **place_quote_market_order**: This function is responsible for placing quote market orders. It is similar to the `place_base_market_order` function, except it places a market order for the quote asset.
- **place_market_order**: This function is responsible for placing market orders. It calls the `place_market_order` function from the `deepbook` module, which places a market order with the specified parameters to the liquidity pool. The `base` and `quote` assets are then transferred to the sender of the transaction.

### 3.6 Swap Transactions

Now that we've implemented the logic for limit and market orders, let's explore the logic for swap transactions. This functionality allows users to swap assets within the liquidity pool, enabling the seamless exchange of assets.

```rust

public fun swap<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        account_cap: &custodian::AccountCap,
        base_coin: Coin<Base>,
        quote_coin: Coin<Quote>,
        client_order_id: u64,
        is_bid: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
        let (base, quote) = deepbook::swap(
            pool,
            account_cap,
            base_coin,
            quote_coin,
            client_order_id,
            is_bid,
            clock,
            ctx,
        );
        transfer::public_transfer(base, tx_context::sender(ctx));
        transfer::public_transfer(quote, tx_context::sender(ctx));
    }

```

Let's break down the logic for each function:

- **swap_exact_base_for_quote**: This function is responsible for swapping base assets for quote assets. It calls the `swap_exact_base_for_quote` function from the `deepbook` module, which swaps the specified base asset for the quote asset. The `base` and `quote` assets are then transferred to the sender of the transaction. We use the `quote_coin` argument to create a zero coin of the quote asset type. This is because the `swap_exact_base_for_quote` function requires a quote coin as an argument. However, we don't want to transfer any quote coins to the liquidity pool, so we create a zero coin. The `quote_coin` argument is only used to determine the type of the quote asset when calling the `swap_exact_base_for_quote` function.
- **swap_exact_quote_for_base**: This function is responsible for swapping quote assets for base assets. It is similar to the `swap_exact_base_for_quote` function, except it swaps the quote asset for the base asset.

### 3.7 The final code for the `main.move` file
The complete code for the `main.move` file should look like this:

```rust
#[lint_allow(self_transfer)]
module dacade_deepbook::book {
    use deepbook::clob_v2 as deepbook;
    use deepbook::custodian_v2 as custodian;
    use sui::sui::SUI;
    use sui::tx_context::{TxContext, Self};
    use sui::coin::{Coin, Self};
    use sui::balance::{Self};
    use sui::transfer::Self;
    use sui::clock::Clock;

    const FLOAT_SCALING: u64 = 1_000_000_000;


    public fun new_pool<Base, Quote>(payment: &mut Coin<SUI>, ctx: &mut TxContext) {
        let balance = coin::balance_mut(payment);
        let fee = balance::split(balance, 100 * 1_000_000_000);
        let coin = coin::from_balance(fee, ctx);

        deepbook::create_pool<Base, Quote>(
            1 * FLOAT_SCALING,
            1,
            coin,
            ctx
        );
    }

    public fun new_custodian_account(ctx: &mut TxContext) {
        transfer::public_transfer(deepbook::create_account(ctx), tx_context::sender(ctx))
    }

    public fun make_base_deposit<Base, Quote>(pool: &mut deepbook::Pool<Base, Quote>, coin: Coin<Base>, account_cap: &custodian::AccountCap) {
        deepbook::deposit_base(pool, coin, account_cap)
    }

    public fun make_quote_deposit<Base, Quote>(pool: &mut deepbook::Pool<Base, Quote>, coin: Coin<Quote>, account_cap: &custodian::AccountCap) {
        deepbook::deposit_quote(pool, coin, account_cap)
    }

    public fun withdraw_base<BaseAsset, QuoteAsset>(
        pool: &mut deepbook::Pool<BaseAsset, QuoteAsset>,
        quantity: u64,
        account_cap: &custodian::AccountCap,
        ctx: &mut TxContext
    ) {
        let base = deepbook::withdraw_base(pool, quantity, account_cap, ctx);
        transfer::public_transfer(base, tx_context::sender(ctx));
    }

    public fun withdraw_quote<BaseAsset, QuoteAsset>(
        pool: &mut deepbook::Pool<BaseAsset, QuoteAsset>,
        quantity: u64,
        account_cap: &custodian::AccountCap,
        ctx: &mut TxContext
    ) {
        let quote = deepbook::withdraw_quote(pool, quantity, account_cap, ctx);
        transfer::public_transfer(quote, tx_context::sender(ctx));
    }

    public fun place_limit_order<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        client_order_id: u64,
        price: u64, 
        quantity: u64, 
        self_matching_prevention: u8,
        is_bid: bool,
        expire_timestamp: u64,
        restriction: u8,
        clock: &Clock,
        account_cap: &custodian::AccountCap,
        ctx: &mut TxContext
    ): (u64, u64, bool, u64) {
        deepbook::place_limit_order(
            pool, 
            client_order_id, 
            price, 
            quantity, 
            self_matching_prevention, 
            is_bid, 
            expire_timestamp, 
            restriction, 
            clock, 
            account_cap, 
            ctx
        )
    }

    public fun place_base_market_order<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        account_cap: &custodian::AccountCap,
        base_coin: Coin<Base>,
        client_order_id: u64,
        is_bid: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
        let quote_coin = coin::zero<Quote>(ctx);
        let quantity = coin::value(&base_coin);
        place_market_order(
            pool,
            account_cap,
            client_order_id,
            quantity,
            is_bid,
            base_coin,
            quote_coin,
            clock,
            ctx
        )
    }

    public fun place_quote_market_order<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        account_cap: &custodian::AccountCap,
        quote_coin: Coin<Quote>,
        client_order_id: u64,
        is_bid: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
        let base_coin = coin::zero<Base>(ctx);
        let quantity = coin::value(&quote_coin);
        place_market_order(
            pool,
            account_cap,
            client_order_id,
            quantity,
            is_bid,
            base_coin,
            quote_coin,
            clock,
            ctx
        )
    }

    fun place_market_order<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        account_cap: &custodian::AccountCap,
        client_order_id: u64,
        quantity: u64,
        is_bid: bool,
        base_coin: Coin<Base>,
        quote_coin: Coin<Quote>,
        clock: &Clock, // @0x6 hardcoded id of the Clock object
        ctx: &mut TxContext,
    ) {
        let (base, quote) = deepbook::place_market_order(
            pool, 
            account_cap, 
            client_order_id, 
            quantity, 
            is_bid, 
            base_coin, 
            quote_coin, 
            clock, 
            ctx
        );
        transfer::public_transfer(base, tx_context::sender(ctx));
        transfer::public_transfer(quote, tx_context::sender(ctx));
    }

    public fun swap_exact_base_for_quote<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        client_order_id: u64,
        account_cap: &custodian::AccountCap,
        quantity: u64,
        base_coin: Coin<Base>,
        clock: &Clock,
        ctx: &mut TxContext
    ) {
        let quote_coin = coin::zero<Quote>(ctx);
        let (base, quote, _) = deepbook::swap_exact_base_for_quote(
            pool,
            client_order_id,
            account_cap,
            quantity,
            base_coin,
            quote_coin,
            clock,
            ctx
        );
        transfer::public_transfer(base, tx_context::sender(ctx));
        transfer::public_transfer(quote, tx_context::sender(ctx));
    }

    public fun swap_exact_quote_for_base<Base, Quote>(
        pool: &mut deepbook::Pool<Base, Quote>,
        account_cap: &custodian::AccountCap,
        quote_coin: Coin<Quote>,
        client_order_id: u64,
        quantity: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
        let (base, quote, _) = deepbook::swap_exact_quote_for_base(
            pool,
            client_order_id,
            account_cap,
            quantity,
            clock,
            quote_coin,
            ctx
        );
        transfer::public_transfer(base, tx_context::sender(ctx));
        transfer::public_transfer(quote, tx_context::sender(ctx));
    }
}
```

## 4. Testing the Contract
In this section, we'll explore how to test our Sui DeepBook contract using the Sui CLI. We'll begin by building and publishing our contract, then we'll interact with our contract using the Sui CLI.

### 4.1 Running the Sui Blockchain Locally
Open a new terminal and run the following commands:

**1. Run the test network locally:**
```bash
RUST_LOG="off,sui_node=info" sui-test-validator
```

When this process runs completely, you should see the following output:
```bash
2023-12-14T15:19:00.260974Z  INFO jwk_updater_task{epoch=0}: sui_node: Submitting JWK to consensus: JwkId { iss: "https://kauth.kakao.com", kid: "9f252dadd5f233f93d2fa528d12fea" }
Fullnode RPC URL: http://127.0.0.1:9000
Faucet URL: http://127.0.0.1:9123
```

The Fullnode RPC URL and Faucet URL are important for interacting with our contract, so make sure to copy them somewhere.



### 4.2 Creating and funding wallets
Open a second terminal and run the following commands:

**1. Ensure you are in the boilerplate root directory:**

**2. Create a new wallet:**
```bash
sui client new-address ed25519
```
"ed25519" stands for the Ed25519 signature scheme. This scheme is used to sign transactions and verify signatures.
After running this command, you should see the following output:
```bash
Config file ["/home/codespace/.sui/sui_config/client.yaml"] doesn't exist, do you want to connect to a Sui Full node server [y/N]?
```

Type "y" and press Enter to proceed.

After that, you should see the following output:
```bash
Sui Full node server URL (Defaults to Sui Devnet if not specified) :
```

Type the Fullnode RPC URL from the previous section and press Enter to proceed.

After that, you should see the following output:
```bash
Environment alias for [http://127.0.0.1:9000] :
```

Type "localnet" or any other name you want to use for the environment and press Enter to proceed.

Finally, you should see another prompt as follows:
```bash
Select key scheme to generate keypair (0 for ed25519, 1 for secp256k1, 2: for secp256r1):
```

Type "0" and press Enter to proceed.


After running this, you should see your generated address in a similar format to this:
```bash
Generated new keypair for address with scheme "ed25519" [0x991b033785910865d4a3975be235399f7eaeb98f0e00cdb4138bccee92f36c5c]
Secret Recovery Phrase : [sheriff possible gain guess ecology jacket cover tragic peasant sport globe such]
╭─────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Created new keypair and saved it to keystore.                                                   │
├────────────────┬────────────────────────────────────────────────────────────────────────────────┤
│ address        │ 0x289b1b2ac4ef80c22b29b204c8933bf7102e921c6a82caeb316e0c27e39c2796             │
│ keyScheme      │ ed25519                                                                        │
│ recoveryPhrase │ cabin alcohol sword little magic retreat soon rare coil deposit maximum twelve │
```

Your address will be different from the one shown above. It is your wallet address, and you will need it to fund your wallet.

*Note* Your recovery phrase is very important. It is used to recover your wallet in case you lose your private key. Make sure to copy it somewhere safe.

**3. Fund the wallet:**

In order to fund the wallet, we'll need to use the faucet. The faucet is a service that provides free SUI tokens for testing purposes. We'll use the Faucet URL from the previous section to interact with the faucet.

Firstly, copy this command and replace `<ADDRESS>` with the address of the wallet you created in the previous step.
```bash
curl --location --request POST 'http://127.0.0.1:9123/gas' --header 'Content-Type: application/json' \
--data-raw '{
    "FixedAmountRequest": {
        "recipient": "<ADDRESS>"
    }
}'
```
Run the above command in your terminal. After running this command, you should see a similar output confirming your account was funded.
```bash
{"transferredGasObjects":[{"amount":200000000000,"id":"0x08fdc5ce630e45fa35df020b550c1f352303fc85063db6212062785d611c0543","transferTxDigest":"BHTNxuZYZSfmcHNvmxV8rQKLCpSmjeUFt154e4UaFUoe"},{"amount":200000000000,"id":"0x090e0b177ff2
```

You can also check the balance of your wallet using the following command:
```bash
sui client objects
```
If your output looks like this, then your wallet has been funded successfully:
```bash
{
    "objects": [
        {
            "objectType": "0x2::sui::SUI",
            "object": {
                "type": "coin",
                "value": {
                    "amount": 200000000000,
                    "id": "0x08fdc5ce630e45fa35df020b550c1f352303fc85063db6212062785d611c0543"
                }
            }
        }
    ]
}
```

If you want to check the currently active addresses, you can run the following command:
```bash
sui client active-address
```

For our testing purposes, we'll need two addresses. So, let's repeat the previous steps to create and fund a second address.

You can switch between addresses using the following command:
```bash
sui client switch --address <ADDRESS>
```

### 4.3 Build the contract
Now that we've created and funded our wallets, let's build our contract using the following command:
```bash
sui move build
```

After running the build command, you should see the following output:
```bash
FETCHING GIT DEPENDENCY https://github.com/MystenLabs/sui.git
INCLUDING DEPENDENCY DeepBook
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY MoveStdlib
BUILDING dacade_deepbook
Total number of linter warnings suppressed: 9 (filtered categories: 1)
```
### 4.4 Publish the contract
Now that we've built our contract, let's publish it using the following command:
```bash
sui client publish --gas-budget 100000000 --json  
```

After running the publish command, you should see the following output:
```bash
{
    "digest": "4bJ2TzWHVib6W2H62umVdvEe9dMjoh4DhcWfMvU9nhz1",
    "transaction": {
    "data": {
        "messageVersion": "v1",
        "transaction": {
        "kind": "ProgrammableTransaction",
        "inputs": [
            {
            "type": "pure",
            "valueType": "address",

```

We can use some of the information from the output to interact with our contract. Let's break down the output and extract the necessary information:

- **`PACKAGE_ID`**: This is the package id of our contract. We will use this to interact with our contract. You will need to do a manual search for this in the output of the publish command. The json path to it is '.objectChanges[].packageId'. Search for the first occurrence of 'packageId' in the "objectChanges" array.
- **`SUI_FEE_COIN_ID`**: This is the coin id of the SUI token. You get the coin id by running the following command:
    ```bash
    sui client gas --json
    ```
- **`ACCOUNT_ID1`**: This is the currently active address which you get by running the command we ran earlier:
    ```bash
    sui client active-address
    ```
- **`CLOCK_OBJECT_ID`**: This is the object id of the clock object. It defaults to "0x6".
- **`BASE_COIN_TYPE`**: This is the type of the SUI coin. It defaults to "0x2::sui::SUI".
- **`QUOTE_COIN_TYPE`**: This is the type of the quote coin that we deployed for this tutorial. The coin is WBTC in the wbtc module in the $PACKAGE_ID package. So the value will look like this: "<PACKAGE_ID>::wbtc::WBTC".
- **`WBTC_TREASURY_CAP_ID`**: This is the treasury cap id that we need for minting operations. You should look for the object with the objectType: "0x2::coin::TreasuryCap<$PACKAGE_ID::wbtc::WBTC>". Replace $PACKAGE_ID with the value you got earlier. This object has the object id that we need.

Now that we have all the necessary information, let's interact with our contract.

### 4.5 Interacting with the contract
We have built and published our contract, so let's interact with it using the Sui CLI. We'll begin by creating a liquidity pool, then we'll deposit some assets into the pool, and finally, we'll withdraw some assets from the pool.

#### 4.5.1 Creating a liquidity pool
To create a liquidity pool, we'll use the `new_pool` function. This function accepts the two generic parameters: `Base` and `Quote`. These parameters are used to define the base and quote assets of the liquidity pool. For this tutorial, we'll use the SUI token as the base asset and the WBTC token as the quote asset.

Run the following command to create a liquidity pool:
```bash
sui client call --package $PACKAGE_ID --module book --function new_pool --type-args $BASE_COIN_TYPE $QUOTE_COIN_TYPE --args $SUI_FEE_COIN_ID --gas-budget 10000000000 --json
```

Replace the parameters with the values you got earlier. This could look like this:
```bash
sui client call --package 0x7833a5eefe8af287837470993861d0eec08d79a8ec54fa0be21d67998ba7ddf0 --module book --function new_pool --type-args 0x2::sui::SUI 0x7833a5eefe8af287837470993861d0eec08d79a8ec54fa0be21d67998ba7ddf0::wbtc::WBTC --args 0x687edca3a0379acb6cf65c59fd27006abc58b08318d3d993e7ab58b2f1c87da2 --gas-budget 10000000000 --json
```

After running the command, you should see the following output:
```bash
{
  "digest": "EjMf35gDrUoNKX8QQgyt126RiH4iFxgJ7t6SE9vQ1JxZ",
  "transaction": {
    "data": {
      "messageVersion": "v1",
      "transaction": {
        "kind": "ProgrammableTransaction",
        "inputs": [
          {
            "type": "object",
            "objectT

```

#### 4.5.2 Creating a custodian account
To create limit orders, we need to create a custodian account. To do this, we'll use the `new_custodian_account` function. Learn more about custodian accounts [here](https://docs.sui-deepbook.com/deepbook-sdk/trade-and-swap#2.1.2-create-custodian-account).

Run the following command to create a custodian account:
```bash
sui client call --package $PACKAGE_ID  --module book --function new_custodian_account  --gas-budget 10000000000
```
Replace the parameter with the value you got earlier.

<!-- TODO: Add 

In the publish output you should look for the object with objectType 0xdee9::custodian_v2::AccountCap and write down the objectId somewhere as a variable "ACCOUNT1_CAP" (Note: You can write the values down in a code editor or note so you can reference it later). You will need it when running the commands later in this tutorial.
We need to perform the same command for the second account as well and store the value to a variable "ACCOUNT2_CAP". So, you can repeat the steps above to create another custodian account. Note you need to switch to the second address before running the command using the following command:
```bash
sui client switch --address <ADDRESS>
```

-->

#### 4.5.3 Minting WBTC
Before we can deposit WBTC into the liquidity pool, we need to mint some WBTC tokens. To do this, we'll use the `mint` function from the `wbtc` module. Switch to the address you used to publish the contract and run the following command:
```bash
sui client call --function mint --module wbtc --package $PACKAGE_ID  --args $WBTC_TREASURY_CAP_ID "10000000000" $ACCOUNT_ID1 --gas-budget 10000000 --json
```

After that is successful, re-run the same command but change ACCOUNT_ID1 to ACCOUNT_ID2. Check the output and look for an object with objectType that has a value like this String("0x2::coin::Coin<$PACKAGE_ID::wbtc::WBTC>") and get the value of objectId and store it to a variable "ACCOUNT1_WBTC_OBJECT_ID". You will need it when running the commands later in this tutorial.

#### 4.5.4 Depositing assets into the liquidity pool
Now that we've created a liquidity pool and minted some WBTC tokens, let's deposit some assets into the liquidity pool. To do this, we'll use the `make_base_deposit`. This function accepts three arguments: `pool`, `coin`, and `account_cap`. The `pool` argument is a mutable reference to the liquidity pool, the `coin` argument is the coin to deposit, and the `account_cap` argument is the account cap for the transaction.

Before we make a deposit, let us get the 'BASE_COIN_ID' value by running the following command:
```bash
sui client gas --json
```

Now that we have the `BASE_COIN_ID` value, let's make a base deposit using the following command:
```bash
sui client call --package $PACKAGE_ID  --module book --function make_base_deposit  --args $POOL_ID $BASE_COIN_ID $ACCOUNT1_CAP_ID --type-args $BASE_COIN_TYPE $QUOTE_COIN_TYPE --gas-budget 10000000000 --json
```

Once that is successful, let's make a quote deposit using the following command:
```bash
sui client call --package $PACKAGE_ID  --module book --function make_quote_deposit  --args $POOL_ID $ACCOUNT1_WBTC_OBJECT_ID $ACCOUNT1_CAP_ID --type-args $BASE_COIN_TYPE $QUOTE_COIN_TYPE --gas-budget 10000000000 --json
```

#### 4.5.5 Placing Market Orders

Now that we've deposited some assets into the liquidity pool, let's place some market orders to buy and sell assets.

First, switch to the secondary account:
```bash
sui client switch --address <ADDRESS>
```

Now, let's a market order to buy assets using the following command:
```bash
sui client call --package $PACKAGE_ID  --module book --function place_base_market_order  --args $POOL_ID $ACCOUNT2_CAP $SUI_COIN_ID 942 "false" $CLOCK_OBJECT_ID --type-args $BASE_COIN_TYPE $QUOTE_COIN_TYPE --gas-budget 10000000000 --json
```

As mentioned earlier, "942" is the id of the order, it can be any number.

After running this, you will see in the output the "balanceChanges" array where the balance changes are listed.
The amount of tokens that you will see will be less than expected because there is a deepbook fee. You can learn more [here](https://docs.sui-deepbook.com/deepbook-fee-structure).

#### 4.5.6 Swapping Assets
Now let's try to run a swap order. Re-run the commands to place limit orders (using the first account), switch back to the secondary account, and run the swap order:
```bash
sui client call --package $PACKAGE_ID  --module book --function swap_exact_base_for_quote  --args "$POOL_ID" 42 $ACCOUNT2_CAP 1500 $BASE_COIN_ID $CLOCK_OBJECT_ID --type-args $BASE_COIN_TYPE $QUOTE_COIN_TYPE --gas-budget 10000000000 --json
```
Do not forget to replace the variables with the proper values as we did earlier.

As mentioned earlier, "42" is the id of the order, it can be any number. 1500 is the amount of tokens that we want to swap. We can get the "BASE_COIN_ID" value by running the following command:
```bash
sui client gas --json
```

#### 4.5.7 Withdrawing Assets from the Liquidity Pool
Now that we've placed some orders and swapped some assets, let's withdraw some assets from the liquidity pool. To do this, we'll use the `withdraw_base` function. Run the following command to withdraw the base asset:
```bash
sui client call --package $PACKAGE_ID  --module book --function withdraw_base --args "$POOL_ID" 100 $ACCOUNT2_CAP --type-args $BASE_COIN_TYPE $QUOTE_COIN_TYPE --gas-budget 10000000000 --json
```

After running this command successfully, we can withdraw the quote asset using the following command:
```bash
sui client call --package $PACKAGE_ID  --module book --function withdraw_quote --args "$POOL_ID" 100 $ACCOUNT2_CAP --type-args $BASE_COIN_TYPE $QUOTE_COIN_TYPE --gas-budget 10000000000 --json
```

That's it! We've successfully tested our Sui DeepBook contract using the Sui CLI.

## 5. Conclusion
In this tutorial, we learned how to build and test a Sui DeepBook contract using the Sui CLI. We began by exploring the Sui DeepBook framework, then we implemented the logic for liquidity pool creation, custodian account management, deposits and withdrawals, limit and market orders, swap transactions, and more. Finally, we tested our contract using the Sui CLI.

By working through this tutorial, you have gained hands-on experience with the Sui DeepBook framework. You can use this knowledge to build your own Sui DeepBook contracts, explore the Sui DeepBook framework in more detail, and experiment with new functionalities for financial applications.

Please note that this course is open source and is licensed under the MIT license. You can also contribute to improving the course content by making pull requests if you have suggestions for improvement. You can do this by visiting the course repository [here]
<!-- TODO: Add repo -->

For additional learning and connecting with like-minded individuals, consider visiting the following resources:

- **[Sui DeepBook Website](https://sui-deepbook.com/)**: The official website for the Sui DeepBook framework. Here you can find the documentation, contributors, Twitter, and more.
- **[Sui Discord](https://discord.com/invite/sui)**: The official Discord server for Sui. This is a great place to connect with other developers and ask questions.
- **[Forum](https://forums.sui.io/)**: The official Sui forum with dedicated sections for developers. Here you can follow technical discussions and find answers to your questions.

These platforms are filled with enthusiastic individuals and helpful resources that can further facilitate your journey into the Sui ecosystem.

We hope that you enjoyed this tutorial, as a next step, we encourage you to build your own Defi contracts using the Sui DeepBook framework. Participate in our challenges, earn rewards and receive feedback from your peers. We are looking forward to seeing what you build!
