<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2024 Dacade.org -->

ICP Rust開発101チュートリアルへようこそ！このチュートリアルは、Internet Computer Protocol (ICP)プラットフォームでの開発入門として設計されています。このガイドでは、Rustで動作する分散型キャニスターの構築と対話の基本を学びます。このガイドを終えると、ICPプラットフォームの開発について確実な理解を得て、分散型アプリケーションの基盤を作成できるようになります。

このチュートリアルでは、RustでMessage-board web3キャニスターを構築します。
このキャニスターでは、メッセージの作成、更新、削除、一覧表示が可能になります。

### 学習内容
- **開発環境のセットアップ:**
DFX、Candid Extractor、Rustなどの必須ツールをインストールして開発環境をセットアップします。
- **RustでのMessage Boardキャニスターの構築:**
Internet Computer Protocol (ICP)プラットフォームにおけるRustベースのキャニスター開発の核となる概念を理解し、キャニスター内でメッセージを管理するためのCRUD（作成、読み取り、更新、削除）機能を実装します。
- **キャニスターのデプロイと対話:**
ICPプラットフォームへのweb3キャニスターのデプロイプロセスを探求し、ローカルおよびWebベースのツールを使用してデプロイされたweb3キャニスターと対話する方法を学びます。

### キャニスターとは？
キャニスターは、Internet Computer Protocol (ICP)プラットフォーム上でソフトウェアアプリケーションをデプロイし実行するための基本的な構成要素および実行環境です。キャニスターはコードと状態を束ねて、安全で効率的な実行環境を作成します。これは他のブロックチェーンプラットフォームのスマートコントラクトに似ています。キャニスターにより、DeFiプラットフォーム、ソーシャルメディアアプリケーション、DAOなどのスケーラブルで分散型のアプリケーションの開発が可能になります。

### 前提条件
プログラミングの経験は必要ですが、このチュートリアルを進めるためにブロックチェーンの経験は必要ありません。ただし、以下のものを持っていることをお勧めします：

