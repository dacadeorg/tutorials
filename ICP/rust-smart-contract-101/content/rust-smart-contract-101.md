<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2023 Dacade.org -->

Welcome to this ICP Rust Development 101 tutorial! This tutorial is designed to provide an introduction to developing on the Internet Computer Protocol (ICP) platform. In this guide, you will learn the basics of building and interacting with decentralized canisters powered by Rust. By the end of this guide, you will have a solid understanding of developing for the ICP platform and be able to create the foundation for decentralized applications.

In this tutorial, we will be building a Message-board web3 canister in Rust.
This canister will allow users to create messages, update messages, delete messages, and list messages.

### What you'll learn
- **Setting Up Your Development Environment:**
Set up your development environment, including installing essential tools like DFX, Candid Extractor, and Rust. 
- **Building a Message Board Canister in Rust:**
Understand the core concepts of Rust-based canister development on the Internet Computer Protocol (ICP) platform and implement CRUD (Create, Read, Update, Delete) functionality to manage messages within a canister.
- **Deploying and Interacting with a Canister:**
Explore the deployment process of a web3 canister on the ICP platform and learn how to interact with the deployed web3 canister using both local and web-based tools.

### What is a Canister?
A canister is a fundamental building block and execution environment for deploying and running software applications on the Internet Computer Protocol (ICP) platform. Canisters bundle together code and state to create a secure and efficient execution environment. They are similar to smart contracts on other blockchain platforms. Canisters enable the development of scalable and decentralized applications, including DeFi platforms, social media applications, DAOs, and more.

### Prerequisites
While having prior coding experience is necessary, you do not need to have any prior blockchain experience to follow this tutorial. However, we do recommend that you have the following:

- **Basic knowledge of Rust** - This tutorial assumes you have a basic understanding of Rust. If you're unfamiliar with Rust or need a refresher, watch this beginner tutorial on how to use Rust: [Rust Crash Course | Rustlang](https://www.youtube.com/watch?v=zF34dRivLOw).
- **Knowledge of how to use your terminal** - This tutorial will require you to use your terminal. If you're unfamiliar with the terminal or need a refresher, watch this beginner tutorial on how to use the terminal: [Learn the Command Line: Basic Commands](https://www.youtube.com/watch?v=MBBWVgE0ewk).
- **Familiarity with IDEs** - This tutorial utilizes the web version of VSCode. If you're unfamiliar with IDEs or need a refresher, watch this beginner tutorial on how to use VSCode: [Learn Visual Studio Code in 7min (Official Beginner Tutorial)](https://www.youtube.com/watch?v=B-s71n0dHUk).

### Tech Stack
- **Internet Computer Protocol (ICP)** -
  ICP is a decentralized computing platform that facilitates the creation of software, computation, and data that can run on the public internet. It's the platform we'll be building our application on.
- **DFX - Internet Computer CLI** -
  DFX is the command-line interface for the Internet Computer, used to create, build, deploy, and manage canisters on the platform. It also offers a local development environment for testing.
- **Rust - Systems Programming Language** -
  Rust, a powerful systems programming language, combines high-level language expressiveness with low-level performance. Its ownership system and concurrency model ensure reliable, efficient software development.
- **Node.js - JavaScript Runtime (v18)** -
  Node.js, version 18, serves as the JavaScript runtime for executing code outside web browsers.
- **Cargo - Rust Package Manager** -
  Cargo is the official build tool and package manager for Rust. It simplifies dependency management and project building, making it an essential component in Rust development.
- **Candid - Interface Description Language (IDL)** -
  Candid is used by the Internet Computer for defining and describing the public interfaces of services, i.e., their methods and their input/output types. We'll be using Candid in our project to describe the interface of our canisters.
- **GitHub Codespaces (Optional)** -
  Codespaces, a GitHub feature, enables cloud-based development without the need for local installations. It offers a convenient way to start projects quickly.

