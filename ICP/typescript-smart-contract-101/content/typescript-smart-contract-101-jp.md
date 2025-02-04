<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2023 Dacade.org -->

ICP Azle 開発 101 チュートリアルへようこそ！このチュートリアルは、Internet Computer Protocol (ICP) プラットフォームでの開発入門として設計されています。このガイドでは、分散型 Azle キャニスターの構築と対話の基礎を学びます。このガイドを終えると、ICP プラットフォームの開発について確実な理解を得て、分散型アプリケーションの基盤を作成できるようになります。

チュートリアルをスキップしてコードに直接進みたい場合は、[Course Repo](https://github.com/dacadeorg/icp-message-board-contract)リポジトリでこのチュートリアルの最終コードにアクセスできます。

## 1. はじめに

このセクションでは、学習内容、前提条件、技術スタックを含むチュートリアルの概要を説明します。また、キャニスターの構築に使用する TypeScript フレームワークである Azle についても紹介します。

### 1.1 学習内容

- 開発環境のセットアップ：Node.js、Node Version Manager (nvm)、DFX など、ICP 開発に必要なツールを理解し、それらのインストールと使用方法を学びます。
- ボイラープレートコードの理解：`tsconfig.json`、`dfx.json`、`package.json`ファイルを含む、ICP プラットフォームで Azle プロジェクトを開始するために必要な基本的なファイルと設定に慣れ親しみます。
- メッセージングキャニスターの構築と対話：CRUD（作成、読み取り、更新、削除）操作を実行する簡単なメッセージングキャニスターの構築方法を学びます。また、キャニスターのメソッドを呼び出し、レスポンスを処理する方法も学びます。この知識により、ユーザーがメッセージの作成、更新、削除、表示を行える簡単なメッセージボードアプリケーションを構築できるようになります。

### 1.2 キャニスターとは？

キャニスターは、Internet Computer Protocol (ICP) プラットフォーム上でソフトウェアアプリケーションを展開・実行するための基本的な構成要素および実行環境です。キャニスターはコードと状態をバンドルして、安全で効率的な実行環境を作成します。これは他のブロックチェーンプラットフォームのスマートコントラクトに似ています。キャニスターにより、DeFi プラットフォーム、ソーシャルメディアアプリケーション、DAO など、スケーラブルで分散型のアプリケーションの開発が可能になります。

### 1.3 Azle とは？

Azle は Internet Computer (IC)用の TypeScript Canister Development Kit (CDK)です。IC プラットフォーム上でキャニスターを構築・展開するためのライブラリとツールのセットを提供します。Azle を使用することで、Web 開発者は TypeScript/JavaScript のスキルを IC に活かし、様々な npm パッケージや VS Code intellisense を使用することができます。このチュートリアルでは、Azle を使用してキャニスターを作成・展開します。

Azle は現在ベータ開発段階にあることに注意することが重要です。これは、開発のための堅牢で価値のあるフレームワークを提供する一方で、継続的に進化し、大きな変更が行われる可能性があることを意味します。そのため、時折の問題が発生する可能性があり、IC に展開された実際の成功例や継続的に運用されているアプリケーションはまだ多くありません。すべてのユーザーに[disclaimer](https://demergent-labs.github.io/azle/azle.html#disclaimer)を読むことをお勧めします。

Azle についてさらに詳しく知りたい場合は、[Azle ドキュメント](https://demergent-labs.github.io/azle/the_azle_book.html)をご覧ください。

### 1.4 前提条件

このチュートリアルを進めるためにブロックチェーンの経験は必要ありませんが、コーディングの経験は必要です。以下のものを持っていることをお勧めします：

- **TypeScript と Node.js の知識**：このチュートリアルではこれらの技術を使用してアプリケーションを構築するため、TypeScript と Node.js の基礎知識が重要です。TypeScript や Node.js が初めての場合は、基本的なチュートリアルを先に学ぶことをお勧めします。
- **テキストエディタ**：コードの作成と編集にはテキストエディタが必要です。TypeScript と Node.js 開発のサポートが優れている Visual Studio Code を推奨しますが、お好みのテキストエディタを使用してください。
- **Node.js**：事前に Node.js をインストールする必要はありません（nvm を使用して管理する方法を説明します）が、DFINITY SDK とプロジェクトの実行には Node.js（バージョン 18 以上）が必要になることに注意してください。

### 1.5 技術スタック

使用する主要な技術とツールは以下の通りです：

1. Internet Computer Protocol (ICP)：ICP は、パブリックインターネット上で実行できるソフトウェア、計算、データの作成を可能にする分散コンピューティングプラットフォームです。これは私たちがアプリケーションを構築するプラットフォームです。
2. Azle：Azle は Internet Computer Protocol (ICP)上でスマートコントラクト（「キャニスター」）を作成・管理するための TypeScript フレームワークです。
3. Node.js：Node.js は Web ブラウザ外で JavaScript を実行できるランタイムです。このチュートリアルでは Node.js バージョン 18 を使用します。
4. Node Version Manager (nvm)：nvm は異なる Node.js バージョンの管理と切り替えを可能にするツールです。Node.js 環境の管理に使用します。
5. DFX：DFX は Internet Computer のコマンドラインインターフェースです。Azle プロジェクトの作成と管理に使用します。
6. TypeScript：TypeScript は JavaScript の型付きスーパーセットで、プレーンな JavaScript にコンパイルされます。アプリケーションのコード作成に使用し、プロジェクトには TypeScript コンパイラオプションを設定するための設定ファイル（`tsconfig.json`）が含まれます。
7. Candid：Candid は Internet Computer が使用するインターフェース記述言語（IDL）で、サービスの公開インターフェース（メソッドとその入出力型）を定義・記述するために使用されます。プロジェクトでは、キャニスターのインターフェースを記述するために Candid を使用します。

### 1.6 概要

1. [はじめに](#1-introduction) (5 分) - このセクションでは、学習内容、前提条件、技術スタックを含むチュートリアルの概要を説明します。また、キャニスターの構築に使用する TypeScript フレームワークである Azle についても紹介します。

2. [セットアップ](#2-setup) (15 分) - このセクションでは、プロジェクトのセットアップに必要な手順を説明します。
3. [メッセージングキャニスターの構築](#3-constructing-the-messaging-canister) (45 分) - このセクションでは、基本的な CRUD（作成、読み取り、更新、削除）機能を持つメッセージングキャニスターを構築します。
4. [キャニスターのデプロイと対話](#4-deploying-and-interacting-with-our-canister) (15 分) - このセクションでは、コマンドラインを通じてメッセージングキャニスターと対話します。
5. [結論](#5-conclusion) (1 分) - 最後に、このチュートリアルを締めくくり、続けるためのアイデアを提供します。

## 2. セットアップ

このセクションでは、プロジェクトのボイラープレートコードのセットアップをサポートします。このセクションを終えると、必要なツールと依存関係がすべて事前設定された開発環境が整い、キャニスターの構築を開始する準備が整います。

### 2.1 開発環境の準備

開発環境は、ローカルマシンにセットアップするか、GitHub Codespaces を使用してクラウド上にセットアップするかを選択できます。

#### 2.1.1 オプション 1：GitHub Codespaces の使用

GitHub Codespaces は、ブラウザ上で完全な使用準備が整った開発環境を提供します。ローカルセットアップの必要がなく、学習と構築に集中することができます。

ボイラープレートで新しい Codespace を作成するには、[ICP-azle-boilerplate](https://github.com/dacadeorg/ICP-azle-boilerplate/)リポジトリにアクセスしてください。

次に、「Code」ボタンをクリックし、「Create codespace on main」を選択します。この操作により、このプロジェクトの構築に必要なすべてが事前設定された新しい Codespace が生成されます。

Codespace を初めて開く際、このプロジェクトの依存関係が自動的にインストールされることに注意してください。このプロセスには数分かかる場合がありますが、ターミナルでインストールの進行状況を確認できます。

#### 2.1.2 オプション 2：ローカルでのセットアップ

開発環境をローカルにセットアップする場合は、まず[ICP-azle-boilerplate](https://github.com/dacadeorg/ICP-azle-boilerplate/)リポジトリにアクセスします。「Code」ボタンをクリックし、「Local」タブを選択して、リポジトリの URL をコピーします。

ターミナルで、プロジェクトを保存したいディレクトリに移動し、以下のコマンドを実行してリポジトリをローカルマシンにクローンします：

```Bash
git clone https://github.com/dacadeorg/ICP-azle-boilerplate.git
```

次に、以下のコマンドでクローンしたリポジトリのディレクトリに移動します：

```bash
cd ICP-azle-boilerplate
```

最後に、以下のコマンドを実行してプロジェクトの依存関係をインストールします：

```bash
npm install
```

このコマンドにより、プロジェクトに必要なすべての依存関係がインストールされます。インストールが完了したら、キャニスターの構築を開始する準備が整います！

### 2.2 ターミナルの準備

このセクションでは、主要なツールである Node Version Manager (nvm)と DFX をインストールして、ターミナル環境を準備します。以下の手順は、Linux や macOS などの Unix 系システム向けであることに注意してください。Windows システムを使用している場合は、Windows Subsystem for Linux (WSL)をセットアップするか、GitHub Codespaces を使用する必要があります。それでは始めましょう。

1. **Node Version Manager (nvm)のインストール**：nvm は、複数のアクティブな Node.js バージョンを管理できる便利なツールです。nvm を使用すると、異なる Node.js バージョン間の切り替えが簡単になります。このチュートリアルでは、Node.js バージョン 18 を使用します。nvm をインストールするには、ターミナルで以下のコマンドを実行します：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

2. **Node.js バージョン 20 への切り替え**：Node.js は、ブラウザ環境外で JavaScript を実行できるランタイムで、Azle プロジェクトの実行に必要です。nvm を使用して Node.js バージョン 18 に切り替えるには、以下のコマンドを使用します：

```bash
nvm use 20
```

### 2.3.1 DFX のインストール

DFX は Internet Computer 用のコマンドラインインターフェースです。キャニスターの作成、デプロイ、管理のためのツールセットを提供します。

#### 2.3.1 MacOS での DFX のインストール

1. **Homebrew のインストール**: Homebrew は、macOS のパッケージマネージャーで、ソフトウェアのインストールを簡単にします。まだ Homebrew をセットアップしていない場合は、ターミナルで以下のコマンドを実行してインストールします：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. **コマンドラインツールの更新**:
   ターミナルで以下のコマンドを実行します：

```
xcode-select --install
```

3. **Podman のインストール**:

次に、DFX が使用するコンテナ管理ツールである Podman をインストールします。ターミナルで以下のコマンドを実行します：

```bash
brew install podman
```

4. **DFX のインストール**:

```bash
DFX_VERSION=0.16.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

5. **DFX を PATH に追加**:

```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

6. **インストールの確認**:

ターミナルを再起動し、以下のコマンドを実行して DFX がインストールされていることを確認します：

```bash
dfx --version
```

#### 2.3.1 Ubuntu と WSL2 での DFX のインストール

1. **sudo installations の実行**:
   必要な依存関係をインストールするために以下のコマンドを実行します：

```bash
sudo apt-get install podman
```

その後、上記の MacOS インストールガイドのステップ 4 から続けてください。

### 2.3 ボイラープレートコードの理解

準備したボイラープレートコードは、基本的な Azle プロジェクトとして機能します。必要な設定ファイルと依存関係を提供することで、素早く開始できるように設計されています。このコードには、独自のキャニスターを構築する際の参考となる簡単なキャニスターも含まれています。主要なコンポーネントを見ていきましょう：

**1. TypeScript 設定ファイル** (`tsconfig.json`): プロジェクトのルートディレクトリにあり、TypeScript コンパイラのオプションを設定します。以下のような内容です：

```JSON
{
  "canisters": {
    "message_board": {
      "type": "azle",
      "main": "src/index.ts",
      "candid_gen": "http",
      "declarations": {
        "output": ".dfx/dfx_generated/message_board",
        "node_compatibility": true
      },
      "custom": {
        "experimental": true
      }
    }
  }
}
```

この設定ファイルは、キャニスターの重要な側面を DFINITY SDK (dfx)に伝えます。ここでは、Azle フレームワークを使用して`message_board`キャニスターを作成しています。プロパティの内容を見ていきましょう：

- "canisters": この場合、`message_board`キャニスターを定義する親プロパティです。
- "message_board": キャニスターの名前で、対話に使用されます。
- "type": このキャニスターで使用されるフレームワーク/言語を説明します。Rust、Motoko、またはカスタム（Azle 用）が可能です。
- "build": DFX に Azle CLI を使用して`message_board`キャニスターをビルドするよう指示します。
- "candid": DFX を Internet Computer が使用するインターフェース記述言語（IDL）である Candid ファイル（`src/index.did`）に向けます。
- "wasm": DFX を高速で効率的、安全なバイナリ命令形式である、コンパイル済み WebAssembly（WASM）ファイル（`.azle/message_board/message_board.wasm.gz`）に向けます。
- "gzip": WASM ファイルを gzip で圧縮することを示します。
- "metadata": キャニスターに関する追加情報（Candid サービスや CDK（Canister Development Kit）の名前など）を含みます。この情報は DFX がキャニスターと対話する際に使用されます。

**3. Package.json ファイル**: ルートディレクトリにある`package.json`ファイルは、プロジェクトのメタデータと依存関係を管理します。

```JSON
{
  "name": "message_board",
  "version": "0.1.0",
  "description": "Internet Computer message board application",
  "dependencies": {
    "@dfinity/agent": "^0.21.4",
    "@dfinity/candid": "^0.21.4",
    "azle": "0.25.0",
    "express": "^4.18.2",
    "uuid": "^9.0.1"
  },
  "engines": {
    "node": "^20"
  },
  "devDependencies": {
    "@types/express": "^4.17.21"
  }
}
```

このファイルは、プロジェクトの依存関係とスクリプトの管理に重要です。プロジェクトの名前、バージョン、メインファイルなどの情報を含み、プロジェクトに必要な依存関係と devDependencies をバージョンとともにリストアップします：

- `"azle"`: Azle は Internet Computer 上で分散型アプリケーションを構築するためのフレームワークです。キャニスターの作成、デプロイ、対話を容易にするツールと抽象化を提供します。

- `"uuid"`: uuid パッケージは、一意の識別子を作成するための人気のある JavaScript ライブラリです。ユーザー、注文、その他のエンティティの一意の識別子を作成する必要がある場合など、アプリケーションで使用できます。

- `scripts`セクションにはターミナルから実行できるコマンドが含まれ、`engines`セクションにはプロジェクトが互換性のある Node.js のバージョンが指定されています。

## 3. メッセージングキャニスターの構築

このセクションでは、メッセージングキャニスターを作成します。このキャニスターは、データ駆動型アプリケーションの機能に不可欠な基本的な CRUD（作成、読み取り、更新、削除）操作を処理するように設計されています。この機能により、キャニスター内でのデータ管理が効率的に行えます。具体的には、Azle を使用して簡単なメッセージボードアプリケーションを構築し、ユーザーがメッセージの作成、更新、削除、表示を行えるようにします。

TypeScript に慣れている方は、Azle の構文が非常に似ていることに気付くでしょう。TypeScript が初めての方でも心配する必要はありません - 開発を進めながら構文について説明していきます。

### 3.1 ディレクトリとエントリーポイントの設定

ボイラープレートコードをクローンした後、`src`というフォルダと`index.ts`というファイルが確認できます。これがキャニスターのエントリーポイントとなり、ロジックを含むことになります。

### 3.2 依存関係のインポート

まず、スマートコントラクトで使用する複数の依存関係を組み込む必要があります。`index.ts`ファイルの先頭に以下のコードを追加してください：

```typescript
import { v4 as uuidv4 } from "uuid";
import { Server, StableBTreeMap, ic } from "azle";
import express from "express";
```

インポートした各項目の簡単な説明です：

- `v4 as uuidv4`: `uuid`パッケージから`v4`関数をインポートします。これはメッセージの一意の識別子を生成するために使用します。
- `Server`: Azle のクラスで、キャニスターのサーバーを表します。キャニスターの HTTP サーバーを定義・実行できます。
- `StableBTreeMap`: Azle のデータ構造で、メッセージの保存に使用します。キーと値を関連付けるマップで、キャニスター内でメッセージの保存と取得が可能です。
- `ic`: Azle のオブジェクトで、現在時刻の取得を含む Internet Computer の環境へのアクセスを提供します。
- `express`: Node.js 用の人気のある Web フレームワークで、HTTP サーバーの作成に使用します。

これらの依存関係は、一意の識別子の生成、メッセージの保存、キャニスターとの対話用 HTTP サーバーの作成を可能にし、メッセージングキャニスターの構築に不可欠です。

### 3.3 メッセージタイプの定義

キャニスターのロジックを書き始める前に、扱うデータの構造を定義することが重要です。この場合、ボードに投稿される「メッセージ」です。この定義により、スマートコントラクトでメッセージを扱う際の一貫性と明確性が確保されます。`index.ts`ファイルのインポート文の下に以下のコードを追加してください：

```JavaScript
/**
    This type represents a message that can be listed on a board.
*/
class Message {
   id: string;
   title: string;
   body: string;
   attachmentURL: string;
   createdAt: Date;
   updatedAt: Date | null
}
```

このコードブロックは「Message」タイプを定義し、各メッセージは一意の識別子、タイトル、本文、添付ファイルの URL、メッセージの作成時刻と最終更新時刻を示すタイムスタンプで特徴付けられます。

### 3.4 メッセージストレージの定義

メッセージタイプを定義したので、これらのメッセージを保存する場所が必要です。そのために、`index.ts`ファイルのメッセージペイロードタイプの定義の下にストレージ変数を作成します：

```
const messagesStorage = StableBTreeMap<string, Message>(0);
```

このコード行は`messagesStorage`という新しい`StableBTreeMap`を作成します。このマップは各メッセージを一意の識別子と関連付けて保存します。`StableBTreeMap`は Azle のデータ構造で、キャニスター内でデータを永続的かつ効率的に保存・取得する方法を提供します。重要な長期データの保存に理想的で、キャニスターの再デプロイ時にもメッセージが保持されることを保証します。

`new StableBTreeMap`コンストラクタの内容を見てみましょう：

- `StableBTreeMap`: Azle のクラスで、安定した B-tree マップデータ構造を表します。キャニスター内でのデータの保存と取得に使用されます。
- `<string, Message>`: マップのキーと値の型を指定します。この場合、キーは文字列（メッセージの一意の識別子）で、値は`Message`型です。
- `(0)`: マップが保存される安定メモリ領域の ID です。キャニスターの再デプロイ時にマップが保持されることを保証するために使用されます。

**注：StableBTreeMap の使用は必須ではありません。JavaScript の標準ライブラリの Map や StableBTreeMap から選択できます。両方のオプションにはそれぞれ用途がありますが、StableBTreeMap の重要性を強調することが重要です。StableBTreeMap は耐久性を提供し、キャニスターの再デプロイ時にもデータが保持されるため、重要な長期データの保存に適しています。一方、JavaScript の標準ライブラリの Map は再デプロイ時に消去されるため、一時的なデータに理想的です。データの永続性の要件を慎重に検討してデータ構造を選択する必要があります。**

### 3.5 サーバーの作成

次のステップは、キャニスターへのリクエストを処理する HTTP サーバーを作成することです。このサーバーは、受信リクエストの処理と適切なレスポンスの返送を担当します。`messageStorage`定義の下の`index.ts`ファイルに以下のコードを追加してください：

```JavaScript
export default Server(() => {
   const app = express();
   app.use(express.json());
```

Azle の`Server`関数を呼び出してサーバーを初期化します。この関数は`express`アプリのインスタンスを返すコールバックを受け取ります。その後、`express`アプリのインスタンスを作成し、`express.json()`ミドルウェアを使用して JSON ペイロードを含む受信リクエストを解析します。

### 3.6 メッセージ追加機能の作成

続いて、新しいメッセージを追加する機能を作成します。以下のコードを`index.ts`ファイルに入力してください：

```JavaScript
   app.post("/messages", (req, res) => {
   const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};
   messagesStorage.insert(message.id, message);
   res.json(message);
});
```

RESTful API の知識がある方は、この関数が`/messages`エンドポイントへの POST リクエストを処理するように設計されていることがわかるでしょう。コードの内容を見てみましょう：

- `app.post("/messages", (req, res) => {`: この行は`/messages`エンドポイントへの POST リクエストのルートを設定します。リクエスト（`req`）とレスポンス（`res`）オブジェクトを受け取るコールバック関数を取ります。
- `const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};`: この行は、`uuidv4()`で生成された一意の識別子、現在の日時、リクエストボディ（`req.body`）のデータを組み合わせて新しいメッセージオブジェクトを作成します。`...`構文はスプレッド演算子で、`req.body`のプロパティを新しいメッセージオブジェクトにマージできます。
- `messagesStorage.insert(message.id, message);`: この行は新しいメッセージを`messagesStorage`マップに挿入し、`uuidv4()`で生成された一意の識別子と関連付けます。
- `res.json(message);`: この行は新しく作成されたメッセージを含む JSON レスポンスをクライアントに送信します。

この機能により、キャニスターに新しいメッセージを追加できます。

**注：`getCurrentDate`関数はまだ定義されていません。後で定義します。**

### 3.7 メッセージ取得機能の作成

次のステップでは、キャニスターに追加されたすべてのメッセージを取得する機能を作成します。以下のコードを`index.ts`ファイルに追加してください：

```JavaScript
  app.get("/messages", (req, res) => {
   res.json(messagesStorage.values());
});
```

この機能は比較的単純です。`/messages`エンドポイントへの GET リクエストのルートを設定し、`messagesStorage`マップに保存されているすべてのメッセージを含む JSON レスポンスを送信します。この機能により、キャニスターに追加されたすべてのメッセージを取得できます。
`messagesStorage`マップの`values`メソッドを呼び出して、含まれるすべてのメッセージを取得します。このメソッドはマップ内のすべての値の配列を返し、それを JSON レスポンスとしてクライアントに送り返します。

### 3.8 個別メッセージ取得機能の作成

次のステップは、一意の識別子を使用して特定のメッセージを取得できる機能を作成することです。以下のコードを`index.ts`ファイルに追加してください：

```JavaScript
app.get("/messages/:id", (req, res) => {
   const messageId = req.params.id;
   const messageOpt = messagesStorage.get(messageId);
   if ("None" in messageOpt) {
      res.status(404).send(`the message with id=${messageId} not found`);
   } else {
      res.json(messageOpt.Some);
   }
});
```

この機能は、`/messages/:id`エンドポイントへの GET リクエストのルートを設定します。ここで`:id`は取得するメッセージの一意の識別子を表すルートパラメータです。コードの内容を見てみましょう：

- `app.get("/messages/:id", (req, res) => {`: この行は`/messages/:id`エンドポイントへの GET リクエストのルートを設定します。リクエスト（`req`）とレスポンス（`res`）オブジェクトを受け取るコールバック関数を取ります。
- `const messageId = req.params.id;`: この行はルートパラメータからメッセージの一意の識別子を取得します。
- `const messageOpt = messagesStorage.get(messageId);`: この行は一意の識別子を使用して`messagesStorage`マップからメッセージを取得します。`get`メソッドは値が存在する（`Some`）か存在しない（`None`）かの可能性を表す`Opt`型を返します。
- `if ("None" in messageOpt) {`: この行は`messagesStorage`マップでメッセージが見つかったかどうかを確認します。見つからなかった場合、404 ステータスコードと提供された ID のメッセージが見つからなかったことを示すメッセージを送信します。
- `res.json(messageOpt.Some);`: この行は取得したメッセージを含む JSON レスポンスをクライアントに送信します。

この機能により、一意の識別子を使用して特定のメッセージを取得できます。

### 3.9 メッセージ更新機能の開発

次のステップは、既存のメッセージを更新できる機能を作成することです。以下のコードを`index.ts`に追加してください：

```JavaScript
  app.put("/messages/:id", (req, res) => {
   const messageId = req.params.id;
   const messageOpt = messagesStorage.get(messageId);
   if ("None" in messageOpt) {
      res.status(400).send(`couldn't update a message with id=${messageId}. message not found`);
   } else {
      const message = messageOpt.Some;
      const updatedMessage = { ...message, ...req.body, updatedAt: getCurrentDate()};
      messagesStorage.insert(message.id, updatedMessage);
      res.json(updatedMessage);
   }
});
```

この機能は、一意の識別子を使用して特定のメッセージを更新するために、`/messages/:id`への PUT リクエストのルートを設定します。コードの内容を見てみましょう：

- `app.put("/messages/:id", (req, res) => {`: この行は`/messages/:id`エンドポイントへの PUT リクエストのルートを設定します。リクエスト（`req`）とレスポンス（`res`）オブジェクトを受け取るコールバック関数を取ります。
- `const messageId = req.params.id;`: この行はルートパラメータからメッセージの一意の識別子を取得します。
- `const messageOpt = messagesStorage.get(messageId);`: この行は一意の識別子を使用して`messagesStorage`マップからメッセージを取得します。`get`メソッドは値が存在する（`Some`）か存在しない（`None`）かの可能性を表す`Opt`型を返します。
- `if ("None" in messageOpt) {`: 前のセクションと同様に、この行は`messagesStorage`マップでメッセージが見つかったかどうかを確認します。見つからなかった場合、400 ステータスコードと提供された ID のメッセージが見つからなかったことを示すメッセージを送信します。
- `const message = messageOpt.Some;`: この行は`messageOpt`オブジェクトからメッセージを取得します。
- `const updatedMessage = { ...message, ...req.body, updatedAt: getCurrentDate()};`: この行は、既存のメッセージとリクエストボディ（`req.body`）で送信されたデータをマージし、現在の日時を`updatedAt`プロパティとして追加して、更新されたメッセージを作成します。`...`構文はスプレッド演算子で、`req.body`のプロパティを既存のメッセージにマージできます。
- `messagesStorage.insert(message.id, updatedMessage);`: この行は更新されたメッセージを`messagesStorage`マップに挿入し、元のメッセージの一意の識別子と関連付けます。
- `res.json(updatedMessage);`: この行は更新されたメッセージを含む JSON レスポンスをクライアントに送信します。

### 3.10 メッセージ削除機能の作成

キャニスター開発の最後のステップは、メッセージの削除を可能にする機能を作成することです。以下のコードを`index.ts`ファイルの`updateMessage`関数の下に追加してください：

```JavaScript
app.delete("/messages/:id", (req, res) => {
   const messageId = req.params.id;
   const deletedMessage = messagesStorage.remove(messageId);
   if ("None" in deletedMessage) {
      res.status(400).send(`couldn't delete a message with id=${messageId}. message not found`);
   } else {
      res.json(deletedMessage.Some);
   }
});
```

前のセクションと同様に、この機能は一意の識別子を使用して特定のメッセージを削除するために、`/messages/:id`エンドポイントへの DELETE リクエストのルートを設定します。
提供された ID のメッセージを削除するために`messagesStorage`マップの`remove`メソッドを使用します。このメソッドは値が存在する（`Some`）か存在しない（`None`）かの可能性を表す`Opt`型を返します。メッセージが見つかって削除された場合、削除されたメッセージを含む JSON レスポンスをクライアントに送信します。メッセージが見つからなかった場合、400 ステータスコードと提供された ID のメッセージが見つからなかったことを示すメッセージを送信します。

最後に、サーバーが受信リクエストをリッスンできるようにするために、`index.ts`ファイルの最後に以下のコードを追加する必要があります：

```JavaScript
return app.listen();
}); // Server関数を閉じる
```

### 3.11 現在の日時を取得する関数

キャニスターを実行する前に、コードで使用している`getCurrentDate`関数を定義する必要があります。
**注：`getCurrentDate`関数は`Server`関数の外部で定義されます。**

```JavaScript
function getCurrentDate() {
    const timestamp = new Number(ic.time());
    return new Date(timestamp.valueOf() / 1000_000);
}
```

この関数は`ic.time()`メソッドを使用して Internet Computer 環境から現在の時刻を取得します。その後、タイムスタンプを JavaScript の`Date`オブジェクトに変換して返します。この関数は、メッセージの`createdAt`および`updatedAt`プロパティを設定するために使用されます。

### 3.12 最終的なコード

このステップの最後で、`index.ts`ファイルは以下のようになります：

```JavaScript
import { v4 as uuidv4 } from 'uuid';
import { Server, StableBTreeMap, ic } from 'azle';
import express from 'express';

/**
 * `messagesStorage` - it's a key-value datastructure that is used to store messages.
 * {@link StableBTreeMap} is a self-balancing tree that acts as a durable data storage that keeps data across canister upgrades.
 * For the sake of this contract we've chosen {@link StableBTreeMap} as a storage for the next reasons:
 * - `insert`, `get` and `remove` operations have a constant time complexity - O(1)
 * - data stored in the map survives canister upgrades unlike using HashMap where data is stored in the heap and it's lost after the canister is upgraded
 *
 * Brakedown of the `StableBTreeMap(string, Message)` datastructure:
 * - the key of map is a `messageId`
 * - the value in this map is a message itself `Message` that is related to a given key (`messageId`)
 *
 * Constructor values:
 * 1) 0 - memory id where to initialize a map.
 */

/**
 This type represents a message that can be listed on a board.
 */
class Message {
   id: string;
   title: string;
   body: string;
   attachmentURL: string;
   createdAt: Date;
   updatedAt: Date | null
}

const messagesStorage = StableBTreeMap<string, Message>(0);

export default Server(() => {
   const app = express();
   app.use(express.json());

   app.post("/messages", (req, res) => {
      const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};
      messagesStorage.insert(message.id, message);
      res.json(message);
   });

   app.get("/messages", (req, res) => {
      res.json(messagesStorage.values());
   });

   app.get("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const messageOpt = messagesStorage.get(messageId);
      if ("None" in messageOpt) {
         res.status(404).send(`the message with id=${messageId} not found`);
      } else {
         res.json(messageOpt.Some);
      }
   });

   app.put("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const messageOpt = messagesStorage.get(messageId);
      if ("None" in messageOpt) {
         res.status(400).send(`couldn't update a message with id=${messageId}. message not found`);
      } else {
         const message = messageOpt.Some;
         const updatedMessage = { ...message, ...req.body, updatedAt: getCurrentDate()};
         messagesStorage.insert(message.id, updatedMessage);
         res.json(updatedMessage);
      }
   });

   app.delete("/messages/:id", (req, res) => {
      const messageId = req.params.id;
      const deletedMessage = messagesStorage.remove(messageId);
      if ("None" in deletedMessage) {
         res.status(400).send(`couldn't delete a message with id=${messageId}. message not found`);
      } else {
         res.json(deletedMessage.Some);
      }
   });

   return app.listen();
});

function getCurrentDate() {
   const timestamp = new Number(ic.time());
   return new Date(timestamp.valueOf() / 1000_000);
}
```

## 4. キャニスターのデプロイと対話

キャニスターのコーディングが完了したので、デプロイして対話する時が来ました。

### 4.1. ローカル Internet Computer の起動

最初のステップは、ローカルの Internet Computer レプリカを初期化することです。これは本質的に、キャニスターが実行される Internet Computer ブロックチェーンのインスタンスです。他の操作を可能にするために、このレプリカをバックグラウンドで起動します。これは、ターミナルで以下のコマンドを実行することで行えます：

```Bash
dfx start --host 127.0.0.1:8000
```

正常に実行されると、ターミナルには以下のような出力が表示されます。この出力は、Internet Computer のローカルインスタンスが実行中であることを確認し、ローカルインスタンスの状態を監視できるダッシュボードへのリンクも提供します。

```Bash
Running dfx start for version 0.16.1
Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
Dashboard: http://localhost:49846/_/dashboard
```

この出力で、ダッシュボードの URL（<http://localhost:49846/_/dashboard>）は、ローカルレプリカのデバッグと活動の観察に特に役立ちます。

**重要な注意事項**
`messageStorage`に使用しているデータ構造である StableBTreeMap には、注意すべき制約があります。具体的には、StableBTreeMap が初期化されると、その設定は不変となります。これは、キーや値のデータ型やサイズなどの側面を変更できないことを意味します。

StableBTreeMap のこれらの要素に変更を加える必要がある場合は、`--clean`フラグを使用してローカルレプリカを再起動する必要があります。`--clean`フラグは、レプリカを新しく起動し、設定の変更が反映されるようにします。

以下のように実行できます：

```Bash
dfx start --host 127.0.0.1:8000 --clean
```

StableBTreeMap の設定を変更した場合にのみ`--clean`フラグを使用することを忘れないでください。変更が行われていない場合は、通常のローカルレプリカの起動（つまり、`--clean`フラグなし）で十分です。

### 4.2. キャニスターのデプロイ

#### 4.2.1. Codespaces でのキャニスターのデプロイ

Codespaces を使用している場合は、すでに用意されている'canister_urls.py'スクリプトを実行するだけです。このスクリプトはキャニスターをデプロイし、キャニスターの URL を表示します。
以下のコマンドを実行してください：

```Bash
./canister_urls.py
```

最後に、生成されたキャニスターの URL リンクをクリックして対話を開始します。

#### 4.2.2. ローカルホストでのキャニスターのデプロイ

次に、`dfx deploy`コマンドを使用してキャニスターコードをコンパイルし、ローカルネットワークにインストールします：

```Bash
dfx deploy
```

`dfx deploy`コマンドは、Internet Computer ネットワーク上でキャニスターを登録、ビルド、デプロイする便利な方法です。デフォルトでは、プロジェクトの`dfx.json`設定ファイルで定義されているすべてのキャニスターを対象とします。このコマンドは以下のステップを 1 つにまとめています：

1. キャニスターの作成（`dfx canister create --all`）
2. キャニスターのビルド（`dfx build`）
3. キャニスターのインストール（`dfx canister install --all`）

`dfx deploy`コマンドを実行すると、以下のような出力が表示されるはずです：

```Bash
Creating the "default" identity.
WARNING: The "default" identity is not stored securely. Do not use it to control a lot of cycles/ICP.
To create a more secure identity, create and use an identity that is protected by a password using the following commands:
    dfx identity new <my-secure-identity-name> # creates a password protected identity
    dfx identity use <my-secure-identity-name> # uses this identity by default

  - generating new key at /Users/alice/.config/dfx/identity/default/identity.pem
Your seed phrase:
...
```

注：`dfx deploy`コマンドを初めて実行する場合、アプリケーションの登録、ビルド、デプロイに時間がかかる場合があります。システムが作業を行う間、リラックスしてお待ちください。

コマンドが完了すると、キャニスターが正常にデプロイされたことを示すメッセージが表示されます。出力には、Candid インターフェースを通じてバックエンドキャニスターと対話するための URL が含まれます。例：

```Bash
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    message_board: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
```

提供された URL（この場合：http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai）は、message_boardキャニスターのエンドポイントです。このURLはCandidインターフェースにリンクしており、キャニスターのメソッドと対話するためのWebベースのインターフェースを提供します。

このプロセスを示す GIF を見ることができます：
![](https://hackmd.io/_uploads/rk7ViLpL2.gif)

**注：変更後にキャニスターを自動的にリロードさせたい場合は、以下のコマンドを実行できます**

```
AZLE_AUTORELOAD=true dfx deploy
```

メインネットにデプロイする際は、これを false に設定することを忘れないでください。

### 4.3. キャニスターとの対話

キャニスターと対話する方法は主に 2 つあります：コマンドラインインターフェース（CLI）または Web インターフェースです。まずは CLI から始めましょう。

#### 4.3.1. CLI を通じたキャニスターとの対話

CLI を通じてキャニスターと対話するために、`curl`コマンドを使用します。このコマンドを使用して、キャニスターのエンドポイントに HTTP リクエストを送信できます。`curl`コマンドを使用して、メッセージの追加、取得、更新、削除を行います。

始める前に、まずキャニスター ID を取得する必要があります。これは、ターミナルで以下のコマンドを実行することで行えます：

```Bash
dfx canister id <CANISTER_NAME>
```

ここで`<CANISTER_NAME>`はキャニスターの名前です。この場合は`message_board`なので、コマンドは以下のようになります：

```Bash
dfx canister id message_board
```

このコマンドはキャニスターの一意の識別子を返します。キャニスターと対話するにはこの識別子が必要です。

`dfx canister id`コマンドを実行すると、以下のような応答が表示されるはずです：

```Bash
bkyz2-fmaaa-aaaaa-qaaaq-cai
```

この出力は、キャニスターの一意の識別子が`bkyz2-fmaaa-aaaaa-qaaaq-cai`であることを示しています。この識別子を使用してキャニスターと対話します。

これが生成されると、キャニスターの URL は以下のようになります：

```Bash
http://<CANISTER_ID>.localhost:8000
```

ここで`<CANISTER_ID>`はキャニスターの一意の識別子です。この場合は`bkyz2-fmaaa-aaaaa-qaaaq-cai`なので、URL は以下のようになります：

```Bash
http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000
```

キャニスター ID を取得したので、CLI を通じてキャニスターとの対話を開始できます。`curl`コマンドを使用して、キャニスターのエンドポイントに HTTP リクエストを送信します。

**1. メッセージの追加**
まず、先ほど作成したキャニスターファイルから addMessage 関数を呼び出してみましょう。この関数はキャニスターにメッセージを追加します。ターミナルで以下のコマンドを実行してください：

```Bash
curl -X POST http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages -H "Content-type: application/json" -d '{"title": "todo list", "body": "some important things", "attachmentURL": "url/path/to/some/photo/attachment"}'
```

関数の呼び出しが成功すると、以下のような応答が表示されるはずです：

```Bash
{
    "id": "d8326ec8-fe70-402e-8914-ca83f0f1055b",
    "createdAt": "2024-02-09T11:24:32.441Z",
    "title": "todo list",
    "body": "some important things",
    "attachmentURL": "url/path/to/some/photo/attachment"
}
```

この出力は、`addMessage`関数がキャニスターにメッセージを正常に追加したことを示しています。

**2. 単一メッセージの取得**
単一のメッセージを取得するには、`getMessage`関数を呼び出します。

`curl http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b`
ここで`d8326ec8-fe70-402e-8914-ca83f0f1055b`は取得したいメッセージの一意の ID です。

**3. メッセージの更新**
メッセージを更新するには、`updateMessage`関数を使用します。
`curl -X PUT  http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b -H "Content-type: application/json" -d '{"title": "UPDATED TITLE", "body": "some important things", "attachmentURL": "url/path/to/some/photo/attachment"}'`
ここで`d8326ec8-fe70-402e-8914-ca83f0f1055b`は更新したいメッセージの一意の ID です。

**4. メッセージの取得**
すべてのメッセージを取得するには、`getMessages`関数を呼び出します。この場合、関数に引数を渡しません。コマンドは以下の通りです：

`curl http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages`

**5. メッセージの削除**
メッセージを削除するには、`deleteMessage`関数を使用します。`d8326ec8-fe70-402e-8914-ca83f0f1055b`を削除したいメッセージの一意の ID に置き換えてください。コマンドは以下の通りです：

`curl -X DELETE http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b`
ここで`d8326ec8-fe70-402e-8914-ca83f0f1055b`は削除したいメッセージの一意の ID です。

CLI を使用して、メッセージの追加、取得、更新、削除を自分で試してみてください。

## 5. まとめ

このチュートリアルでは、分散型 Azle キャニスターの構築と対話のプロセスについて説明しました。Internet Computer とキャニスターに関する重要な概念を紹介し、プロジェクトのセットアップと基本的な CRUD 機能を持つメッセージ Web3 キャニスターの構築手順をガイドしました。

`dfx deploy`を使用したキャニスターのデプロイ方法と、ターミナルおよび Candid Web インターフェースを通じた対話方法を学びました。`addMessage`、`getMessages`、`updateMessage`、`deleteMessage`などの様々な機能の実行方法と、必要なコマンドの構造と使用方法について説明しました。

このチュートリアルを通じて、Internet Computer 上でアプリケーションを構築するための多くのツールの 1 つである Azle フレームワークの実践的な経験を得ることができました。この知識は、この新興プラットフォーム上でより複雑で堅牢な分散型アプリケーション（dApps）を構築するための足がかりとなります。

探索と実験を続けるにあたり、Internet Computer とその関連技術が幅広い可能性を提供することを忘れないでください。分散型金融（DeFi）プラットフォーム、ソーシャルメディアアプリケーション、分散型自律組織（DAO）、あるいは全く別のものに興味がある場合でも、ここで学んだツールとテクニックは貴重な基盤となるでしょう。

このコースはオープンソースで、MIT ライセンスの下で提供されています。改善の提案がある場合は、プルリクエストを行ってコース内容の改善に貢献することもできます。コースリポジトリは[こちら](https://github.com/dacadeorg/tutorials/blob/main/ICP/typescript-smart-contract-101/content/typescript-smart-contract-101.md)から訪問できます。コミュニティからの貢献と改善を歓迎します。

さらなる学習と同じ志を持つ人々とのつながりのために、以下のリソースの訪問を検討してください：

- **Discord**: ICP コミュニティの Discord に参加して、様々なトピックについて議論し、トラブルシューティングや協力を行いましょう。[リンク](https://discord.com/invite/cA7y6ezyE2)から会話に参加できます。特に、[Typescript チャンネル](https://discord.com/channels/748416164832608337/956466775380336680)で TypeScript に関するより焦点を絞った議論を見つけることができます。
- **フォーラム**: [フォーラム](https://forum.dfinity.org/)は質問をしたり、プロジェクトを共有したり、他の人々の取り組みについて学ぶのに最適な場所です。
- **The Azle Book**: Azle フレームワークの理解を深めるために、[The Azle Book](https://demergent-labs.github.io/azle/)をチェックしてください。このチュートリアルで扱った内容を超えて進むための包括的なガイドです。

これらのプラットフォームには、熱心な個人と有用なリソースが満ちており、分散型 Web への旅をさらに促進することができます。あなたが何を作り出すのか、楽しみにしています！
