<!-- SPDX-License-Identifier: MIT -->
<!-- Copyright (c) 2024 Dacade.org -->

ICP Azle (Typescript) 개발 101 튜토리얼에 오신 것을 환영합니다! 

이 튜토리얼은 인터넷 컴퓨터 프로토콜(ICP) 플랫폼 개발하는 방법을 소개합니다. 분산형 Azle 캐니스터를 구축하고 상호 작용하는 기본 사항을 배우게 됩니다. 이 가이드를 마치면 ICP 플랫폼에 대한 개발을 탄탄하게 이해하고 분산 애플리케이션의 기반을 만들 수 있게 될 것입니다.

아래 튜토리얼을 건너뛰고 바로 코드로 들어가고 싶다면, [Course Repo](https://github.com/dacadeorg/icp-message-board-contract) 저장소에서 최종 코드를 확인하세요.

## **1. 소개**
이 섹션은 튜토리얼 개요, 배울 내용, 필요한 사전 지식 및 사용할 기술 스택을 안내합니다. 또한, 캐니스터 구축에 사용할 TypeScript 프레임워크인 Azle을 소개합니다.

### **1.1 배울 내용**
- 개발 환경 설정하기: Node.js, Node 버전 관리자(nvm), DFX와 같은 ICP 개발에 필요한 도구를 이해하고 설치 및 사용 방법을 배웁니다.
- 보일러플레이트 코드 이해하기: **`tsconfig.json`**, **`dfx.json`**, **`package.json`** 파일을 포함하여 ICP 플랫폼에서 Azle 프로젝트를 시작하는 데 필요한 필수 파일과 구성에 익숙해집니다.
- 메시징 캐니스터 구축 및 상호 작용하기: CRUD(생성, 읽기, 업데이트, 삭제) 작업을 수행하는 간단한 메시징 캐니스터를 구축하는 방법을 배웁니다. 또한 캐니스터의 메소드를 호출하고 응답을 처리하는 방법을 배워 사용자가 메시지를 생성, 업데이트, 삭제 및 조회할 수 있는 간단한 메시지 보드 애플리케이션을 구축할 수 있습니다.

### **1.2 캐니스터란?**
캐니스터는 인터넷 컴퓨터 플랫폼(ICP)에서 사용되는 중요한 개념으로, 소프트웨어 어플리케이션 배포 및 실행을 위한 핵심 구성 요소이자 실행 환경입니다. 코드와 상태를 번들링하여 안전하고 효율적인 실행 환경을 제공합니다. 이러한 특성은 다른 블록체인 플랫폼의 스마트 계약과 유사합니다. 또한, DeFi 플랫폼, 소셜 미디어 애플리케이션, DAO 등과 같은 확장 및 탈중앙화 애플리케이션의 개발을 가능하게 합니다.

### **1.3 Azle이란?**
Azle은 인터넷 컴퓨터(IC)를 위한 TypeScript 캐니스터 개발 키트(CDK)입니다. IC 플랫폼에서 캐니스터를 쉽게 구축하고 배포할 수 있게끔 다양한 라이브러리와 도구를 제공합니다. Azle을 사용하면 개발자는 npm 패키지 및 VS Code 인텔리센스와 같은 TypeScript/JavaScript 기술을 IC에 적용할 수 있습니다. 이 튜토리얼은 Azle을 사용하여 캐니스터를 생성하고 배포하는 방법을 안내합니다.

주목할 만한 점은 Azle이 현재 베타 개발 단계에 있다는 것입니다. 즉, 강력하고 가치 있는 프레임워크를 제공하고 있지만 지속적인 발전으로 인해 상당한 변화를 겪을 수도 있습니다. 때때로 문제가 발생할 수 있으며, 성공적으로 배포되어 지속적으로 운영되고 있는 애플리케이션 사례가 많지 않습니다. 모든 사용자가 [면책 조항](https://demergent-labs.github.io/azle/azle.html#disclaimer)을 읽기를 권장합니다.

Azle에 대해 더 알아보고 싶다면, [Azle 문서](https://demergent-labs.github.io/azle/the_azle_book.html)를 참고하세요.

### **1.4 필수 사항**
사전 코딩 경험은 이 튜토리얼을 따라가기 위해 필수적이지만, 블록체인 경험이 있을 필요는 없습니다. 아래 추천 사전 준비 사항을 참고하세요:

- **TypeScript 및 Node.js에 대한 지식**:  이 튜토리얼은 TypeScript와 Node.js로 애플리케이션을 개발하기 때문에 두 기술에 익숙해야 합니다. TypeScript, Node.js가 처음이라면, 두 기술 기본 튜토리얼을 고려해 보세요.
- **텍스트 에디터**: 코드를 작성하고 편집하려면 텍스트 에디터가 필요합니다.  TypeScript와 Node.js 개발 지원면에서 뛰어나 Visual Studio Code를 추천하지만, 자유롭게 자신에게 맞는 텍스트 편집기를 선택해도 상관 없습니다.
- **Node.js**: Node.js를 사전에 설치할 필요는 없지만 (nvm로 관리하는 방법을 설명 드릴겁니다)DFINITY SDK와 프로젝트 자체를 실행하기 위해서는 Node.js(버전 18 이상)가 필요하다는 점을 알아두세요.

### **1.5 기술 스택**
다음은 우리가 사용할 주요 기술과 도구입니다:

1. 인터넷 컴퓨터 프로토콜(ICP): ICP는 공용 인터넷에서 실행될 수 있는 소프트웨어, 계산 및 데이터 생성을 용이하게 하는 분산 컴퓨팅 플랫폼입니다. 해당 플랫폼에 애플리케이션을 구축할 것입니다.
2. Azle: Azle은 인터넷 컴퓨터 프로토콜(ICP)에서 스마트 계약 또는 "캐니스터"를 생성하고 관리하기 위한 TypeScript 프레임워크입니다.
3. Node.js: Node.js는 웹 브라우저 외부에서 JavaScript를 실행할 수 있는 JavaScript 런타임입니다. 이 튜토리얼에서는 Node.js 버전 18을 사용할 것입니다.
4. Node 버전 관리자(nvm): nvm은 다양한 Node.js 버전을 관리하고 전환할 수 있는 도구입니다. Node.js 환경을 관리하기 위해 사용합니다.
5. DFX: DFX는 인터넷 컴퓨터를 위한 명령줄 인터페이스입니다. Azle 프로젝트를 생성하고 관리하기 위해 이를 사용합니다.
6. TypeScript: TypeScript는 일반 JavaScript로 컴파일되는 JavaScript의 상위 집합입니다. 애플리케이션 코드를 작성하기 위해 이를 사용할 것이며, 프로젝트 구성 파일 중 TypeScript 컴파일러 옵션을 설정하기 위한 파일(**`tsconfig.json`**)이 제공 됩니다.
7. Candid: Candid는 인터넷 컴퓨터가 서비스의 공개 인터페이스(메소드와 입력/출력 타입)를 정의하고 설명하는 데 사용하는 인터페이스 정의 언어(IDL)입니다. 캐니스터의 인터페이스를 정의하기 위해 프로젝트에서 Candid를 사용할 것입니다.

### **1.6 개요**
1. [소개](https://chat.openai.com/c/1feb027a-c619-4d58-bab5-88dd2f8ed530#1-introduction) (5분) - 튜토리얼 개요, 배울 내용, 필수 사항 및 기술 스택을 안내합니다. 또한, 캐니스터를 구축하는 데 사용할 TypeScript 프레임워크인 Azle을 소개합니다.
2. [개발 환경 세팅](https://chat.openai.com/c/1feb027a-c619-4d58-bab5-88dd2f8ed530#2-setup) (15분) - 프로젝트 개발 환경 세팅 과정을 단계별로 안내합니다.
3. [메시징 캐니스터 구축](https://chat.openai.com/c/1feb027a-c619-4d58-bab5-88dd2f8ed530#3-constructing-the-messaging-canister) (45분) - 기본 CRUD(Create, Read, Update, Delete) 기능을 가진 메시징 캐니스터를 구축합니다.
4. [캐니스터 배포 및 상호 작용](https://chat.openai.com/c/1feb027a-c619-4d58-bab5-88dd2f8ed530#4-deploying-and-interacting-with-our-canister) (15분) - 명령줄과 Candid 웹 인터페이스를 통해 메시징 캐니스터와 상호 작용합니다.
5. [결론](https://chat.openai.com/c/1feb027a-c619-4d58-bab5-88dd2f8ed530#5-conclusion) (1분) - 마지막으로, 이 튜토리얼을 마무리하며 계속할 수 있는 몇 가지 아이디어를 제공합니다.

## **2. 개발 환경 세팅**
이 섹션은 프로젝트의 보일러플레이트 코드 세팅 방법을 안내합니다. 이 섹션을 참고하여 개발 환경에 필요한 도구와 의존성(dependencies), 즉 개발 환경 pre-configuration을 세팅 하세요. 섹션을 완료하면 캐니스터를 구축하기 시작할 준비가 될 것입니다.

### **2.1 개발 환경 준비**
개발 환경은 GitHub Codespaces를 사용한 클라우드에서, 또는 독자의 로컬 머신 에서 설정할 수 있습니다.

### 2.1.1 옵션 1: GitHub Codespaces 사용하기
GitHub Codespaces는 브라우저에서 즉시 사용 가능한 완전한 개발 환경을 제공합니다. 로컬 설정의 필요성을 없애주어 학습과 빌딩에 집중할 수 있게 해줍니다.

보일러플레이트와 함께 새 Codespace를 생성하려면 [ICP-azle-boilerplate](https://github.com/dacadeorg/ICP-azle-boilerplate/) 저장소로 이동하세요.

다음, "Code" 버튼을 누른 후 "Create codespace on main"을 선택합니다. 이로서 프로젝트를 시작하는 데 필요한 모든 것이 사전 구성(pre-configuration)된 새로운 Codespace가 생성됩니다.

처음 Codespace를 열 때 이 프로젝트의 의존성(dependencies)이 자동 설치되는 점을 참고하세요. 설치 과정이 몇 분 정도 걸릴 수 있으며, 터미널에서 설치 진행 상황을 확인할 수 있습니다.

### 2.1.2 옵션 2: 로컬 설정

개발 환경을 로컬에 머신에 설정하려면, [ICP-azle-boilerplate](https://github.com/dacadeorg/ICP-azle-boilerplate/) 저장소로 이동하세요. "Code" 버튼을 누른 다음 "Local" 탭을 선택하고 저장소의 URL을 복사하세요.

터미널에서 프로젝트를 저장하고 싶은 디렉토리로 이동한 다음, 아래 명령어를 실행하여 로컬 머신에 저장소를 복제하세요:

```Bash
git clone https://github.com/dacadeorg/ICP-azle-boilerplate.git
```

다음, 복제된 저장소의 디렉토리로 이동하세요:

```bash
cd ICP-azle-boilerplate
```

마지막으로, 아래 명령어를 실행하여 프로젝트의 의존성을 설치하세요:

```bash
npm install
```

이 명령어는 프로젝트에 필요한 모든 의존성을 설치할 것입니다. 설치가 완료되면, 캐니스터를 구축하기 시작할 준비가 된 것입니다!

### **2.2 터미널 준비하기**
이 섹션은 주요 도구인 Node 버전 관리자(nvm)와 DFX를 설치하여 터미널 환경을 준비하는 과정을 안내합니다. Linux 및 macOS와 같은 Unix 계열 시스템을 사용하는 경우에만 적용됩니다. Windows 시스템을 사용하는 경우, Windows Subsystem for Linux(WSL)을 설정하거나, GitHub Codespaces를 사용할 수 있습니다. 시작해 보겠습니다.

1. **Node 버전 관리자(nvm) 설치하기**: Nvm은 여러 개의 활성 Node.js 버전을 관리할 수 있는 유용한 도구입니다. Nvm을 사용하면 다른 Node.js 버전 간에 쉽게 전환할 수 있습니다. 이 튜토리얼에서는 Node.js 버전 18을 사용할 것입니다. Nvm을 설치하려면 터미널에서 아래 명령어를 실행하세요:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

2. **Node.js 버전 20으로 전환하기**: Node.js는 브라우저 환경 외부에서 JavaScript를 실행할 수 있는 JavaScript 런타임이며, Azle 프로젝트를 실행하는 데 필요합니다. Nvm을 사용하여 Node.js 버전 18로 전환하려면 아래 명령어를 사용하세요:
```bash
nvm use 20
```

### 2.3.1 DFX 설치
DFX는 인터넷 컴퓨터(IC)의 커맨드 라인 인터페이스입니다. 캐니스터를 생성, 배포, 관리하기 위한 도구 세트를 제공합니다.

#### 2.3.1 MacOS에 DFX 설치

1. **Homebrew 설치**: Homebrew는 소프트웨어 설치를 단순화하는 macOS용 패키지 관리자입니다. Homebrew를 아직 설치하지 않았다면, 터미널에서 아래 명령을 실행하여 설치하세요:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. **커맨드 라인 도구 업데이트**:
터미널로 이동하여 아래 명령을 실행하세요:
```
xcode-select --install
```

3. **Podman 설치**:

다음, DFX에서 사용할 컨테이너 관리 도구인 Podman을 설치합니다. 터미널에서 아래 명령을 실행하세요:

```bash
brew install podman
```

4. **DFX 설치**:

```bash
DFX_VERSION=0.16.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

5. **DFX를 PATH에 추가**:

```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

6. **설치 확인**:

터미널을 재시작하고 다음 명령을 실행하여 DFX가 설치되었는지 확인하세요:

```bash
dfx --version
```

#### 2.3.1 Ubuntu 및 WSL2에 DFX 설치
1. **sudo 설치 실행**:
   아래 명령어를 실행하여 필요한 종속성(dependencies)들을 설치합니다:

```bash
sudo apt-get install podman

```

그런 다음 위의 MacOS 설치 가이드 4단계부터 계속 진행합니다.


### 2.3 보일러플레이트 코드 이해하기
우리가 준비한 보일러플레이트 코드는 기본적인 Azle 프로젝트 역할을 합니다. 필요한 구성 파일(configuration files)과 의존성(dependencies)을 제공함으로써 빠르게 시작할 수 있도록 도와줍니다. 이 코드에는 캐니스터를 구축하는 데 참조로 사용할 수 있는 간단한 캐니스터가 포함되어 있습니다. 코드의 주요 구성 요소를 살펴봅시다:

**1. TypeScript 구성 파일** (`tsconfig.json`): 프로젝트의 루트 디렉토리에 위치한 이 파일은 TypeScript 컴파일러 옵션을 설정합니다. 아래 코드를 살펴보세요:

```JSON
{
   "compilerOptions": {
      "allowSyntheticDefaultImports": true,
      "strictPropertyInitialization": false,
      "strict": true,
      "target": "ES2020",
      "moduleResolution": "node",
      "allowJs": true,
      "outDir": "HACK_BECAUSE_OF_ALLOW_JS"
   }
}
```

[TypeScript 문서](https://www.typescriptlang.org/tsconfig)에서 보다 자세한 컴파일러 옵션에 대해 확인할 수 있습니다.

**2. DFX 구성 파일** (`dfx.json`): 루트 디렉토리에 위치한 이 파일은 DFX를 구성하고 다음과 같습니다:
```JSON
{
   "canisters": {
      "message_board": {
         "type": "custom",
         "main": "src/index.ts",
         "candid": "src/index.did",
         "candid_gen": "http",
         "build": "npx azle message_board",
         "wasm": ".azle/message_board/message_board.wasm",
         "gzip": true,
         "metadata": [
            {
               "name": "candid:service",
               "path": "src/index.did"
            },
            {
               "name": "cdk:name",
               "content": "azle"
            }
         ]
      }
   }
}
```

이 구성 파일(configuration file)은 DFINITY SDK (dfx)에게 캐니스터의 중요한 정보를 전달합니다. Azle 프레임워크를 사용하여 `message_board` 캐니스터를 생성하고 있습니다. 속성을 분석해 봅시다:

-   "canisters": 캐니스터를 정의하는 부모 속성. 이 경우에는 `message_board`를 정의합니다.
-   "message_board": 캐니스터의 이름, 그것과 상호 작용하는 데 사용됩니다.
-   "type": 이 캐니스터에서 사용되는 프레임워크/언어입니다. Rust, Motoko, 또는 custom (Azle을 위한)이 있습니다.
-   "build": DFX에 Azle CLI를 사용해 `message_board` 캐니스터를 빌드하도록 지시합니다.
-   "candid": DFX를 우리의 Candid 파일 (`src/index.did`)로 가리킵니다. Candid 파일은 Internet Computer에서 사용하는 인터페이스 설명 언어 (IDL)입니다.
-   "wasm": DFX를 우리의 컴파일된 WebAssembly (WASM) 파일 (`.azle/message_board/message_board.wasm.gz`)로 지시합니다. 이는 빠르고 효율적이며 안전한 이진 명령 형식입니다.
-  "gzip": WASM 파일이 gzip을 사용하여 압축되어야 함을 나타냅니다.
- "metadata": 캐니스터에 대한 추가 정보를 포함하고 있으며 DFX가 캐니스터와 상호 작용하는 데 사용됩니다. 예시로는, 캐니스터의 Candid 서비스와 사용된 CDK (Canister Development Kit)의 이름과 같은 정보가  있습니다. 

**3. Package.json 파일**: 루트 디렉토리의 `package.json` 파일은 프로젝트의 메타데이터와 의존성을 관리합니다.

```JSON
  {
   "name": "message_board",
   "version": "0.1.0",
   "description": "Internet Computer message board application",
   "dependencies": {
      "@dfinity/agent": "^0.21.4",
      "@dfinity/candid": "^0.21.4",
      "azle": "^0.20.2",
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

이 파일은 프로젝트의 의존성과 스크립트를 관리하는 데 중요합니다. 이는 프로젝트의 이름, 버전, 주요 파일과 같은 프로젝트에 대한 정보를 포함하고 있습니다. 또한 프로젝트에 필요한 의존성(dependencies)과 devDependencies를 나열하고 그들의 버전을 명시합니다:

- `"azle"`: Azle은 Internet Computer에서 분산 애플리케이션을 구축하기 위한 프레임워크입니다. 캐니스터를 작성하고, 배포하고, 상호 작용하는 것을 더 쉽게 만드는 도구와 추상화를 제공합니다.

- `"uuid"`: uuid 패키지는 고유 식별자를 생성하기 위한 인기 JavaScript 라이브러리입니다. 애플리케이션에서 고유 ID가 필요할 때 사용합니다. 예를들어 사용자, 주문, 또는 다른 엔티티에 대한 고유 식별자를 생성할때 사용합니다.

- `scripts` 섹션은 터미널에서 실행할 수 있는 명령을 포함하고 있으며, `engines` 섹션은 프로젝트가 호환되는 Node.js의 버전을 명시합니다.

## 3. 메시징 캐니스터 구축
이 섹션은 메시징 캐니스터를 작성하는 방법을 안내합니다. 이 캐니스터는 기본적인 CRUD (생성, 읽기, 업데이트, 삭제) 작업을 처리하도록 설계되었으며, 이는 모든 데이터 기반 애플리케이션의 핵심 기능입니다. 이 기능은 캐니스터 내에서 효율적인 데이터 관리를 가능하게 합니다. 조금 더 구체적으로는, Azle을 사용하여 간단한 메시지 보드 애플리케이션을 구축하게 되며, 이를 통해 사용자가 메시지를 생성, 업데이트, 삭제, 보기를 할 수 있게 됩니다.

TypeScript에 익숙하다면 Azle 문법과 매우 비슷하다는 것을 알게 될 것입니다. TypeScript에 처음 접하는 경우에도 걱정할 필요가 없습니다 - 개발을 진행하면서 문법을 안내해 드릴 것입니다.

### 3.1 디렉토리 및 엔트리 포인트 설정

보일러플레이트 코드 클로닝 후, 캐니스터 엔트리 포인트가 되어주고 로직이 포함될 `src`폴더와 `index.ts`라는 파일을 확인할수 있습니다.

### 3.2 의존성 가져오기

시작하기 위해, 우리의 스마트 계약이 사용할 몇 가지 의존성을 포함시켜야 합니다. 아래 코드를 `index.ts` 파일의 상단에 추가하세요:

```typescript
import { v4 as uuidv4 } from 'uuid';
import { Server, StableBTreeMap, ic } from 'azle';
import express from 'express';

```

다음은 각각의 가져온 항목이 하는 일에 대한 간략한 설명입니다:

-   `v4 as uuidv4`:   `uuid` 패키지에서 `v4` 함수를 가져오는 것으로, 우리의 메시지에 대한 고유 식별자를 생성하는 데 사용됩니다.
-  `Server`: Azle에서의 클래스로, 우리 캐니스터의 서버를 나타냅니다. 이를 통해 캐니스터의 HTTP 서버를 정의하고 실행할 수 있습니다.
- `StableBTreeMap`: Azle에서의 데이터 구조로,  메시지를 저장하는 데 사용됩니다. 이것은 키와 값을 연결하는 맵으로, 캐니스터 내에서 메시지를 저장하고 검색할 수 있게 합니다.
- `ic`: Azle에서의 객체로, Internet Computer의 환경에 접근할 수 있게 해줍니다. 이를 통해 현재 시간을 검색하는 기능 등이 포함됩니다.
- `express`: Node.js를 위한 인기 있는 웹 프레임워크로, HTTP 서버를 생성하는 데 사용됩니다.

이러한 의존성들은 메시징 캐니스터를 구축하는 데 중요하며, 고유 식별자를 생성하고, 메시지를 저장하고, 캐니스터와 상호 작용하는 HTTP 서버를 생성하는 데 사용됩니다.

### 3.3 메시지 유형 정의

캐니스터의 로직을 작성하기 시작하기 전에, 작업할 데이터의 구조를 정의하는 것이 중요합니다. 우리의 경우, 이것은 게시판에 게시될 '메시지'입니다. 이 정의는 우리의 스마트 계약에서 메시지를 다룰 때 일관성과 명확성을 보장하는 데 도움이 됩니다. 다음 코드를 import 문 아래의 `index.ts` 파일에 추가하세요:

```JavaScript
/**
    이 유형은 게시판에 나열될 수 있는 메시지를 나타냅니다.
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

위 코드 블록은 'Message' 유형을 정의하며, 각 메시지는 고유 식별자, 제목, 본문, 첨부 URL, 메시지가 생성되고 마지막으로 업데이트된 시간을 나타냅니다.


### 3.4 메시지 저장소 정의

메시지 유형을 정의했으므로, 메시지를 저장할 장소가 필요합니다. `index.ts` 파일속 메시지 페이로드 유형 정의 아래에 저장 변수를 생성합니다: 

```
const messagesStorage = StableBTreeMap<string, Message>(0);

```

위 코드는 `messagesStorage`라는 새로운 `StableBTreeMap`을 생성합니다. 이 맵은 우리의 메시지를 저장하고, 각 메시지를 고유 식별자와 연결합니다. `StableBTreeMap`은 Azle에서 제공하는 데이터 구조로, 캐니스터 내에서 데이터를 저장하고 검색하는 효율적이고 지속 가능한 방법입니다. 중요하고 장기적인 데이터를 저장하는 데 이상적이며, 메시지가 캐니스터 재배포를 거쳐도 지속되도록 보장합니다.


`new StableBTreeMap` 생성자를 살펴봅시다:

-   `StableBTreeMap`: Azle의 클래스로, 안정적인 B-트리 맵 데이터 구조를 나타냅니다. 캐니스터 내에서 데이터를 저장하고 검색하는 데 사용됩니다.
-  `<string, Message>`: 우리의 맵에서 키와 값의 유형을 지정합니다. 이 경우, 키는 문자열(우리의 메시지의 고유 식별자)이고, 값은 `Message` 유형입니다.
-   `(0)`: 우리의 맵이 저장될 안정적인 메모리 영역의 ID입니다. 맵이 캐니스터 재배포를 거쳐도 지속되도록 보장하는 데 사용됩니다.


**참고: StableBTreeMap을 사용하는 것은 필수적이지 않습니다. JavaScript 표준 라이브러리의 Map 또는 StableBTreeMap과 같은 도구를 선택할 수 있습니다. 두 옵션 모두 사용처가 있지만, StableBTreeMap의 중요성은 짚고 넘어가야 합니다. StableBTreeMap 은 내구성을 제공하며, 데이터가 캐니스터 재배포를 거쳐도 지속되도록 보장하므로, 중요하고 장기적인 데이터를 저장하는 데 적합합니다. 반면에, JavaScript 표준 라이브러리의 Map은 재배포 시 지워지므로 임시 데이터에 이상적입니다. 어떤 데이터 구조를 사용할지 결정할 때 데이터 지속성 요구 사항을 신중하게 고려해야 합니다.**

### 3.5 서버 생성

다음 단계는 캐니스터에 대한 요청을 처리할 HTTP 서버를 생성하는 방법을 안내합니다. 이 서버는 들어오는 요청을 처리하고 적절한 응답을 하는 역할을 합니다. `index.ts` 파일속 `messageStorage` 정의 아래에 다음 코드를 추가하세요:

```JavaScript
export default Server(() => {
   const app = express();
   app.use(express.json());
```

Azle에서 `Server` 함수를 호출하여 서버를 초기화합니다. 이 함수는 `express` 앱의 인스턴스를 반환하는 콜백을 받습니다. 그런 다음 `express` 앱의 인스턴스를 생성하고 `express.json()` 미들웨어를 사용하여 JSON 페이로드가 있는 들어오는 요청을 파싱합니다.


### 3.6 메시지 추가 함수 생성

이어서, 새로운 메시지를 추가하는 함수를 생성합니다. `index.ts` 파일에 아래 코드를 입력하세요 :
```JavaScript
   app.post("/messages", (req, res) => {
   const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};
   messagesStorage.insert(message.id, message);
   res.json(message);
});

```

RESTful API에 대한 지식이 있다면, 이 함수가 `/messages` 엔드포인트로의 POST 요청을 처리하도록 설계되었다는 것을 알 수 있습니다. 코드의 분석은 다음과 같습니다:

-   `app.post("/messages", (req, res) => {`: 이 줄은 `/messages` 엔드포인트로의 POST 요청을 위한 라우트를 설정합니다. 이는 요청 (`req`)과 응답 (`res`) 객체를 받는 콜백 함수를 사용합니다.
-  `const message: Message =  {id: uuidv4(), createdAt: getCurrentDate(), ...req.body};`: 이 줄은 `uuidv4()`에 의해 생성된 고유 식별자, 현재 날짜와 시간, 그리고 요청 본문 (`req.body`)에 전송된 데이터를 결합하여 새 메시지 객체를 생성합니다. `...` 구문은 스프레드 연산자로, `req.body`의 속성을 새 메시지 객체에 병합할 수 있게 해줍니다.
- `messagesStorage.insert(message.id, message);`: 이 줄은 새 메시지를  `messagesStorage` 맵에 삽입하고, 이를 `uuidv4()`에 의해 생성된 고유 식별자와 연결합니다.
- `res.json(message);`: 이 줄은 새로 생성된 메시지를 포함하는 JSON 응답을 클라이언트에게 보냅니다.

따라서 이 함수를 통해 캐니스터에 새 메시지를 추가할 수 있습니다.

** 참고: `getCurrentDate` 함수는 아직 정의되지 않았습니다. 곧 정의할 예정입니다.**

### 3.7 메시지 가져오기 함수 생성

다음은 캐니스터에 추가된 모든 메시지를 검색하는 함수를 생성하는 것입니다. `index.ts` 파일에 다음 코드를 입력하세요:

```JavaScript
  app.get("/messages", (req, res) => {
   res.json(messagesStorage.values());
});
```

이 함수는 상대적으로 간단합니다. `/messages` 엔드포인트로의 GET 요청을 위한 라우트를 설정하고,  `messagesStorage` 맵에 저장된 모든 메시지를 포함하는 JSON 응답을 보냅니다. 따라서 이 함수를 통해 캐니스터에 추가된 모든 메시지를 검색할 수 있습니다.
 `messagesStorage` 맵에서 `values` 메서드를 호출하여 그것이 포함하고 있는 모든 메시지를 검색합니다. 이 메서드는 맵에 있는 모든 값을 배열로 반환하며, 이를 JSON 응답으로 클라이언트에게 보냅니다.

### 3.8 메시지 가져오기 함수 생성

다음 단계는 고유 식별자를 통해 특정 메시지를 검색할 수 있는 함수를 생성하는 것입니다. 다음 코드를 `index.ts` 파일에 삽입하십시오:

이 함수는 `/messages/:id` 엔드포인트로의 GET 요청을 위한 경로를 설정하며, 여기서 `:id`는 검색할 메시지의 고유 식별자를 나타내는 경로 매개변수입니다. 다음은 코드에대한 추가 설명 입니다:

-   `app.get("/messages/:id", (req, res) => {`: 이 줄은 `/messages/:id` 엔드포인트로의 GET 요청을 위한 경로를 설정합니다. 이는 요청 (`req`)과 응답 (`res`) 객체를 받는 콜백 함수를 사용합니다.
-  `const messageId = req.params.id;`: 이 줄은 경로 매개변수에서 메시지의 고유 식별자를 검색합니다.
- `const messageOpt = messagesStorage.get(messageId);`: 이 줄은 고유 식별자를 통해 `messagesStorage` 맵에서 메시지를 검색합니다. `get` 메서드는 값이 존재 (`Some`)하거나 없음 (`None`)을 나타내는 `Opt` 타입을 반환합니다.
- `if ("None" in messageOpt) {`: 이 줄은 메시지가 `messagesStorage` 맵에서 찾아졌는지 확인합니다. 찾지 못한 경우, 404 상태 코드와 제공된 ID의 메시지를 찾지 못했다는 메시지를 보냅니다.
- `res.json(messageOpt.Some);`: 이 줄은 검색된 메시지를 포함하는 JSON 응답을 클라이언트에게 보냅니다.

따라서 이 함수는 고유 식별자를 통해 특정 메시지를 검색할 수 있게 합니다.

### 3.9 메시지 업데이트 함수 개발
다음 단계는 기존 메시지를 업데이트할 수 있는 함수를 생성하는 것입니다. 다음 코드를 `index.ts`에 추가하십시오:

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
  

해당 함수는 고유 식별자를 통해 특정 메시지를 업데이트하기 위해 `/messages/:id`로의 PUT 요청을 위한 경로를 설정합니다. 다음은 코드의 분석입니다:

-   `app.put("/messages/:id", (req, res) => {`: 이 줄은 `/messages/:id` 엔드포인트로의 PUT 요청을 위한 경로를 설정합니다. 이는 요청 (`req`)과 응답 (`res`) 객체를 받는 콜백 함수를 사용합니다.
- `const messageId = req.params.id;`: 이 줄은 경로 매개변수에서 메시지의 고유 식별자를 검색합니다.
- `const messageOpt = messagesStorage.get(messageId);`: 이 줄은 고유 식별자를 통해 `messagesStorage` 맵에서 메시지를 검색합니다. `get` 메서드는 값이 존재 (`Some`)하거나 없음 (`None`)을 나타내는 `Opt` 타입을 반환합니다.
- `if ("None" in messageOpt) {`: 이전 섹션과 마찬가지로, 이 줄은 메시지가 `messagesStorage` 맵에서 찾아졌는지 확인합니다. 찾지 못한 경우, 400 상태 코드와 제공된 ID의 메시지를 찾지 못했다는 메시지를 보냅니다.
- `const message = messageOpt.Some;`: 이 줄은 `messageOpt` 객체에서 메시지를 검색합니다.
- `const updatedMessage = { ...message, ...req.body, updatedAt: getCurrentDate()};`: 이 줄은 기존 메시지와 요청 본문 (`req.body`)에 전송된 데이터를 병합하고 현재 날짜와 시간을 `updatedAt` 속성으로 추가하여 업데이트된 메시지를 생성합니다. `...` 구문은 스프레드 연산자로, `req.body`의 속성을 기존 메시지에 병합할 수 있게 합니다.
- `messagesStorage.insert(message.id, updatedMessage);`: 이 줄은 업데이트된 메시지를 원래 메시지의 고유 식별자와 연결하여 `messagesStorage` 맵에 삽입합니다.
- `res.json(updatedMessage);`: 이 줄은 업데이트된 메시지를 포함하는 JSON 응답을 클라이언트에게 보냅니다.

### 3.10 메시지를 삭제하는 함수 생성

캐니스터 개발의 마지막 단계는 메시지 삭제를 허용하는 함수를 생성하는 것입니다. `index.ts` 파일속 `updateMessage` 함수 아래에 다음 코드를 추가하세요:
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
이전 섹션과 마찬가지로, 이 함수는 고유 식별자로 특정 메시지를 삭제하기 위해 `/messages/:id` 엔드포인트로 DELETE 요청을 위한 경로를 설정합니다.
제공된 ID로 메시지를 삭제하기 위해 `messagesStorage` 맵에서 `remove` 메서드를 사용합니다. 이 메서드는 값이 존재(`Some`)하거나 없음(`None`)을 나타내는 `Opt` 타입을 반환합니다. 메시지가 찾아져서 삭제되면, 삭제된 메시지를 포함하는 JSON 응답을 클라이언트에게 보냅니다. 메시지를 찾을 수 없다면, 400 상태 코드와 제공된 ID의 메시지를 찾을 수 없다는 메시지를 보냅니다.

마지막으로, 서버가 들어오는 요청을 수신할 수 있도록 하려면, `index.ts` 파일의 끝에 다음 코드 줄을 추가해야 합니다:
```JavaScript
return app.listen();
}); // to close the Server function.
```

### 3.11 현재 날짜 가져오기 함수

캐니스터를 실행하기 전에, 우리의 코드에서 사용하고 있는 `getCurrentDate` 함수를 정의해야 합니다.
**참고: `getCurrentDate` 함수는 `Server` 함수 외부에서 정의됩니다.**

```JavaScript
function getCurrentDate() {
    const timestamp = new Number(ic.time());
    return new Date(timestamp.valueOf() / 1000_000);
}
```

이 함수는 `ic.time()` 메서드를 사용하여 Internet Computer 환경에서 현재 시간을 검색합니다. 그런 다음 타임스탬프를 JavaScript `Date` 객체로 변환하고 반환합니다. 이 함수는 메시지의 `createdAt` 및 `updatedAt` 속성을 설정하는 데 사용됩니다.


### 3.12 최종 코드
이 단계를 완료하면, `index.ts` 파일은 다음과 같습니다:

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

## 4. 캐니스터 배포 및 상호 작용

캐니스터의 코딩을 완료했으므로 이제 배포(deploy)하고 상호 작용할 차례입니다.

### 4.1. 로컬 인터넷 컴퓨터 시작

첫 번째 단계는 로컬 인터넷 컴퓨터 복제본을 초기화하는 것으로, 이는 기본적으로 우리의 캐니스터가 실행될 인터넷 컴퓨터 블록체인의 인스턴스입니다. 우리는 이 복제본을 백그라운드에서 시작하여 다른 작업을 허용할 것입니다. 터미널에서 다음 명령을 실행하세요:

```Bash
dfx start --host 127.0.0.1:8000
```

실행이 성공적으로 되었다면 터미널에 아래와 유사한 출력이 표시됩니다. 아래 출력값은 로컬 인터넷 컴퓨터 인스턴스가 실행 중임을 확인하고, 로컬 인스턴스의 상태를 모니터링할 수 있는 대시보드 링크도 제공합니다.

```Bash
Running dfx start for version 0.16.1
Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
Dashboard: http://localhost:49846/_/dashboard
```

대시보드 링크 (<http://localhost:49846/_/dashboard>)는 로컬 복제본의 활동을 디버깅하고 관찰하는 데 특히 도움이 될 것입니다.


**중요 참고 사항**
`messageStorage`에 사용되는 데이터 구조인 StableBTreeMap에 대해 알아 두어야 할 특정 제약 사항은 다음과 같습니다. StableBTreeMap이 초기화되면 구성(configuration)이 불변하게 됩니다. 이 제약은 키나 값의 데이터 유형이나 크기와 같은 측면에 대한 변경을 할 수 없다는 것을 의미합니다.

StableBTreeMap의 이러한 요소에 대한 변경이 필요한 경우, `--clean` 플래그를 사용하여 로컬 복제본을 다시 시작해야 합니다. `--clean` 플래그는 복제본이 새로 시작되도록 보장하며, 이를 통해 구성 변경이 적용될 수 있습니다.

아래는 플래그를 사용하는 방법입니다:

```Bash
dfx start --host 127.0.0.1:8000 --clean
```

`--clean` 플래그는 StableBTreeMap의 구성에 변경을 가한 경우에만 사용한다는 점을 꼭 기억하세요. 변경 사항이 없는 경우, 로컬 복제본을 정상적으로 시작(즉, `--clean` 플래그 없이)하시면 됩니다.

### 4.2. 캐니스터 배포하기

#### 4.2.1. Codespaces에서 캐니스터 배포하기
Codespaces에서는 이미 준비된 'canister_urls.py' 스크립트를 실행하기만 하면 됩니다. 이 스크립트는 캐니스터를 배포하고 캐니스터의 URL을 출력합니다.
다음 명령을 실행합니다:
```Bash
./canister_urls.py
```

마지막으로, 생성된 캐니스터의 URL 링크를 클릭하여 상호 작용합니다.

#### 4.2.2. Localhost에서 캐니스터 배포하기
다음으로, 캐니스터 코드를 컴파일하고 `dfx deploy` 명령을 사용하여 로컬 네트워크에 설치합니다:

```Bash
dfx deploy
```

`dfx deploy` 명령은 Internet Computer 네트워크에 캐니스터를 등록, 빌드, 배포하는 편리한 방법입니다. 기본적으로 프로젝트의 `dfx.json` 설정 파일에 정의된 모든 캐니스터를 대상으로 합니다. 이 명령은 다음 단계를 하나로 결합합니다:

1.  캐니스터 생성 (`dfx canister create --all`)
2.  캐니스터 빌드 (`dfx build`)
3.  캐니스터 설치 (`dfx canister install --all`)

`dfx deploy` 명령을 실행하면 다음과 유사한 출력값이 나와야 합니다:
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

참고: `dfx deploy` 명령을 처음 실행하는 경우, 애플리케이션을 등록, 빌드, 배포하는 데 시간이 걸릴 수 있습니다. 시스템이 작업을 수행하는 동안 휴식을 취하십시오.

명령이 완료되면, 캐니스터의 성공적인 배포를 나타내는 메시지가 나타납니다. 출력값에는 Candid 인터페이스를 통해 백엔드 캐니스터와 상호 작용하는 URL이 포함됩니다. 예를 들면:
```Bash
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    message_board: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
```

제공된 URL (해당 경우: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai)은 message_board 캐니스터의 엔드포인트입니다. 이 URL은 웹 기반 인터페이스를 제공하는 Candid 인터페이스에 연결됩니다.

아래 이 과정을 보여주는 GIF를 살펴보세요:
![](https://hackmd.io/_uploads/rk7ViLpL2.gif)


**참고: 캐니스터가 변경 후 자동으로 리로딩되길 원한다면, 다음 명령을 실행하세요**

```
AZLE_AUTORELOAD=true dfx deploy
```

메인넷에 배포할 때에는 이를 false로 설정하세요.

### 4.3. 캐니스터와 상호 작용하기
캐니스터와 상호 작용하는 두 가지 주요 방법은 커맨드 라인 인터페이스 (CLI)또는 웹 인터페이스가 있습니다. 먼저 CLI를 살펴봅니다.

#### 4.3.1. CLI를 통해 캐니스터와 상호 작용하기
CLI를 통해 우리 캐니스터와 상호 작용하기 위해서는,  `curl` 명령을 사용합니다. 이 명령을 사용하면 캐니스터의 엔드포인트에 HTTP 요청을 할 수 있습니다. `curl` 명령을 사용하여 메시지를 추가, 검색, 업데이트, 삭제합니다.

시작하기 전, 다음 명령을 터미널에서 실행함으로써 캐니스터 ID를 불러옵니다.

```Bash
dfx canister id <CANISTER_NAME>
```
여기서 `<CANISTER_NAME>`은 캐니스터의 이름입니다. 해당 캐니스터 이름은`message_board`이므로 명령은 다음과 같을 것입니다:
```Bash
dfx canister id message_board
```

이 명령은 캐니스터의 고유 식별자를 반환합니다. 이 식별자가 필요하다면 캐니스터와 상호 작용할 수 있습니다.

`dfx canister id` 명령을 실행한 후에는 다음과 유사한 응답을 받아야 합니다:
```Bash
bkyz2-fmaaa-aaaaa-qaaaq-cai
```

이 출력은 캐니스터의 고유 식별자가 `bkyz2-fmaaa-aaaaa-qaaaq-cai`임을 나타냅니다. 이 식별자를 사용하여 캐니스터와 상호 작용할 것입니다.

생성된 식별자를 통해, 캐니스터의 URL은 다음과 같습니다
```Bash
http://<CANISTER_ID>.localhost:8000
``` 
여기서 `<CANISTER_ID>`는 캐니스터의 고유 식별자입니다. 우리의 경우, 고유 식별자는 `bkyz2-fmaaa-aaaaa-qaaaq-cai`이므로 URL은 다음과 같습니다.
```Bash
http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000
```

이제 캐니스터 ID값을 알게 됨으로써, CLI를 통해 캐니스터와 상호 작용을 시작할 수 있습니다. `curl` 명령을 사용하여 캐니스터의 엔드포인트에 HTTP 요청을 합니다.

**1. 메시지 추가**
먼저, 이전에 만든 캐니스터 파일에서 addMessage 함수를 호출해봅시다. 이 함수는 캐니스터에 메시지를 추가합니다. 터미널에서 다음 명령을 실행하세요:
```Bash
curl -X POST http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages -H "Content-type: application/json" -d '{"title": "todo list", "body": "some important things", "attachmentURL": "url/path/to/some/photo/attachment"}'
```

함수 호출이 성공하면, 다음과 유사한 응답을 받습니다:

```Bash
{
    "id": "d8326ec8-fe70-402e-8914-ca83f0f1055b",
    "createdAt": "2024-02-09T11:24:32.441Z",
    "title": "todo list",
    "body": "some important things",
    "attachmentURL": "url/path/to/some/photo/attachment"
}
```
위 출력값은 `addMessage` 함수가 성공적으로 캐니스터에 메시지를 추가했음을 나타냅니다.

**2. 단일 메시지 검색**
단일 메시지를 검색하려면, `getMessage` 함수를 호출하세요.

```curl http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b```
여기서 `d8326ec8-fe70-402e-8914-ca83f0f1055b`는 검색하려는 메시지의 고유 ID입니다.

**3. 메시지 업데이트**
메시지를 업데이트하려면, `updateMessage` 함수를 사용하세요.
```curl -X PUT  http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b -H "Content-type: application/json" -d '{"title": "UPDATED TITLE", "body": "some important things", "attachmentURL": "url/path/to/some/photo/attachment"}'```
여기서 `d8326ec8-fe70-402e-8914-ca83f0f1055b`는 업데이트하려는 메시지의 고유 ID입니다.

**4. 메시지 검색**
모든 메시지를 검색하려면, `getMessages` 함수를 호출하세요. 이 경우, 우리는 함수에 어떤 인자도 전달하지 않습니다. 다음은 명령입니다:

```curl http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages```

**5. 메시지 삭제**
메시지를 삭제하려면, `deleteMessage` 함수를 사용하세요. `79daba82-18ce-4f69-afa1-7b3389368d1f`를 삭제하려는 메시지의 고유 ID로 대체하세요. 다음은 명령입니다:

```curl -X DELETE http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:8000/messages/d8326ec8-fe70-402e-8914-ca83f0f1055b```
여기서 `d8326ec8-fe70-402e-8914-ca83f0f1055b`는 삭제하려는 메시지의 고유 ID입니다.

CLI를 사용하여 메시지를 추가, 검색, 업데이트, 삭제해 보세요.

CLI에 대해 다루었으니, 이제 웹 인터페이스로 넘어가겠습니다.

#### 4.3.2. **웹 인터페이스를 통해 메시지 가져오기**
웹 인터페이스를 사용하여 방금 생성한 메시지를 가져옵니다. 캐니스터 파일에서 `getMessage` 함수를 호출해봅시다.

방금 추가한 메시지를 보려면, "dfx deploy" 명령을 실행했을 때 생성된 candid 인터페이스를 사용할 수 있습니다.

다음과 같이 보일 것입니다:
```
http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
```

**참고: Codespaces에서는 웹 인터페이스가 때때로 제대로 표시되지 않을 수 있습니다. 그런 경우에는 CLI를 사용하여 캐니스터와 상호 작용해야 합니다.**

인터페이스에서 `getMessage` 함수를 눌러줍니다. 그런 다음, 검색하려는 메시지의 ID를 입력합니다. 이 경우에는 방금 생성한 메시지를 검색하므로, `addMessage` 함수 응답에서 받은 ID를 입력해야 합니다. 참고로, 여러분의 메시지 ID는 여기에 제공된 예제와 다를 것입니다.

ID를 입력한 후 `Call` 버튼을 클릭합니다. 제대로 수행하면 다음과 유사한 응답이 출력됩니다:

```Bash
(
  variant {
    Ok = record {
      id = "79daba82-18ce-4f69-afa1-7b3389368d1f";
      attachmentURL = "url/path/to/some/photo/attachment";
      title = "message list";
      updatedAt = null;
      body = "some important things";
      createdAt = 1_685_568_853_915_736_000 : nat64;
    }
  },
)
```

웹 인터페이스와 상호 작용하는 이 과정을 보여주는 GIF를 볼 수 있습니다:
![](https://hackmd.io/_uploads/HJNcuITI3.gif)

이제 CLI에서 사용한 것과 동일한 함수들을 웹 인터페이스를 통해 상호 작용할 수 있습니다.

작업 세션을 마치려면 터미널에서 다음 명령을 실행하여 로컬 Azle 복제본을 중지할 수 있습니다:

```Bash
dfx stop
```

이 명령은 로컬 복제본을 종료합니다. 작업을 마친 후에는 항상 시스템 리소스를 확보하기 위해 로컬 복제본을 중지하세요.

## 5. 결론
이 튜토리얼에서는 분산 Azle 캐니스터를 구축하고 상호 작용하는 과정을 안내했습니다. 인터넷 컴퓨터와 캐니스터와 관련된 핵심 개념을 소개하고 프로젝트를 설정하고 기본 CRUD 기능을 가진 메시지 web3 캐니스터를 구축하는 단계를 알아봤습니다.

`dfx deploy`를 사용하여 캐니스터를 배포하는 방법과 터미널과 Candid 웹 인터페이스를 통해 캐니스터와 상호 작용하는 방법을 배웠습니다. `addMessage`, `getMessages`, `updateMessage`, `deleteMessage`와 같은 다양한 함수를 실행하는 방법을 살펴보고, 필요한 명령어의 구조와 사용법을 논의했습니다.

Azle 프레임워크를 직접 사용해 보면서 인터넷 컴퓨터에서 애플리케이션을 구축하기 위한 많은 도구 중 하나에 대한 경험을 쌓았습니다. 이 지식은 이 신흥 플랫폼에서 더 복잡하고 견고한 분산 애플리케이션 (dApps)을 구축하기 위한 탄탄한 발판이 될 것입니다.

탐색과 실험을 계속하면서 인터넷 컴퓨터(IC)와 관련 기술이 다양한 가능성을 제공 한다는 점을 기억하세요. 분산 금융 (DeFi) 플랫폼, 소셜 미디어 애플리케이션, 분산 자율 조직 (DAOs), 또는 완전히 다른 것에 관심이 있든, 여기서 배운 도구와 기법은 소중한 기반이 될 것입니다.

본 강좌는 오픈 소스이며 MIT 라이선스에 따라 라이선스가 부여됩니다. 개선 제안이 있으면 풀 요청을 통해 강좌 내용을 개선하는 데 기여할 수도 있습니다. 이는 강좌 저장소 [여기](https://github.com/dacadeorg/tutorials/blob/main/ICP/typescript-smart-contract-101/content/typescript-smart-contract-101.md)를 방문하여 요청 할 수 있습니다. 커뮤니티의 모든 기여와 개선을 환영합니다.

추가 학습 및 같은 생각을 가진 사람들과 연결하려면 아래 리소스를 방문해 보세요:

- **Discord**: Discord에서 ICP 커뮤니티에 가입하여 다양한 주제를 논의하고 문제를 해결하며 협업하세요. [링크](https://discord.com/invite/cA7y6ezyE2)를 따라 대화에 참여하세요. 특히, 여기에서 Typescript에 위주의 토론을 찾을 수 있습니다: [Typescript Channel](https://discord.com/channels/748416164832608337/956466775380336680).
- **Forum**: [포럼](https://forum.dfinity.org/)은 질문 및 프로젝트를 공유, 다른 사람들이 무엇을 하고 있는지 배우는 좋은 장소입니다.
- **The Azle Book**: Azle 프레임워크에 깊은 이해를 돕는 [The Azle Book](https://demergent-labs.github.io/azle/)을 확인하세요. 이 튜토리얼에서 다룬 것을 넘어서는 보다 포괄적인 내용을 다루는 가이드입니다.

위 플랫폼들은 열정적인 개인들과 분산 웹으로의 여정을 더욱 촉진할 수 있는 유용한 리소스로 가득 차 있습니다. 당신이 만들어낼 것이 기대됩니다!