### Overview
1. [Setup](#1-setup) (15 min) - This section will guide you through the necessary steps to set up your project.
2. [Building the canister](#2-building-the-canister) (45 min) - In this section, we will build out our message board ICP Canister.
3. [Deploy and Interact With our Canister](#3-build-and-deploy-our-canister) (15 min) - In this section, we will interact with the message-board canister via our command line and the Candid web interface.
4. [Conclusion](#4-conclusion) (1 min) - Finally, we will conclude this tutorial and give you some ideas on how to continue.

If you want to skip to the complete code, you can find the GitHub repository [here](https://github.com/dacadeorg/icp-message-board-rust).

## 1. Setup
In this section, we will help you set up the boilerplate code for our project. By the end of this section, you'll have a development environment pre-configured with all the necessary tools and dependencies, and you'll be ready to start building your canisters.

### 1.1 Preparing Your Development Environment
You have two options for setting up your development environment: you can set up your development environment either locally on your machine or in the cloud using GitHub Codespaces.

#### 1.1.1 Option 1: Using GitHub Codespaces
GitHub Codespaces provides a complete, ready-to-use dev environment in your browser. It saves you from the need for local setup, allowing you to concentrate on learning and building.

To create a new Codespace with the boilerplate, follow these steps:

1. **Access the ICP Rust Boilerplate Repository**:
Go to the [ICP Rust boilerplate repository](https://github.com/dacadeorg/icp-101-rust-boilerplate).

2. **Create a Codespace:**
Click on the "Code" button located at the top right of the repository page.
From the dropdown menu, select "Create codespace on main." This action will generate a new Codespace pre-configured with everything you need to start working on this project.

#### 1.1.2 Option 2: Setting Up Your Local Environment
If you prefer to set up your development environment locally, follow these steps:

1. **Access the ICP message board Repository**
Go to the [ICP message board repository](https://github.com/dacadeorg/icp-101-rust-boilerplate).

2. **Clone the Repository:**
- Click on the "Code" button, then switch to the "Local" tab. Copy the repository's URL.
- In your terminal, navigate to the directory where you want to store your project and clone the repository with the following command:

```bash
git clone https://github.com/dacadeorg/icp-101-rust-boilerplate
```

3. **Enter the Project Directory:**
Move into the cloned repository's directory using the following command:
```bash
cd icp-101-rust-boilerplate
```

Now that you have successfully set up your boilerplte environment, you can open up the codebase in your favorite editor.

### 1.2 Installing Dependencies
In this section, we'll install the necessary dependencies for our project. We'll install Rust, Wasmtime, Candid Extractor and DFX. We'll also set up a script to automate the generation of Candid interface definitions for our canister.

#### 1.2.1 Installing Rust
Before diving into creating ICP Canisters with Rust, let's set up your Rust development environment to ensure a smooth workflow. Rust offers a powerful toolset for system-level programming and web development alike. We'll install Rust and configure it for the project.

Rust comes with a dedicated package manager called "Cargo" that makes managing dependencies and building projects a breeze. If you already have Rust set up, you can skip this step.

To install Rust, we'll use rustup, the official Rust toolchain installer. Run the following command in your terminal to install Rust:
```bash  
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

After running the command, you should see a welcome message, that will ask you how to proceed with the installation:
```bash
...

Current installation options:

   default host triple: x86_64-unknown-linux-gnu
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>
```

Press 1 and hit enter or just directly press enter to proceed with the installation since 1 is selected as default.

After the installation is complete, you should see a similar output in your terminal:
```bash

Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).

To configure your current shell, run:
source "$HOME/.cargo/env"
```

Next run the source command to ensure that the necessary environment variables are loaded:
```bash
source "$HOME/.cargo/env"
```

This completes the installation of Rust. In the next section, we'll install the necessary dependencies for our project.
  
#### 1.2.2 Installing wasm32-unknown-unknown target
Next, we need to install the wasm32-unknown-unknown target, which is a WebAssembly target for the Rust programming language. So that we can compile Rust code to WebAssembly and run it on the Internet Computer.

Run the following command to install the wasm32-unknown-unknown target:
```bash
rustup target add wasm32-unknown-unknown
```

#### 1.2.3 Installing Candid Extractor
Next, we need to install Candid Extractor, a tool which allows you to extract Candid interface definitions from WebAssembly modules. This enables us to generate Candid interface definitions for our canister to interact with it.

Run the following command to install Candid Extractor:
```bash
cargo install candid-extractor
```

#### 1.2.4 Installing DFX
We'll also need DFX, a command-line interface for the Internet Computer. DFX allows you to create, build, deploy, and manage canisters on the platform. It also offers a local development environment for testing.

Install DFX by running:
 
```bash
DFX_VERSION=0.15.0 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

Now that we have DFX installed, you need to add it to your path. Run the following command:

```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

#### 1.2.6 Ensuring Everything is Installed Correctly

1. **Close and Reopen Your Terminal:**
    Close and reopen your terminal to ensure the new environment variables are loaded.
2. **Check the Installed Rust Version:**
    Run the following command to check the installed Rust version:
    ```bash  
    cargo --version
    ```
    You should see something like this:
    ```
    cargo 1.72.0 (103a7ff2e 2023-08-15)
    ```
3. **Check the Installed DFX Version:**
    Run the following command to check the installed DFX version:
    ```bash  
    dfx --version
    ```
    You should see something like this:
    ```bash
    dfx 0.15.0
    ```
  
With all the dependencies installed, we're ready to start building our canister.

### 1.3 Boilerplate Code Overview
In this section, we'll explore the boilerplate code that was generated for you. It is designed to help you get started quickly by providing the necessary configuration files. This code also includes a simple canister that serves as a reference for constructing your own canisters.

The boilerplate code is organized into the following directories and files:
```bash
 |-- src
 |     |-- icp_rust_boilerplate_backend
 |           |-- src
 |           |    |-- lib.rs
 |           |
 |           |-- Cargo.toml
 |           |
 |           |-- icp_rust_boilerplate_backend.did
 |    
 |      
 |-- .gitignore
 |
 |-- Cargo.lock
 |
 |-- Cargo.toml
 |
 |-- dfx.json
```

Let's explore each of these files and directories in detail.

#### 1. Src Directory
Inside the `src` directory, we have a subdirectory named `icp_rust_boilerplate_backend`. This is where the core of our Canister resides.

#### 2. icp_rust_boilerplate_backend Subdirectory
This subdirectory holds our Canister's Rust code. Here's what you'll find inside:
- `src/lib.rs`: The main Rust source file where we'll define our Canister's logic.
- `Cargo.toml`: The package configuration file for our Canister. It specifies dependencies and other project-related information.
- `icp_rust_boilerplate_backend.did`: A file that contains the Candid interface definitions for our Canister. This defines how external callers will interact with our Canister.

#### 3. .gitignore
You will know this file if you've used Git before. It specifies files and directories that should be ignored by Git.

#### 4. Cargo.lock and Cargo.toml
These files are part of Rust's package management system. `Cargo.toml` defines the package's metadata and dependencies, while `Cargo.lock` is automatically generated and records the exact versions of dependencies used in the last successful build.

#### 5. dfx.json
This JSON configuration file contains settings related to the Internet Computer development environment, including project configuration, build settings, and more.

#### 6. did.sh
This Bash script will allow us to automate the generation of Candid interface definitions (DID files) for a set of Canister projects using the Rust programming language. Candid is a serialization format used in the Internet Computer Protocol for defining the interface of Canisters.

```bash
#!/usr/bin/env bash


function generate_did() {
  local canister=$1
  canister_root="src/$canister"

  cargo build --manifest-path="$canister_root/Cargo.toml" \
      --target wasm32-unknown-unknown \
      --release --package "$canister" \

  candid-extractor "target/wasm32-unknown-unknown/release/$canister.wasm" > "$canister_root/$canister.did"
}

CANISTERS=icp_rust_boilerplate_backend

for canister in $(echo $CANISTERS | sed "s/,/ /g")
do
    generate_did "$canister"
done

```

In the provided script, you'll notice that we've replaced the original CANISTERS line to match the name of your own canister, which in this case is icp_rust_boilerplate_backend.

For example, if your canister is named test_rust_boilerplate, you should change the line:
```
CANISTERS=icp_rust_boilerplate_backend
```
to the name of your own canister which in the case of this tutorial will be:
```
CANISTERS=test_rust_boilerplate_backend
```

#### 7. package.json
Additionally, we have a package.json file in our root directory that contains scripts for generating Candid interface definitions and deploying our canister.

The package.json file defines two scripts:

- `generate`: This script runs did.sh and then dfx generate to generate Candid interface definitions and other necessary files.
- `gen-deploy`: This script does the same as generate but also deploys the canister with dfx deploy -y.

You should run the generate script each time you modify, add, or remove exported functions of the canister. Otherwise, you may need to modify the Candid file manually.

With this initial setup, you're ready to dive into the development process. 

In the next sections, we'll delve into the specific details of each file, beginning with src/icp_rust_boilerplate_backend/src/lib.rs.
Let's start building our ICP Canister step-by-step!

## 2. Building the Canister
In this section, we'll build out our message board ICP Canister. We'll implement CRUD (Create, Read, Update, Delete) functionality to manage messages within a Canister.

### 2.1 Starting with lib.rs
Let's navigate to the `lib.rs` file inside the src folder of our Canister project. This file serves as the entry point for our Canister, and it's where we'll write our Canister's logic.

Feel free to clear the contents of the lib.rs file and follow along with the code snippets in this tutorial.

### 2.2 Importing Dependencies
Let's begin by importing the necessary dependencies for our canister. We'll be using the following dependencies to facilitate our development:

```Rust
    #[macro_use]
    extern crate serde;
    use candid::{Decode, Encode};
    use ic_cdk::api::time;
    use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
    use ic_stable_structures::{BoundedStorable, Cell, DefaultMemoryImpl, StableBTreeMap, Storable};
    use std::{borrow::Cow, cell::RefCell};
```

- `candid`: Candid is a serialization format used in the Internet Computer Protocol for defining the interface of Canisters.
- `ic_cdk`: The core crate (package/module) of the Rust CDK (Canister Development Kit) for the Internet Computer. It provides the core methods that enable Rust programs to interact with the Internet Computer blockchain system API.
- `ic_stable_structures`: This library offers a set of data structures that remain stable across upgrades.
- `std`: The Rust Standard Library provides essential runtime functionality for building portable Rust software.
- `serde`: Serde is a framework for serializing and deserializing Rust data structures efficiently and generically.

### 2.3 Defining Memory and IdCell
Next, we'll define our Memory and IdCell types. We'll use these types to store our canister's state and generate unique IDs for each message.

```Rust
    type Memory = VirtualMemory<DefaultMemoryImpl>;
    type IdCell = Cell<u64, Memory>;
```
To store our canister's state, we'll use a MemoryManager to manage our canister's virtual memory.

The `IdCell` is a cell responsible for holding the current ID of the message. We'll utilize this to generate unique IDs for each message.

### 2.4 Defining Message Struct
Next, we'll define our Message struct, which will represent the messages in our message board application.

```Rust
    #[derive(candid::CandidType, Clone, Serialize, Deserialize, Default)]
    struct Message {
        id: u64,
        title: String,
        body: String,
        attachment_url: String,
        created_at: u64,
        updated_at: Option<u64>,
    }
```

This struct will represent the messages in our message board application, and it includes fields for ID, title, body, attachment URL, creation timestamp, and an optional update timestamp.

With these initial definitions, we're ready to start implementing the core logic for our message board application within the smart contract. 

### 2.5 Implementing Storable and BoundedStorable
Next, we'll implement the Storable and BoundedStorable traits for our Message struct. These traits are required for a struct to be stored in a stable struct. Traits are a way to group methods into a common interface that can be implemented by multiple types. They are similar to interfaces in other programming languages.

```Rust
    // a trait that must be implemented for a struct that is stored in a stable struct
    impl Storable for Message {
        fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
            Cow::Owned(Encode!(self).unwrap())
        }
    
        fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
            Decode!(bytes.as_ref(), Self).unwrap()
        }
    }
    
    // another trait that must be implemented for a struct that is stored in a stable struct
    impl BoundedStorable for Message {
        const MAX_SIZE: u32 = 1024;
        const IS_FIXED_SIZE: bool = false;
    }
```

The Storable trait is used to convert a struct to bytes and vice versa. The BoundedStorable trait is used to define the maximum size of a struct and whether it is a fixed size or not.

### 2.6 Setting up Thread Local Variables
Now, let's set up our thread-local variables that will hold our canister's state. Thread-local variables are variables that are local to the current thread (sequence of instructions). They are useful when you need to share data between multiple threads.

We will use a `RefCell` to manage our canister's state, allowing us to access it from anywhere in our code. 
A `RefCell` is a mutable memory location with dynamically checked borrow rules. It is useful when you're confident that your code adheres to the borrowing rules, but the compiler cannot guarantee that.

```Rust
    thread_local! {
        static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> = RefCell::new(
            MemoryManager::init(DefaultMemoryImpl::default())
        );
    
        static ID_COUNTER: RefCell<IdCell> = RefCell::new(
            IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), 0)
                .expect("Cannot create a counter")
        );
    
        static STORAGE: RefCell<StableBTreeMap<u64, Message, Memory>> =
            RefCell::new(StableBTreeMap::init(
                MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1)))
        ));
    }