- **Rustの基本的な知識** - このチュートリアルではRustの基本的な理解があることを前提としています。Rustに不慣れな場合や復習が必要な場合は、Rustの使い方に関する以下の初心者向けチュートリアルをご覧ください：[Rust Crash Course | Rustlang](https://www.youtube.com/watch?v=zF34dRivLOw)
- **ターミナルの使用方法の知識** - このチュートリアルではターミナルを使用する必要があります。ターミナルに不慣れな場合や復習が必要な場合は、ターミナルの使い方に関する以下の初心者向けチュートリアルをご覧ください：[Learn the Command Line: Basic Commands](https://www.youtube.com/watch?v=MBBWVgE0ewk)
- **IDEに関する知識** - このチュートリアルではVSCodeのWeb版を使用します。IDEに不慣れな場合や復習が必要な場合は、VSCodeの使い方に関する以下の初心者向けチュートリアルをご覧ください：[Learn Visual Studio Code in 7min (Official Beginner Tutorial)](https://www.youtube.com/watch?v=B-s71n0dHUk)

### 技術スタック
- **Internet Computer Protocol (ICP)** -
  ICPは、パブリックインターネット上で実行できるソフトウェア、計算、データの作成を可能にする分散型コンピューティングプラットフォームです。これは私たちがアプリケーションを構築するプラットフォームです。
- **DFX - Internet Computer CLI** -
  DFXは、Internet Computerのコマンドラインインターフェースで、プラットフォーム上でキャニスターの作成、ビルド、デプロイ、管理に使用されます。また、テスト用のローカル開発環境も提供します。
- **Rust - システムプログラミング言語** -
  Rustは強力なシステムプログラミング言語で、高水準言語の表現力と低水準のパフォーマンスを組み合わせています。その所有権システムと並行性モデルにより、信頼性の高い効率的なソフトウェア開発が保証されます。
- **Node.js - JavaScript Runtime (v18)** -
  Node.js バージョン18は、Webブラウザ外でコードを実行するためのJavaScriptランタイムとして機能します。
- **Cargo - Rustパッケージマネージャ** -
  CargoはRustの公式ビルドツールおよびパッケージマネージャです。依存関係の管理とプロジェクトのビルドを簡素化し、Rust開発における重要なコンポーネントとなっています。
- **Candid - インターフェース記述言語 (IDL)** -
  CandidはInternet Computerがサービスのパブリックインターフェース、つまりそのメソッドと入出力の型を定義および記述するために使用します。プロジェクトでは、キャニスターのインターフェースを記述するためにCandidを使用します。
- **GitHub Codespaces (オプション)** -
  Codespacesは、ローカルインストールなしでクラウドベースの開発を可能にするGitHubの機能です。プロジェクトを素早く開始するための便利な方法を提供します。

### 概要
1. [セットアップ](#1-setup) (15分) - このセクションでは、プロジェクトのセットアップに必要な手順を説明します。
2. [キャニスターの構築](#2-building-the-canister) (45分) - このセクションでは、メッセージボードICPキャニスターを構築します。
3. [キャニスターのデプロイと対話](#3-build-and-deploy-our-canister) (15分) - このセクションでは、コマンドラインとCandid Webインターフェースを使用してメッセージボードキャニスターと対話します。
4. [結論](#4-conclusion) (1分) - 最後に、このチュートリアルを締めくくり、次のステップについてのアイデアを提供します。

完全なコードを見たい場合は、GitHubリポジトリを[こちら](https://github.com/dacadeorg/icp-message-board-rust)で確認できます。

## 1. セットアップ
このセクションでは、プロジェクトのボイラープレートコードのセットアップを支援します。このセクションの終わりには、必要なツールと依存関係がすべて設定された開発環境が整い、キャニスターの構築を開始する準備が整います。

### 1.1 開発環境の準備
開発環境のセットアップには2つのオプションがあります：ローカルマシンにセットアップするか、GitHub Codespacesを使用してクラウドでセットアップするかです。

#### 1.1.1 オプション1: GitHub Codespacesの使用
GitHub Codespacesは、ブラウザ上で完全な準備が整った開発環境を提供します。ローカルセットアップの必要がなく、学習と構築に集中できます。

ボイラープレートで新しいCodespaceを作成するには、以下の手順に従ってください：

1. **ICP Rustボイラープレートリポジトリにアクセス**:
[ICP Rustボイラープレートリポジトリ](https://github.com/dacadeorg/icp-101-rust-boilerplate)に移動します。

2. **Codespaceの作成:**
リポジトリページの右上にある"Code"ボタンをクリックします。
ドロップダウンメニューから"Create codespace on main"を選択します。この操作により、このプロジェクトの作業に必要なすべてが設定された新しいCodespaceが生成されます。

#### 1.1.2 オプション2: ローカル環境のセットアップ
ローカルで開発環境をセットアップすることを選択した場合は、以下の手順に従ってください：

1. **ICPメッセージボードリポジトリにアクセス**
[ICPメッセージボードリポジトリ](https://github.com/dacadeorg/icp-101-rust-boilerplate)に移動します。

2. **リポジトリのクローン:**
- "Code"ボタンをクリックし、"Local"タブに切り替えます。リポジトリのURLをコピーします。
- ターミナルで、プロジェクトを保存したい場所に移動し、以下のコマンドでリポジトリをクローンします：

```bash
git clone https://github.com/dacadeorg/icp-101-rust-boilerplate
```

3. **プロジェクトディレクトリに移動:**
以下のコマンドを使用してクローンしたリポジトリのディレクトリに移動します：
```bash
cd icp-101-rust-boilerplate
```

これでボイラープレート環境のセットアップが完了したので、お好みのエディタでコードベースを開くことができます。

### 1.2 依存関係のインストール
このセクションでは、プロジェクトに必要な依存関係をインストールします。Rust、Wasmtime、Candid Extractor、DFXをインストールします。また、キャニスターのCandidインターフェース定義の生成を自動化するスクリプトも設定します。

#### 1.2.1 Rustのインストール
RustでICPキャニスターを作成する前に、スムーズなワークフローを確保するためにRust開発環境をセットアップしましょう。Rustはシステムレベルのプログラミングとウェブ開発の両方に強力なツールセットを提供します。RustとCargoをインストールし、プロジェクト用に設定します。

Rustには"Cargo"という専用のパッケージマネージャーが付属しており、依存関係の管理とプロジェクトのビルドが容易になります。すでにRustをセットアップしている場合は、このステップをスキップできます。

Rustをインストールするために、公式のRustツールチェーンインストーラーである rustup を使用します。ターミナルで以下のコマンドを実行してRustをインストールします：
```bash  
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

コマンドを実行すると、インストールの進め方を尋ねるウェルカムメッセージが表示されます：
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

1を押してEnterを押すか、1がデフォルトで選択されているため直接Enterを押してインストールを進めます。

インストールが完了すると、ターミナルに以下のような出力が表示されます：
```bash

Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).

To configure your current shell, run:
source "$HOME/.cargo/env"
```

次に、必要な環境変数が確実に読み込まれるように、sourceコマンドを実行します：
```bash
source "$HOME/.cargo/env"
```

これでRustのインストールは完了です。次のセクションでは、プロジェクトに必要な依存関係をインストールします。
  
#### 1.2.2 wasm32-unknown-unknown targetのインストール
次に、wasm32-unknown-unknown targetをインストールする必要があります。これはRustプログラミング言語用のWebAssemblyターゲットで、RustコードをWebAssemblyにコンパイルしてInternet Computer上で実行できるようにします。

以下のコマンドを実行してwasm32-unknown-unknown targetをインストールします：
```bash
rustup target add wasm32-unknown-unknown
```

#### 1.2.3 Candid Extractorのインストール
次に、Candid Extractorをインストールする必要があります。これはWebAssemblyモジュールからCandidインターフェース定義を抽出できるツールです。これにより、キャニスターと対話するためのCandidインターフェース定義を生成できます。

以下のコマンドを実行してCandid Extractorをインストールします：
```bash
cargo install candid-extractor
```

#### 1.2.4 DFXのインストール
また、Internet Computer用のコマンドラインインターフェースであるDFXも必要です。DFXを使用することで、プラットフォーム上でキャニスターの作成、ビルド、デプロイ、管理が可能になります。また、テスト用のローカル開発環境も提供します。

以下のコマンドを実行してDFXをインストールします：
```bash
DFX_VERSION=0.15.0 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

DFXをインストールしたら、パスに追加する必要があります。以下のコマンドを実行します：
```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

#### 1.2.6 すべてが正しくインストールされていることの確認

1. **ターミナルを閉じて再度開く：**
    新しい環境変数が確実に読み込まれるように、ターミナルを閉じて再度開きます。
2. **インストールされたRustのバージョンを確認：**
    以下のコマンドを実行してインストールされたRustのバージョンを確認します：
    ```bash  
    cargo --version
    ```
    以下のような出力が表示されるはずです：
    ```
    cargo 1.72.0 (103a7ff2e 2023-08-15)
    ```
3. **インストールされたDFXのバージョンを確認：**
    以下のコマンドを実行してインストールされたDFXのバージョンを確認します：
    ```bash  
    dfx --version
    ```
    以下のような出力が表示されるはずです：
    ```bash
    dfx 0.15.0
    ```
  
これですべての依存関係のインストールが完了し、キャニスターの構築を開始する準備が整いました。

### 1.3 ボイラープレートコードの概要
このセクションでは、生成されたボイラープレートコードについて説明します。このコードは、必要な設定ファイルを提供することで、素早く開始できるように設計されています。また、独自のキャニスターを構築する際の参考となる簡単なキャニスターも含まれています。

ボイラープレートコードは以下のディレクトリとファイルで構成されています：
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

これらのファイルとディレクトリについて詳しく見ていきましょう。

#### 1. Srcディレクトリ
`src`ディレクトリ内には、`icp_rust_boilerplate_backend`という名前のサブディレクトリがあります。これがキャニスターのコアが存在する場所です。

#### 2. icp_rust_boilerplate_backendサブディレクトリ
このサブディレクトリにはキャニスターのRustコードが含まれています。以下のファイルがあります：
- `src/lib.rs`: キャニスターのロジックを定義するメインのRustソースファイル。
- `Cargo.toml`: キャニスターのパッケージ設定ファイル。依存関係やその他のプロジェクト関連情報を指定します。
- `icp_rust_boilerplate_backend.did`: キャニスターのCandidインターフェース定義を含むファイル。外部の呼び出し元がキャニスターとどのように対話するかを定義します。

#### 3. .gitignore
Gitを使用したことがある方なら、このファイルをご存知でしょう。Gitが無視すべきファイルとディレクトリを指定します。

#### 4. Cargo.lockとCargo.toml
これらのファイルはRustのパッケージ管理システムの一部です。`Cargo.toml`はパッケージのメタデータと依存関係を定義し、`Cargo.lock`は自動生成され、最後の成功したビルドで使用された依存関係の正確なバージョンを記録します。

#### 5. dfx.json
このJSON設定ファイルには、プロジェクトの設定、ビルド設定などを含むInternet Computer開発環境に関連する設定が含まれています。

#### 6. did.sh
このBashスクリプトは、Rustプログラミング言語を使用する一連のキャニスタープロジェクトのCandidインターフェース定義（DIDファイル）の生成を自動化します。Candidは、Internet Computer Protocolでキャニスターのインターフェースを定義するために使用されるシリアライゼーション形式です。

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

提供されたスクリプトでは、CANISTERSの行を、この場合は`icp_rust_boilerplate_backend`である自身のキャニスターの名前に合わせて変更していることに注意してください。

例えば、キャニスターの名前が`test_rust_boilerplate`の場合、以下の行を：
```
CANISTERS=icp_rust_boilerplate_backend
```
このチュートリアルの場合、自身のキャニスターの名前に変更します：
```
CANISTERS=test_rust_boilerplate_backend
```

#### 7. package.json
さらに、ルートディレクトリにはCandidインターフェース定義の生成とキャニスターのデプロイのためのスクリプトを含む`package.json`ファイルがあります。

package.jsonファイルは2つのスクリプトを定義しています：

- `generate`: このスクリプトは`did.sh`を実行し、その後`dfx generate`を実行してCandidインターフェース定義と他の必要なファイルを生成します。
- `gen-deploy`: このスクリプトは`generate`と同じことを行いますが、さらに`dfx deploy -y`でキャニスターをデプロイします。

キャニスターのエクスポートされた関数を変更、追加、または削除するたびに、generateスクリプトを実行する必要があります。そうしない場合は、Candidファイルを手動で修正する必要があるかもしれません。

この初期セットアップで、開発プロセスを開始する準備が整いました。

次のセクションでは、`src/icp_rust_boilerplate_backend/src/lib.rs`から始めて、各ファイルの具体的な詳細について説明していきます。
それでは、ICPキャニスターを一歩ずつ構築していきましょう！

## 2. キャニスターの構築
このセクションでは、メッセージボードICPキャニスターを構築します。キャニスター内でメッセージを管理するためのCRUD（作成、読み取り、更新、削除）機能を実装します。

### 2.1 lib.rsから始める
キャニスタープロジェクトのsrcフォルダ内の`lib.rs`ファイルに移動しましょう。このファイルはキャニスターのエントリーポイントとなり、ここにキャニスターのロジックを記述します。

lib.rsファイルの内容を消去して、このチュートリアルのコードスニペットに従って進めてください。

### 2.2 依存関係のインポート
まず、キャニスターに必要な依存関係をインポートすることから始めましょう。開発を容易にするために、以下の依存関係を使用します：

```Rust
    #[macro_use]
    extern crate serde;
    use candid::{Decode, Encode};
    use ic_cdk::api::time;
    use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
    use ic_stable_structures::{BoundedStorable, Cell, DefaultMemoryImpl, StableBTreeMap, Storable};
    use std::{borrow::Cow, cell::RefCell};
```

- `candid`: CandidはInternet Computer Protocolで使用されるシリアライゼーション形式で、キャニスターのインターフェースを定義するために使用されます。
- `ic_cdk`: Internet Computer用のRust CDK（Canister Development Kit）のコアクレート（パッケージ/モジュール）です。RustプログラムがInternet ComputerブロックチェーンシステムのAPIと対話するための主要なメソッドを提供します。
- `ic_stable_structures`: このライブラリは、アップグレード時も安定して保持されるデータ構造のセットを提供します。
- `std`: Rust標準ライブラリは、ポータブルなRustソフトウェアを構築するための基本的なランタイム機能を提供します。
- `serde`: Serdeは、Rustのデータ構造を効率的かつ汎用的にシリアライズおよびデシリアライズするためのフレームワークです。

### 2.3 メモリとIdCellの定義
次に、メモリとIdCellの型を定義します。これらの型を使用して、キャニスターの状態を保存し、各メッセージに一意のIDを生成します。

```Rust
    type Memory = VirtualMemory<DefaultMemoryImpl>;
    type IdCell = Cell<u64, Memory>;
```

キャニスターの状態を保存するために、MemoryManagerを使用してキャニスターの仮想メモリを管理します。

`IdCell`はメッセージの現在のIDを保持するセルです。これを使用して、各メッセージに一意のIDを生成します。

### 2.4 メッセージ構造体の定義
次に、メッセージボードアプリケーションのメッセージを表すMessage構造体を定義します。

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

この構造体は、メッセージボードアプリケーションのメッセージを表し、ID、タイトル、本文、添付ファイルのURL、作成タイムスタンプ、およびオプションの更新タイムスタンプのフィールドを含みます。

これらの初期定義により、スマートコントラクト内でメッセージボードアプリケーションのコアロジックを実装する準備が整いました。

### 2.5 StorableとBoundedStorableの実装
次に、Message構造体に対してStorableとBoundedStorableトレイトを実装します。これらのトレイトは、構造体を安定構造体に保存するために必要です。トレイトは、複数の型で実装できる共通のインターフェースとしてメソッドをグループ化する方法です。これは他のプログラミング言語のインターフェースに似ています。

```Rust
    // 安定構造体に保存される構造体に実装する必要があるトレイト
    impl Storable for Message {
        fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
            Cow::Owned(Encode!(self).unwrap())
        }
    
        fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
            Decode!(bytes.as_ref(), Self).unwrap()
        }
    }
    
    // 安定構造体に保存される構造体に実装する必要がある別のトレイト
    impl BoundedStorable for Message {
        const MAX_SIZE: u32 = 1024;
        const IS_FIXED_SIZE: bool = false;
    }
```

Storableトレイトは、構造体をバイトに変換し、その逆を行うために使用されます。BoundedStorableトレイトは、構造体の最大サイズと、それが固定サイズかどうかを定義するために使用されます。

### 2.6 スレッドローカル変数の設定
次に、キャニスターの状態を保持するスレッドローカル変数を設定します。スレッドローカル変数は、現在のスレッド（命令のシーケンス）に対してローカルな変数です。複数のスレッド間でデータを共有する必要がある場合に便利です。

キャニスターの状態を管理するために`RefCell`を使用し、コードのどこからでもアクセスできるようにします。
`RefCell`は、動的に借用規則をチェックする可変メモリ位置です。コードが借用規則に従っていることを確信しているが、コンパイラがそれを保証できない場合に便利です。

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

定義した3つのスレッドローカル変数は：

- `MEMORY_MANAGER` - このスレッドローカル変数はキャニスターの仮想メモリを保持し、コードのどこからでもメモリマネージャーにアクセスできるようにします。
- `ID_COUNTER` - キャニスターのIDカウンターを保持し、コードのどこからでもアクセスできるようにします。
- `STORAGE` - このスレッドローカル変数はキャニスターのストレージを保持し、コードのどこからでもアクセスできるようにします。

### 2.6.1 MessagePayloadの設定
状態変数の設定が完了したので、メッセージペイロードの設定に進みましょう。MessagePayload構造体は、メッセージの追加や更新時に使用され、タイトル、本文、添付ファイルのURLのフィールドを含みます。

```Rust
    #[derive(candid::CandidType, Serialize, Deserialize, Default)]
    struct MessagePayload {
        title: String,
        body: String,
        attachment_url: String,
    }
```

MessagePayload構造体は、キャニスター内でメッセージを作成または更新する際に使用されるデータの構造を定義します。

この時点で、コードは以下のようになっているはずです：
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

スレッドローカル変数とメッセージペイロード構造体の準備が整ったので、スマートコントラクト内でメッセージボードアプリケーションのコアロジックの実装を開始する準備が整いました。これから続くセクションでは、メッセージの作成、更新、削除、一覧表示の処理についてより深く掘り下げていきます。

### 2.7 メッセージの管理
このセクションでは、キャニスター内でメッセージを管理するためのコアロジックを実装します。

#### 2.7.1 `get_message`関数
まず、キャニスターのストレージからメッセージを取得する`get_message`関数を実装しましょう。

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

`get_message`関数はidを入力として受け取り、MessageまたはErrorを含むResultを返します。この関数には#[ic_cdk::query]属性が付けられており、これはキャニスターの状態を変更しないクエリ関数であることを示しています。この関数は`_get_message`ヘルパー関数を使用してキャニスターのストレージからメッセージを取得します。

#### 2.7.2 `_get_message`関数
`_get_message`は`get_message`関数内で使用されるヘルパー関数です。

```Rust
    fn _get_message(id: &u64) -> Option<Message> {
        STORAGE.with(|s| s.borrow().get(id))
    }
```

この関数は参照としてidを受け取り、`Option<Message>`を返します。STORAGEスレッドローカル変数を使用してキャニスターのストレージからメッセージを取得します。

#### 2.7.3 `add_message`関数
次に、キャニスターのストレージに新しいメッセージを追加する`add_message`関数を作成しましょう。

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

`add_message`関数はMessagePayload型のメッセージを入力として受け取り、`Option<Message>`を返します。メッセージの一意のIDを生成し、新しいMessage構造体を作成し、キャニスターのストレージに追加します。ストレージ操作を実行するために`do_insert`ヘルパー関数を使用します。

#### 2.7.4 `do_insert`関数
前のセクションで見たように、`do_insert`関数は`add_message`関数内で使用されるヘルパー関数です。

```Rust
    // 挿入を実行するヘルパーメソッド
    fn do_insert(message: &Message) {
        STORAGE.with(|service| service.borrow_mut().insert(message.id, message.clone()));
    }
```

`do_insert`関数はメッセージを受け取り、そのメッセージをキャニスターのストレージに追加します。STORAGEスレッドローカル変数を使用してメッセージをキャニスターのストレージに追加します。

#### 2.7.5 `update_message`関数
次に、キャニスターのストレージ内のメッセージを更新する`update_message`関数を作成しましょう。

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

`add_message`関数と同様に、`update_message`関数はidとMessagePayload型のペイロードを入力として受け取り、MessageまたはErrorを含むResultを返します。提供されたIDに基づいてキャニスターのストレージ内の既存のメッセージを更新します。メッセージが正常に更新された場合は更新されたメッセージを返し、そうでない場合はエラーを返します。

#### 2.7.6 `delete_message`関数
次に、キャニスターのストレージからメッセージを削除する`delete_message`関数を作成しましょう。

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

`delete_message`関数はidを入力として受け取り、MessageまたはErrorを含むResultを返します。提供されたIDに基づいてキャニスターのストレージから既存のメッセージを削除します。メッセージが正常に削除された場合は削除されたメッセージを返し、そうでない場合はエラーを返します。

#### 2.7.7 `Error`列挙型
最後に、キャニスターとの対話時に発生する可能性のあるエラーを表すError列挙型を作成します。
```Rust
    #[derive(candid::CandidType, Deserialize, Serialize)]
    enum Error {
        NotFound { msg: String },
    }
```

キャニスターのCandidインターフェース定義を生成するために、ファイルの最後に以下のコードを追加します：

```Rust
    // candidを生成するために必要
    ic_cdk::export_candid!();
```

これでメッセージボードアプリケーションのスマートコントラクト内でメッセージを管理するための関数の説明が完了しました。これらの関数を使用することで、キャニスターのストレージからメッセージを作成、更新、削除、取得するための基本的な構成要素が整いました。

### 2.8 完成したlib.rs
このセクションの最後で、コードは以下のようになっているはずです：
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
    
    // 安定構造体に保存される構造体に実装する必要があるトレイト
    impl Storable for Message {
        fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
            Cow::Owned(Encode!(self).unwrap())
        }
    
        fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
            Decode!(bytes.as_ref(), Self).unwrap()
        }
    }
    
    // 安定構造体に保存される構造体に実装する必要がある別のトレイト
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
    
    // 挿入を実行するヘルパーメソッド
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
    
    // メッセージをIDで取得するヘルパーメソッド。get_message/update_messageで使用
    fn _get_message(id: &u64) -> Option<Message> {
        STORAGE.with(|service| service.borrow().get(id))
    }
    
    // candidを生成するために必要
    ic_cdk::export_candid!();
```

## 3. キャニスターのデプロイと対話
キャニスターのコードが準備できたので、キャニスターをビルドしデプロイする時が来ました。

### 3.1 キャニスターのデプロイ
まず、ローカルキャニスターレプリカをバックグラウンドで起動しましょう。ターミナルで以下のコマンドを実行します：
```bash
dfx start --background
```

このコマンドを実行すると、以下のような出力が表示されるはずです：
```bash
Running dfx start for version 0.15.0
Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
Dashboard: http://localhost:49846/_/dashboard
```

最後に、以下のコマンドでキャニスターコードをデプロイします：
```bash
npm run gen-deploy
```

このコマンドによりキャニスターのデプロイプロセスが開始されます。デプロイが成功すると、キャニスターはInternet Computer上で利用可能になり、様々な方法やAPIを使用して対話を開始できます。
    
**注意** : このコマンドを実行する際にパーミッションエラーが発生した場合は、以下の手順で解決できます：

- まず、ターミナルで以下のコマンドを実行します：
    ```bash
    chmod +x did.sh
    ```

- 次に、以下のコマンドを再実行します：
    ```
    npm run gen-deploy
    ```

### 3.2 キャニスターとの対話
キャニスターがデプロイされたので、キャニスターと対話する方法は2つあります：

#### 3.2.1 オプション1: ターミナルの使用
ターミナルを使用してキャニスターと対話するには、dfx canister callコマンドを使用できます。このコマンドを使用すると、ターミナルからキャニスターの関数を呼び出すことができます。

**1. メッセージの追加**: まず、add_message関数を呼び出して新しいメッセージをキャニスターに追加してみましょう。ターミナルで以下のコマンドを実行します：
```bash
dfx canister call icp_rust_boilerplate_backend add_message '(
  record {
    title = "Hello World";
    body = "This is my first message";
    attachment_url = "https://www.dacade.org";
  }
)'
```

このコマンドは新しいメッセージをキャニスターに追加します。以下のような出力が表示されるはずです：
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

**2. メッセージの取得**:
次に、get_message関数を呼び出して、追加したメッセージを取得してみましょう。ターミナルで以下のコマンドを実行します：

```bash
dfx canister call icp_rust_boilerplate_backend get_message '(0)'
```

このコマンドは追加したメッセージを取得します。以下のような出力が表示されるはずです：
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

**3. メッセージの更新**:
次に、update_message関数を呼び出して、追加したメッセージを更新してみましょう。ターミナルで以下のコマンドを実行します：
```bash
dfx canister call icp_rust_boilerplate_backend update_message '(0, record { title = "Hello World Updated"; body = "This is my first message"; attachment_url = "https://www.dacade.org"; })'
```

このコマンドは追加したメッセージを更新します。以下のような出力が表示されるはずです：
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
**4. メッセージの削除**:
最後に、delete_message関数を呼び出して、追加したメッセージを削除してみましょう。ターミナルで以下のコマンドを実行します：
```bash
dfx canister call icp_rust_boilerplate_backend delete_message '(0)'
```

このコマンドは追加したメッセージを削除します。以下のような出力が表示されるはずです：
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

#### 3.2.2 オプション2: Candid UIの使用

**注意 : Codespacesを使用している場合、このオプションは機能しないため、オプション1を使用する必要があります。**

まず、ローカルキャニスターレプリカをバックグラウンドで起動しましょう。ターミナルで以下のコマンドを実行します：
```bash
dfx start --background
```

このコマンドを実行すると、以下のような出力が表示されるはずです：
```bash
Running dfx start for version 0.15.0
Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
Dashboard: http://localhost:49846/_/dashboard
```

最後に、以下のコマンドでキャニスターコードをデプロイします：
```bash
npm run gen-deploy
```

完了すると、以下のような出力が表示されるはずです：
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

その後、Candid interfaceを介したバックエンドキャニスターのURLをコピーしてブラウザに貼り付けることができます。これにより、以下のようなキャニスターのCandid UIが開きます：

![](https://hackmd.io/_uploads/Hy66WtSba.gif)

## 4. 結論
このチュートリアルでは、Internet Computer Protocol (ICP)プラットフォーム上での分散型Rustベースのキャニスター開発について探求しました。Rustとキャニスターの作業に不可欠な主要概念を紹介し、開発環境のセットアップから基本的なCRUD操作を備えたweb3キャニスターの作成までのプロセスをガイドしました。

このチュートリアルを通じて、以下のことを達成しました：

- **Rustでスマートコントラクト（キャニスター）を作成**: キャニスターのストレージ内でメッセージを管理するために必要な依存関係と関数を含む、Rustでのスマートコントラクトの書き方を学びました。

- **デプロイと対話:** `dfx deploy`コマンドを使用してRustキャニスターをデプロイする方法を学び、ターミナルとWebインターフェースの両方を通じてキャニスターと対話する方法について深く掘り下げました。メッセージの追加、取得、更新、削除などの基本的な機能を実行し、これらのコマンドの詳細を理解しました。

- **開発の基盤作り:** このチュートリアルを完了することで、Rustベースのキャニスター開発の実践的な経験を得て、Internet Computer上でより複雑で堅牢な分散型アプリケーション（dApps）を作成するための基盤を築きました。

Internet Computerとそのエコシステムの広大な世界を探求し続けるにあたり、あなたの手元には無限の可能性があることを忘れないでください。分散型金融（DeFi）、ソーシャルメディアアプリケーション、分散型自律組織（DAO）、その他の革新的なユースケースのいずれに興味があっても、ここで得た知識とスキルはあなたの旅の確かな基盤となります。

このコースはオープンソースでMITライセンスの下で提供されていることに注意してください。改善の提案がある場合は、プルリクエストを作成してコースの内容の向上に貢献することを推奨します。コースのリポジトリは[こちら](https://github.com/dacadeorg/tutorials/blob/main/ICP/rust-smart-contract-101/content/rust-smart-contract-101.md)で、改善提案を共有することができます。

さらなる学習と同じ志を持つ仲間との交流のために、ICPコミュニティ内の以下のリソースを検討してください：

- **Discord:** Discordの活気あるICPコミュニティに参加して、ディスカッションに参加し、課題の解決策を探り、他の開発者と協力することができます。[会話に参加する](https://discord.com/invite/cA7y6ezyE2)
- **Forum:** [ICPフォーラム](https://forum.dfinity.org/)は、質問をしたり、プロジェクトを共有したり、他のコミュニティメンバーの作業について知見を得たりするための貴重なプラットフォームです。
- **ICPエコシステムにおけるRust:** ICPエコシステム内でのRustに関する知識を深めるために、利用可能な様々なリソースを探索してください。

これらのプラットフォームは豊富な知識と情熱的なコミュニティのサポートを提供し、分散型Webへの旅をサポートします。あなたの取り組みから生まれる革新的な創造物を楽しみにしています。
