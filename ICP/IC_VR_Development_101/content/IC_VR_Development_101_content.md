<img src="https://i.imgur.com/Qj5n7iK.png)" width="200px"/>

# ICVR – Virtual Reality (VR) on the Internet Computer Protocol (ICP)

Welcome to this tutorial on creating immersive VR spaces on the ICP platform using the ICVR open-source framework. This guide is crafted to introduce you to the process of setting up your development environment and mastering the fundamentals of building an interactive VR experience with the Unity game engine. By the end of this tutorial, you will possess a robust foundation in developing unique VR spaces tailored for the ICP platform.

Jump straight into the code and start building 👉
https://github.com/willguest/ICVR

Follow ICVR twitter 👉
https://twitter.com/ICVRhub


### Visit ICVR spaces made by others:

#### 🏝️The Island Collective 👉 https://6ajqg-5qaaa-aaaak-qb6uq-cai.raw.ic0.app/

#### 🥇[ICVR Metaverse competition](https://twitter.com/demo_democorp/status/1781678373959536813) (April 2024) winners 👇


 👉 https://v2wed-bqaaa-aaaap-qhe6a-cai.icp0.io/

👉 https://vuujl-2aaaa-aaaap-qhe7a-cai.icp0.io/

<br clear>

## 1. Introduction
This section will provide an overview of the tutorial, including what you will learn and the prerequisites.
### 1.1 What you'll learn:
- Unique features of the ICVR open-source framework.
- Set up your development environment for building VR on ICP.
- Build a unique VR experience using Unity game engine.
- Deploy a VR experience on the local network and ICP canister.
### 1.2 Prerequisites
-	Basic understanding of how Unity game engine works.

    Learn Unity basics 👉 📺 https://www.youtube.com/watch?v=E6A4WvsDeLE