```

The three thread-local variables we've defined are:

- `MEMORY_MANAGER` - This thread-local variable holds our canister's virtual memory, enabling us to access the memory manager from any part of our code.
- `ID_COUNTER` - It holds our canister's ID counter, allowing us to access it from anywhere in our code.
- `STORAGE` - This variable holds our canister's storage, enabling access from anywhere in our code.

### 2.7 Setting Up MessagePayload
With our state variables configured, we can proceed to set up our message payload. The MessagePayload struct is used when adding or updating messages and includes fields for the title, body, and attachment URL.

```Rust
    #[derive(candid::CandidType, Serialize, Deserialize, Default)]
    struct MessagePayload {
        title: String,
        body: String,
        attachment_url: String,
    }
```

The MessagePayload struct defines the structure for the data that will be used when creating or updating messages within our canister.



At this point, your code should look like this:
```Rust
    #[macro_use]
    extern crate serde;
    use candid::{Decode, Encode};
    use ic_cdk::api::time;
    use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
    use ic_stable_structures::{BoundedStorable, Cell, DefaultMemoryImpl, StableBTreeMap, Storable};
    use std::{borrow::Cow, cell::RefCell};
    
    type Memory = VirtualMemory<DefaultMemoryImpl>;
    type IdCell = Cell<u64, Memory>;
    
    #[derive(candid::CandidType, Clone, Serialize, Deserialize, Default)]
    struct Message {
        id: u64,
        title: String,
        body: String,
        attachment_url: String,
        created_at: u64,
        updated_at: Option<u64>,
    }
    
    // a trait that must be implemented for a struct that is stored in a stable struct
    impl Storable for Message {
        fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
            Cow::Owned(Encode!(self).unwrap())
        }
    
        fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
            Decode!(bytes.as_ref(), Self).unwrap()
        }
    }
    
    // another trait that must be implemented for a struct that is stored in a stable struct
    impl BoundedStorable for Message {
        const MAX_SIZE: u32 = 1024;
        const IS_FIXED_SIZE: bool = false;
    }
    
    thread_local! {
        static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> = RefCell::new(
            MemoryManager::init(DefaultMemoryImpl::default())
        );
    
        static ID_COUNTER: RefCell<IdCell> = RefCell::new(
            IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), 0)
                .expect("Cannot create a counter")
        );
    
        static STORAGE: RefCell<StableBTreeMap<u64, Message, Memory>> =
            RefCell::new(StableBTreeMap::init(
                MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1)))
        ));
    }
    
    #[derive(candid::CandidType, Serialize, Deserialize, Default)]
    struct MessagePayload {
        title: String,
        body: String,
        attachment_url: String,
    }
```

With our thread-local variables and message payload structure in place, we are ready to start implementing the core logic for our message board application within the smart contract. In the upcoming sections, we will dive deeper into handling message creation, updates, deletions, and listing.

### 2.7 Managing Messages
In this section, we'll implement the core logic for managing messages within our canister. 

#### 2.7.1 `get_message Function`: 
Let's start by implementing the `get_message` function, which retrieves a message from our canister's storage.

```Rust
    #[ic_cdk::query]
    fn get_message(id: u64) -> Result<Message, Error> {
        match _get_message(&id) {
            Some(message) => Ok(message),
            None => Err(Error::NotFound {
                msg: format!("a message with id={} not found", id),
            }),
        }
    }
 ```

The `get_message` function takes an id as input and returns a Result containing a Message or an Error. It is marked with the #[ic_cdk::query] attribute, indicating that it is a query function that does not modify the canister's state. It uses the `_get_message` helper function to retrieve the message from the canister's storage.

#### 2.7.2 `_get_message Function`:
The `_get_message` is a helper function used inside the `get_message` function. 

```Rust
    fn _get_message(id: &u64) -> Option<Message> {
        STORAGE.with(|s| s.borrow().get(id))
    }
```

It accepts an id as a reference and returns an `Option<Message>`. It retrieves the message from the canister's storage using the STORAGE thread-local variable.

#### 2.7.3 `add_message Function`:
Now, let's create the `add_message` function, responsible for adding a new message to our canister's storage.

```Rust
    #[ic_cdk::update]
    fn add_message(message: MessagePayload) -> Option<Message> {
        let id = ID_COUNTER
            .with(|counter| {
                let current_value = *counter.borrow().get();
                counter.borrow_mut().set(current_value + 1)
            })
            .expect("cannot increment id counter");
        let message = Message {
            id,
            title: message.title,
            body: message.body,
            attachment_url: message.attachment_url,
            created_at: time(),
            updated_at: None,
        };
        do_insert(&message);
        Some(message)
    }