-	Be familiar with the terminal and command line interfaces.
-	Basic understanding of how the ICP ecosystem works.
-	Coding knowledge is not essential.
-	VR headset is not essential. 
### 1.3 Overview
1. [Introduction](#1-introduction) (5min) - This section will provide you with an overview of the tutorial, including what you will learn and the prerequisites.
   
2. [ICVR Unity setup](#2-icvr-unity-setup) (20min) – This section will guide you through the necessary steps to set up the ICVR framework in Unity game engine.
   
3. [Building unique VR experience](#3-building-unique-vr-experience) (90min) –  In this section you will learn how to build a unique VR experience using Unity game engine.

4. [Deploying VR experience on the ICP canister](#4-deploying-vr-experience-on-the-icp-canister) (40min) - In this section you will learn how to set up the development environment for ICVR-canister template and how to deploy VR experience on the ICP canister.


5. [Conclusions](#5-conclusions) (5min) - Finally we will conclude this tutorial and provide you with some ideas on how to continue.


<br clear>

## 2. ICVR Unity setup
This section will guide you through the process of integrating the ICVR framework into the Unity game engine. By the end of this section, you will have successfully configured ICVR package within your Unity environment, preparing you to start building VR experiences.

We will approach this task in 3 steps:
- Unity Hub installation.
- Unity 2020 LTS installation.
- ICVR framework integration.

<br clear>

### 2.1 Unity Hub installation

#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=F4h1cs2dQuw
#### 📝 Written Tutorial 👇
1.	Visit the [Official Unity Website](https://unity.com/unity-hub) and download the Unity Hub installer.
2.	Locate the executable file in your system's downloads folder and run it.
3.	When prompted, confirm to make changes to your system by clicking "Yes."
4.	Accept the Licence Agreement by clicking "I Agree."
5.	Choose the installation location on your drive that has sufficient memory space.
6.	The installation process will begin and should complete in a few minutes.
7.	Click "Finish" once the installation is complete.
8.	Unity Hub is now installed on your system and the icon will be created on your desktop.

<br clear>

### 2.2 Unity 2020 LTS installation

#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=pZ37MnavJMQ
#### 📝 Written Tutorial 👇
1.	Open Unity Hub.
2.	Switch to the “Installs” tab and click “Install Editor”.
3.	Switch to the "Archive" tab and click “Download Archive”.
4.	Accept the License Agreement by clicking "I Agree".
5.	Click the banner “Download LTS Releases”.
6.	Find version 2020.3.48f, download it and install it.
7.	In Unity Hub switch to the “Installs” tab and click “Locate”.
8.	Find the executable for Unity 2020.3.48f1 on your hard drive and run it.


<br clear>

### 2.3 Setting up ICVR framework in Unity

#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=z25VNuJPlNw
#### 📝 Written Tutorial 👇
1.	Open Unity Hub.
2.	Switch to the “Projects” tab and click “New Project”.
3.	Choose “3D Sample Scene (UPR).
4.	Name your project and disable “Connect to Unity Cloud”.
5.	Click “Create project” and wait until it finishes loading.
6.  Navigate to "File", then Build Settings.
7.  Change the platform to WebGL and download and install the WebGL module.
8.	Download ICVR_Core.unitypackage from the ICVR 1.1.0 release. 
👉 https://github.com/willguest/ICVR/releases
9.	Go back to Unity, click “Assets”, then "Import Package", and select "Custom Package".
10.	Import ICVR_Core package.
11.	Navigate to “Window”, then "WebXR", then "ICVR Setup".
12.	Click "Set to WebGL".
13.	Install packages Newtonsoft Json and WebXR Export.
14.	Enable ICVR settings.
15.	Tick each box one by one, then click “Apply All".
16.	Navigate to Package Manager and find De-Panther WebXR Export.
17.	Update WebXR Export to version 0.18.0.
18.	Navigate to Project Settings, then XR Plug-in Management.
19.	Enable WebXR Export (tick the box).
20.	Open the "TestScene" (Main Assets folder / ICVR / Scenes).
21.	You are now ready to build your first VR experience.

<br clear>




## 3. Building a unique VR experience
Unity stands out as a powerful platform for VR development, offering a wide range of tools and features that facilitate the creation of immersive VR environments. This section will equip you with the knowledge and skills necessary to leverage Unity's capabilities to their fullest, ensuring that your ICVR project meets expectations in terms of quality and uniqueness. 

<br clear>


### 3.1	Build a VR space using ICVR pre-made scenes and prefabs
In this video tutorial, you'll discover how to quickly construct a basic VR scene by leveraging ICVR's pre-designed scenes and prefabs. The process is straightforward:
- Download ICVR_DLC.unitypackage from the ICVR 1.1.0 release. 
👉 https://github.com/willguest/ICVR/releases
- Import a pre-made ICVR scene, which forms the backbone of your VR environment.
- Use the ICVR prefabs by simply dragging and dropping them into your scene.

This approach allows for quick asset placement and scene assembly and will help you to understand the fundamentals of building VR environments in Unity.


#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=5cmZofpvEJo

<br clear>


### 3.2	Implement game assets from the Unity Asset Store
The Unity Asset Store is an excellent resource for obtaining free game assets that can be used to enhance your VR experience. In this tutorial, you'll learn how to integrate these assets into your VR space.
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=Uk5DBQydM0Y

<br clear>

### 3.3	Build a basic unique VR environment
In this tutorial you will learn how to build unique VR environment by:
- forming terrain using Unity Terrain Tools.
- implementing objects into the scene.
- optimizing colliders.
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=p119MLBpGnA

<br clear>

### 3.4	Design simple interactive game objects
In this lesson you will learn how to design simple interactive objects that will respond when coming into contact with your avatar.
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=qbRcSkTJIrg

<br clear>

### 3.5	Design a custom functionality
In this lesson, we will explore designing custom functionality through one of Unity's most powerful features: Triggers. We will learn how to create triggers, attach them to objects, and program them to respond to avatar interactions.
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=XBFzBAvGtTQ

<br clear>

### 3.6	Performance optimization - Make your VR space run smoothly
Performance optimization is crucial in VR development within Unity. Without proper optimization, VR applications can suffer from lag, stuttering, or even cause motion sickness among users. These issues can significantly detract from the overall quality of the VR experience, leading to lower engagement and satisfaction levels among users. Therefore, understanding and implementing performance optimization techniques is vital for developing successful and enjoyable VR applications in Unity. 

In this tutorial you will learn the most common performance optimization techniques tailored to the ICVR framework.
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=WLadDC7kclA
<br clear>




<br clear>
<br clear>


## 4. Deploying your VR experience on the ICP canister
This section will guide you through deploying your VR experience onto the Internet Computer canister. This process involves:
-	setting up a development environment for the ICVR-canister template.
-	deploying your VR project on the local network.
-	setting up the Internet Identity and cycles wallet canister in DFX.
-	deploying your VR project on the ICP canister (live network).
-	accessing your VR project from the VR headset browser.


<br clear>

### 4.1 Set up a development environment for ICVR-canister template 

<br clear>

#### 4.1.1 ICVR-canister template requirements

- [Node.js](https://nodejs.org/en/) version 20 LTS or later.

- [DFX](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove) version 0.19 or later.

<br clear>

#### 4.1.2	Set up for Mac users
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=g3N1cVeIbCY
#### 📝 Written Tutorial 👇
1.	Go to the Node website and download the Long Term Support(LTS) version of node (20 LTS or later): https://nodejs.org/en/
2.	To install DFX version 0.19 open up your Terminal app and copy/paste the following command:
```bash
    DFX_VERSION=0.19 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```
3.	Download the latest version of VSCode from here: https://code.visualstudio.com/
4.	Install the Motoko language extension in VSCode: https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko
5.	Create a folder called ic-projects on your computer.
6.	Open the Terminal and navigate to the ic-projects folder.
7.	Now run the following command in the terminal:
```bash
dfx new hello
```
8.	Open up VSCode and go to File → Open and select the hello project in the ic-projects folder.
9.	Open up a Terminal inside VSCode by going to Terminal → New Terminal
10.	Paste the following command in the VSCode terminal:
```bash
dfx start
```
11.	Open a second Terminal in VSCode and paste the following command:
```bash
dfx deploy
```
12.	Once step 11 is complete, run the following command:
```bash
npm start
```
13.	Test your DApp locally at http://localhost:8080/
<br clear>
<br clear>

#### 4.1.3	Set up for Windows users
#### Requirements:
- Windows 10 or higher. Build 19041.xxx or higher.
- 64-bit machine (System type x64 based PC)
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=zrlfT3pk4gk
#### 📝 Written Tutorial 👇

1.	In your Start menu find the Windows PowerShell and run it as the Administrator.
2.	WSL is the Windows Subsystem for Linux and it will allow us to run command line commands in Windows. Here’s more info from Microsoft: 
https://docs.microsoft.com/en-us/windows/wsl/install
3.	To install WSL, paste this command into PowerShell and press Enter:
```bash
wsl --install
```
4.	Restart your computer.
5.	You will be prompted to set up a username and password for Ubuntu.
6.  Be sure to note both pieces of information, as you’ll need them later on. When you type your password, it will not be displayed, so ensure you type it correctly.
7.	To confirm that everything worked correctly, type the following command into PowerShell: 
```bash
wsl --list -–verbose
```
8.	You should see this output:

    <img src="https://i.imgur.com/fymuWvd.png">

9.	Download and install the latest version of VSCode:
https://code.visualstudio.com/
10.	Install the Motoko language extension (by Dfinity) in VSCode
https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko
11.	Install the Remote WSL extension:
https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl
12.	Open Ubuntu from the Start menu
13.	Type the following command to install homebrew: 
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
14. Alternatively copy it from the homebrew website https://brew.sh/
15.	The installer will provide instructions for adding brew to the PATH. Copy the listed commands and run them one by one in Ubuntu.

    <img src="https://i.imgur.com/xHxTfUy.png">

16.	Run the command:
```bash
sudo apt-get install build-essential
```
17.	Check the brew version
```bash
brew --version
```
18.	Install node using homebrew with the following command:
```bash
brew install node@20
```
19.	Check the node version.
```bash
node --version
```
20.	Open Ubuntu from the Start menu.
21.	Install DFX by running the following command: 
```bash
DFX_VERSION=0.19 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```
22. After DFX is installed, it will provide the installation path. In my case, it was installed in /home/magic/dfx. Copy this path and replace it in the command below:
```bash
export PATH=$PATH:<REPLACE WITH YOUR INSTALLATION PATH>
```
23. In my case, it would be:
```bash
export PATH=$PATH:/home/magic/dfx
```
24. Paste the formatted command and click Enter.
25.	Check that it has been added by running:
```bash
echo "${PATH//:/$'\n'}"
```
26.	Check that dfx has been successfully installed with the following command:
```bash
dfx --version
```
27.	Open Ubuntu from the Start menu and create a new folder called "ic-projects" using the following command:
```bash
mkdir ic-projects
```
28.	Change directory into that folder using the command:
```bash
cd ic-projects
```
29.	Inside this ic-projects folder, we’re going to create our first Internet Computer DApp using the following command:
```bash
dfx new hello
```
30.	You can see this new project and folders by running the following command:
```bash
explorer.exe
```
31.	Open VSCode and click on the green icon in the bottom left corner (><).
32.	Open a new WSL Window.
33.	In the new window go to the Extensions panel, select the Remote WSL extension, and click on "Install in WSL: Ubuntu".

    <img src="https://i.imgur.com/zqzlsIX.png">

34. Go to Terminal → New Terminal

    <img src="https://i.imgur.com/dn70hsh.png">

35.	In the Terminal, run the following command to start the local dfx:
```bash
dfx start
```
36.	Open another terminal by clicking the “+” button


37.	In the new terminal, run the following command to deploy your hello project:
```bash
dfx deploy
```
38.	Once that’s done, run the following command:
```bash
npm start
```
39.	Test hello project on the local network at http://localhost:8080/

<br clear>

### 4.2 Deploy your VR project on the local network
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=NOnMglXYCII
#### 📝 Written Tutorial 👇
1.  Once you've thoroughly tested your scene in Unity and confirmed there are no significant errors appearing in the console, you can proceed with building your VR experience using a WebGL build.
2. Navigate to "File" > "Build Settings".
3. Ensure your scene is enabled in the "Scenes in Build" section.
4. Click "Build"
5. Create a new folder named "unity_build".
6. Select the "unity_build" folder and click "Select Folder" to begin the WebGL build process.
7. Wait for several minutes for the build to complete. You should receive a confirmation mesage in Unity's Console once the process is complete.

    <img src="https://i.imgur.com/DLdx1Dm.png">

8. Upon completion, you should find five items in the "Build" folder within your "unity_build" directory, as illustrated in the image.

    <img src="https://i.imgur.com/522Rd3Y.png">

9. Start a new, empty project directory (create an empty folder for your VR project) and open it in VS code.
10.	Open a new terminal and import the ICVR-canister template with the following command:
```bash
npx degit willguest/icvr-react
```
11. Alternatively you can download the ICVR-canister v0.1.2 source code from here: 
https://github.com/willguest/icvr-canister/releases
12.	Verify you have installed all dependencies correctly with the following commands:
```bash
dfx --version
```
```bash
node –-version
```
13.	Start DFX with the following command:
```bash
dfx start --clean --background
```

14.	Add 5 unity_build items into the "Build" folder (src/assets/build).

    <img src="https://i.imgur.com/oVDKTW8.png">

15.	To deploy your VR project on the local network enter the following commands:
```bash
npm run setup
```
```bash
npm run build
```
```bash
npm run start
```
16.	 Test your VR space on the local network at
http://localhost:8080/

17. Additionally, you can test your scene using the Immersive Web Emulator browser extension. It's a free tool capable of simulating all Meta Quest headsets on your PC. 

    👉[Download Immersive Web Emulator](https://chromewebstore.google.com/detail/immersive-web-emulator/cgffilbpcibhmcfbgggfhfolhkfbhmik?hl=en&pli=1)

<br clear>

### 4.3	Set up the Internet Identity and cycles wallet canister in DFX
In order to deploy your VR experience on the live ICP network we have to perform the following steps first:
- set up an Internet Identity in DFX.
- send 1 ICP to the DFX Internet Identity account ID.
- create the cycles wallet canister with at least 6.3 TC (trillion cycles) which would cost ~0.7 ICP.

#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=qDvXqMdmWTY
#### 📝 Written Tutorial 👇
1.	Create a new Internet Identity in DFX (replace “icvr” with your own name) by entering the following command in your terminal :
```bash
dfx identity new icvr
```

2.	Save your seed phrase in a safe place.

    <img src="https://i.imgur.com/RMNI531.png">

3.	Activate your new Internet Identity by entering the command:
```bash
dfx identity use icvr
``` 


4.	To verify the use of your new Identity, enter the following command:
```bash
dfx identity list
```
5. You should see a list of all Identities, the one with a star is the one currently in use.

    <img src="https://i.imgur.com/cbh5IjS.png">

6.	Get the account ID(wallet address) for your Identity by entering the following command:
```bash
dfx ledger account-id
```
7. This long number is your account ID (wallet address).

    <img src="https://i.imgur.com/pTe6sCQ.png">

8.	Send 1 ICP token to your wallet address.
9.	To verify your ICP balance enter the following command:
```bash
dfx ledger --network ic balance
```
10. You should have received 1 ICP minus transaction fee.

    <img src="https://i.imgur.com/40wl5dN.png">

11.	Retrieve the principal for your Identity by entering the following command:
```bash
dfx identity get-principal
```
12.	Create a canister with 0.7 ICP with the following command:
```bash
dfx ledger --network ic create-canister “your principal” --amount 0.7
```
13. The last line shows your canister ID

    <img src="https://i.imgur.com/LuurkfW.png">

14.	Create a wallet canister with a following command:
```bash
dfx identity --network ic deploy-wallet “your canister ID”
```
15.	Run the following command to check the cycles balance of your canister:
```bash
dfx wallet --network ic balance
```
16. You shoud see that your canister is now charged with ~6.3 TC (trillion cycles):

    <img src="https://i.imgur.com/COlSREx.png">

17.	To add more cycles (specify the amount in ICP, it doesn’t need to be 0.3) you can run the following command:
```bash
dfx ledger –-network ic top-up --amount 0.3 “your canister ID”
```


<br clear>

### 4.4	Deploy your VR project on the ICP canister (live network).
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=EXfmzABuzU0
#### 📝 Written Tutorial 👇
1.	Deploy your project locally first – follow steps in chapter 4.2.
2.	Test your project on the local network:
http://localhost:8080/
3. Make sure you have at least 6.2 TC. To check the ballance run the following command:
```bash
dfx wallet --network ic balance
```
4.	To deploy your project on the live network, open second terminal and enter the following command:
```bash
dfx deploy --network ic
```
5. Wait a few minutes for the deployment to complete. You should receive a confirmation message along with the frontend address of your VR canister.

    <img src="https://i.imgur.com/NqBlTe3.png">

6.	Copy the frontend canister address and paste it into your browser to test your project on the live ICP network from your PC.

    <img src="https://i.imgur.com/G0ncQu1.png">

    Access this canister 👉 https://gt5sn-oaaaa-aaaag-qjzra-cai.icp0.io/

7. To dive deeper into managing multiple canisters, visit 👇
    
    https://internetcomputer.org/docs/current/tutorials/developer-journey/level-1/1.6-managing-canisters

<br clear>

### 4.5	Accessing your VR experience from the VR headset browser
#### 📺 Video tutorial 👉 https://www.youtube.com/watch?v=sYYcAgeikeo
#### 📝 Written Tutorial 👇
1.	Open a web browser in your VR headset and run the frontend canister address

    <img src="https://i.imgur.com/qyKdnaR.png">

2.	Click the VR button using the trigger on your VR pad to enter your VR experience
    
    <img src="https://i.imgur.com/rTZFCOZ.png">

3.	You are now ready to explore your VR experience.

    <img src="https://i.imgur.com/vszgQc0.png">

<br clear>

## 5. Conclusions
In this tutorial you went through the process of building a unique VR experience on the Internet Computer. You've learned key concepts related to the Internet Computer and canisters and you have gone through the steps to set up your development environment and create your unique VR space in Unity game engine.

By working through this tutorial, you have gained hands-on experience with the ICVR framework, one of the many tools available for building applications on the Internet Computer. This knowledge is a stepping stone for building more complex and robust VR experiences on this emerging platform.

For additional resources, consider visiting the following:
- ICVR GitHub 👉 https://github.com/willguest/ICVR
- ICVR on Dacade Discord - connect with other VR builders 👉 https://discord.gg/6QRcKCszFq
- ICVR Twitter 👉 https://twitter.com/ICVRhub
- Dfinity's forum is a great place to ask questions, share your projects, and learn about what others are working on 👉 https://forum.dfinity.org/

These platforms are filled with enthusiastic individuals and helpful resources that can further support your journey in building decentralized VR experiences on ICP. We look forward to seeing what you'll create!