```

The `add_message` function takes a message of type MessagePayload as input and returns an `Option<Message>`. It generates a unique id for the message, creates a new Message struct, and adds it to the canister's storage. It uses the do_insert helper function to perform the storage operation.

#### 2.7.4 `do_insert Function`:
As we saw in the previous section, the `do_insert` function is a helper function used inside the `add_message` function.

```Rust
    // helper method to perform insert.
    fn do_insert(message: &Message) {
        STORAGE.with(|service| service.borrow_mut().insert(message.id, message.clone()));
    }
```

The `do_insert` function takes in a message and adds the message to our canister's storage. It uses the `STORAGE` thread local variable to add the message to our canister's storage.

#### 2.7.5 `update_message Function`:
Now, let's create the `update_message` function, which is responsible for updating a message in our canister's storage.

```Rust
    #[ic_cdk::update]
    fn update_message(id: u64, payload: MessagePayload) -> Result<Message, Error> {
        match STORAGE.with(|service| service.borrow().get(&id)) {
            Some(mut message) => {
                message.attachment_url = payload.attachment_url;
                message.body = payload.body;
                message.title = payload.title;
                message.updated_at = Some(time());
                do_insert(&message);
                Ok(message)
            }
            None => Err(Error::NotFound {
                msg: format!(
                    "couldn't update a message with id={}. message not found",
                    id
                ),
            }),
        }
    }
```

Just like the `add_message` function, the `update_message` function takes an id and a payload of type MessagePayload as input and returns a Result containing a Message or an Error. It updates an existing message in the canister's storage based on the provided id. If the message is successfully updated, it returns the updated message. Otherwise, it returns an error.

#### 2.7.6 `delete_message Function`:
Next, let's create the `delete_message` function, responsible for deleting a message from our canister's storage.

```Rust
    #[ic_cdk::update]
    fn delete_message(id: u64) -> Result<Message, Error> {
        match STORAGE.with(|service| service.borrow_mut().remove(&id)) {
            Some(message) => Ok(message),
            None => Err(Error::NotFound {
                msg: format!(
                    "couldn't delete a message with id={}. message not found.",
                    id
                ),
            }),
        }
    }
```

The `delete_message` function takes an id as input and returns a Result containing a Message or an Error. It deletes an existing message from the canister's storage based on the provided id. If the message is successfully deleted, it returns the deleted message. Otherwise, it returns an error.

#### 2.7.7 `enum Error`:
Finally, we create the Error enum, which is used to represent errors that may occur when interacting with our canister.
```Rust
    #[derive(candid::CandidType, Deserialize, Serialize)]
    enum Error {
        NotFound { msg: String },
    }
```

To generate the Candid interface definitions for our canister, add the following code to the bottom of the file:

```Rust
    // need this to generate candid
    ic_cdk::export_candid!();
```

This completes the explanation of the functions for managing messages within the smart contract of the message board application. With these functions in place, you have the fundamental building blocks to create, update, delete, and retrieve messages from the canister's storage.

### 2.8 Complete lib.rs
At the end of this section, your code should look like this:
```Rust
    #[macro_use]
    extern crate serde;
    use candid::{Decode, Encode};
    use ic_cdk::api::time;
    use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
    use ic_stable_structures::{BoundedStorable, Cell, DefaultMemoryImpl, StableBTreeMap, Storable};
    use std::{borrow::Cow, cell::RefCell};
    
    type Memory = VirtualMemory<DefaultMemoryImpl>;
    type IdCell = Cell<u64, Memory>;
    
    #[derive(candid::CandidType, Clone, Serialize, Deserialize, Default)]
    struct Message {
        id: u64,
        title: String,
        body: String,
        attachment_url: String,
        created_at: u64,
        updated_at: Option<u64>,
    }
    
    // a trait that must be implemented for a struct that is stored in a stable struct
    impl Storable for Message {
        fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
            Cow::Owned(Encode!(self).unwrap())
        }
    
        fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
            Decode!(bytes.as_ref(), Self).unwrap()
        }
    }
    
    // another trait that must be implemented for a struct that is stored in a stable struct
    impl BoundedStorable for Message {
        const MAX_SIZE: u32 = 1024;
        const IS_FIXED_SIZE: bool = false;
    }
    
    thread_local! {
        static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> = RefCell::new(
            MemoryManager::init(DefaultMemoryImpl::default())
        );
    
        static ID_COUNTER: RefCell<IdCell> = RefCell::new(
            IdCell::init(MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))), 0)
                .expect("Cannot create a counter")
        );
    
        static STORAGE: RefCell<StableBTreeMap<u64, Message, Memory>> =
            RefCell::new(StableBTreeMap::init(
                MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1)))
        ));
    }
    
    #[derive(candid::CandidType, Serialize, Deserialize, Default)]
    struct MessagePayload {
        title: String,
        body: String,
        attachment_url: String,
    }
    
    #[ic_cdk::query]
    fn get_message(id: u64) -> Result<Message, Error> {
        match _get_message(&id) {
            Some(message) => Ok(message),
            None => Err(Error::NotFound {
                msg: format!("a message with id={} not found", id),
            }),
        }
    }
    
    #[ic_cdk::update]
    fn add_message(message: MessagePayload) -> Option<Message> {
        let id = ID_COUNTER
            .with(|counter| {
                let current_value = *counter.borrow().get();
                counter.borrow_mut().set(current_value + 1)
            })
            .expect("cannot increment id counter");
        let message = Message {
            id,
            title: message.title,
            body: message.body,
            attachment_url: message.attachment_url,
            created_at: time(),
            updated_at: None,
        };
        do_insert(&message);
        Some(message)
    }
    
    #[ic_cdk::update]
    fn update_message(id: u64, payload: MessagePayload) -> Result<Message, Error> {
        match STORAGE.with(|service| service.borrow().get(&id)) {
            Some(mut message) => {
                message.attachment_url = payload.attachment_url;
                message.body = payload.body;
                message.title = payload.title;
                message.updated_at = Some(time());
                do_insert(&message);
                Ok(message)
            }
            None => Err(Error::NotFound {
                msg: format!(
                    "couldn't update a message with id={}. message not found",
                    id
                ),
            }),
        }
    }
    
    // helper method to perform insert.
    fn do_insert(message: &Message) {
        STORAGE.with(|service| service.borrow_mut().insert(message.id, message.clone()));
    }
    
    #[ic_cdk::update]
    fn delete_message(id: u64) -> Result<Message, Error> {
        match STORAGE.with(|service| service.borrow_mut().remove(&id)) {
            Some(message) => Ok(message),
            None => Err(Error::NotFound {
                msg: format!(
                    "couldn't delete a message with id={}. message not found.",
                    id
                ),
            }),
        }
    }
    
    #[derive(candid::CandidType, Deserialize, Serialize)]
    enum Error {
        NotFound { msg: String },
    }
    
    // a helper method to get a message by id. used in get_message/update_message
    fn _get_message(id: &u64) -> Option<Message> {
        STORAGE.with(|service| service.borrow().get(id))
    }
    
    // need this to generate candid
    ic_cdk::export_candid!();
```


## 3. Deploy and Interact With Our Canister
With our canister code ready, it's time to build and deploy our canister.

### 3.1 Deploying Our Canister
First, let's start our local canister replica in the background. Run the following command in your terminal:
```bash
dfx start --background
```

When you run this command, you should see a similar output:
```bash
Running dfx start for version 0.15.0
Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
Dashboard: http://localhost:49846/_/dashboard
```

Finally, go ahead and deploy your canister code with the command:
```bash
npm run gen-deploy
```

This command will initiate the deployment process for your canister. Once the deployment is successful, your canister will be available on the Internet Computer, and you can start interacting with it using various methods and APIs.
    
**Note** : If you are getting a permission error when running this command, you can apply the following steps to resolve:

- First run the following command in your terminal:
    ```bash
    chmod +x did.sh
    ```

- Rerun the following command:
    ```
    npm run gen-deploy
    ```

### 3.2 Interacting With Our Canister
Now that we have our canister deployed, there are two ways to interact with our canister:

#### 3.2.1 Option 1: Using the terminal
To interact with our canister using the terminal, we can make use of the dfx canister call command. This command allows us to call functions on our canister from the terminal.

**1. Adding a message**: Let's start by calling the add_message function to add a new message to our canister. Run the following command in your terminal:
```bash
dfx canister call icp_rust_boilerplate_backend add_message '(
  record {
    title = "Hello World";
    body = "This is my first message";
    attachment_url = "https://www.dacade.org";
  }
)'
```

This command will add a new message to our canister. You should see a similar output:
```bash
(
  opt record {
    id = 0 : nat64;
    title = "Hello World";
    updated_at = null;
    body = "This is my first message";
    created_at = 1_697_100_483_214_101_991 : nat64;
    attachment_url = "https://www.dacade.org";
  }
)
```

**2. Retrieving a message**:
Next, let's call the get_message function to retrieve the message we just added. Run the following command in your terminal:

```bash
dfx canister call icp_rust_boilerplate_backend get_message '(0)'
```

This command will retrieve the message we just added. You should see a similar output:
```bash
(
  variant {
    Ok = record {
      id = 0 : nat64;
      title = "Hello World";
      updated_at = null;
      body = "This is my first message";
      created_at = 1_697_100_483_214_101_991 : nat64;
      attachment_url = "https://www.dacade.org";
    }
  },
)
```

**3. Updating a message**:
Next, let's call the update_message function to update the message we just added. Run the following command in your terminal:
```bash
dfx canister call icp_rust_boilerplate_backend update_message '(0, record { title = "Hello World Updated"; body = "This is my first message"; attachment_url = "https://www.dacade.org"; })'
```

This command will update the message we just added. You should see a similar output:
```bash
(
  variant {
    Ok = record {
      id = 0 : nat64;
      title = "Hello World updated";
      updated_at = opt (1_697_100_678_394_806_548 : nat64);
      body = "This is my first message";
      created_at = 1_697_100_483_214_101_991 : nat64;
      attachment_url = "https://www.dacade.org";
    }
  },
```

**4. Deleting a message**:
Finally, let's call the delete_message function to delete the message we just added. Run the following command in your terminal:
```bash
dfx canister call icp_rust_boilerplate_backend delete_message '(0)'
```

This command will delete the message we just added. You should see a similar output:
```bash
(
  variant {
    Ok = record {
      id = 0 : nat64;
      title = "Hello World updated";
      updated_at = opt (1_697_100_678_394_806_548 : nat64);
      body = "This is my first message";
      created_at = 1_697_100_483_214_101_991 : nat64;
      attachment_url = "https://www.dacade.org";
    }
  },
)
```

#### 3.2.2 Option 2: Using the Candid UI

**Note : If you are using Codespaces,  this option will not work, so you have to go with the Option 1.**

First, let's start our local canister replica in the background. Run the following command in your terminal:
```bash
dfx start --background
```

When you run this command, you should see a similar output:
```bash
Running dfx start for version 0.15.0
Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
Dashboard: http://localhost:49846/_/dashboard
```

Finally, go ahead and deploy your canister code with the command:
```bash
npm run gen-deploy
```

When it is done you would see a similar output:
```bash
Installing canisters...
Creating UI canister on the local network.
The UI canister on the "local" network is "bd3sg-teaaa-aaaaa-qaaba-cai"
Installing code for canister icp_rust_message_board_contract_backend, with canister ID bkyz2-fmaaa-aaaaa-qaaaq-cai
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    icp_rust_boilerplate_backend: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai

```

You can then copy the URL for the backend canister via Candid interface and paste it in your browser. This will open the Candid UI for your canister which looks like this:

![](https://hackmd.io/_uploads/Hy66WtSba.gif)

## 4. Conclusion
In this tutorial, you've explored the development of a decentralized Rust-based canister on the Internet Computer Protocol (ICP) platform. We introduced you to key concepts essential for working with Rust and canisters, guiding you through the process of setting up your development environment and creating a web3 canister with fundamental CRUD operations.

Throughout this tutorial, you've accomplished the following:

- **Written a smart contract (Canister) in Rust**: You've learned how to write a smart contract in Rust, including the necessary dependencies and functions for managing messages within the canister's storage. 

- **Deployment and Interaction:** You've learned how to deploy your Rust canister using the `dfx deploy` command, and you've delved into the methods for interacting with your canister through both the terminal and web interfaces. You've executed essential functions, including adding, retrieving, updating, and deleting messages, and grasped the nuances of these commands.

- **Empowering Your Journey:** By completing this tutorial, you've gained practical experience in Rust-based canister development, setting the stage for creating more intricate and robust decentralized applications (dApps) on the Internet Computer.

As you continue to explore the vast landscape of the Internet Computer and its ecosystem, remember that you have a multitude of possibilities at your fingertips. Whether you're drawn to decentralized finance (DeFi), social media applications, decentralized autonomous organizations (DAOs), or any other innovative use case, the knowledge and skills you've acquired here provide a solid foundation for your journey.

It's important to note that this course is open source and falls under the MIT license. We encourage you to contribute to enhancing the course content by making pull requests if you have suggestions for improvement. You can do so by visiting the course repository [here](https://github.com/dacadeorg/tutorials/blob/main/ICP/rust-smart-contract-101/content/rust-smart-contract-101.md) and sharing your improvement proposals.

For further learning and engagement with like-minded individuals, consider exploring the following resources within the ICP community:

- **Discord:** Join the vibrant ICP community on Discord, where you can partake in discussions, seek solutions to challenges, and collaborate with fellow developers. [Join the Conversation](https://discord.com/invite/cA7y6ezyE2).
- **Forum:** The [ICP Forum](https://forum.dfinity.org/) is a valuable platform for asking questions, sharing your projects, and gaining insights into the work of other community members.
- **Rust in the ICP Ecosystem:** To extend your knowledge of Rust within the ICP ecosystem, explore the various resources available.

These platforms offer a wealth of knowledge and the support of a passionate community, facilitating your journey into the decentralized web. We anticipate and look forward to witnessing the innovative creations that will emerge from your endeavors.