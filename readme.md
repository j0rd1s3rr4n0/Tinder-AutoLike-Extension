<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>Tinder-AutoLike-Extension
</h1>
<h3>◦ Easy Swipe, Boost your Love life!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/j0rd1s3rr4n0/Tinder-AutoLike-Extension?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/j0rd1s3rr4n0/Tinder-AutoLike-Extension?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/j0rd1s3rr4n0/Tinder-AutoLike-Extension?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/j0rd1s3rr4n0/Tinder-AutoLike-Extension?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

This project is a Chrome extension designed to provide automated liking functionality for the Tinder dating app. The core functionalities include enabling and disabling the content script that automatically likes user profiles at regular intervals. The extension also updates the extension icon and button text based on the script's state and provides a user-friendly popup interface for activation and deactivation of the automation process. Overall, it aims to simplify the process of swiping on Tinder by eliminating the need for manual interaction, saving users time and effort.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The system follows a Chrome extension architecture, with separate background and content scripts. The content script is injected into specific webpages, while the background script listens for icon clicks and sends messages to the content script. |
| **📖 Documentation**   | The documentation is minimal. It provides brief descriptions of the files and their functions, but lacks detailed explanations of the system's functionality. |
| **🔗 Dependencies**    | The system relies on the Google Chrome browser and the `chrome.tabs` API for proper functioning. No external libraries or systems are used. |
| **🧩 Modularity**      | The system is well-organized into smaller components, with a separate script for each specific functionality. The scripts can be easily maintained and modified as needed. |
| **✔️ Testing**          | No testing strategies or tools are implemented in the codebase. Proper testing is required to ensure the reliability and correctness of the system. |
| **⚡️ Performance**      | The system's performance largely depends on Chrome's processing capabilities. It does not seem to have any specific optimizations for speed, efficiency, or resource usage. |
| **🔐 Security**        | The system does not implement any specific security measures to protect user data or maintain functionality. The focus is on automating actions in a specific web application, which doesn't involve significant security concerns. |
| **🔀 Version Control** | The codebase is version controlled using Git. The GitHub repository provides version history, issues, and pull requests to enable collaboration and track changes over time. |
| **🔌 Integrations**    | The system primarily interacts with the Google Chrome browser through the `chrome.tabs` API. It does not have any direct integrations with other external systems or services. |
| **📶 Scalability**     | The system's scalability is limited to its use as a Chrome extension. It can potentially be enhanced with additional features or expanded for other web applications, but significant changes would be required for that purpose. |

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                                              | ---                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [background_script.js](https://github.com/j0rd1s3rr4n0/Tinder-AutoLike-Extension/blob/main/background_script.js) | This code snippet is for a Chrome extension. It toggles the activation of a content script on a specific tab when the extension's icon is clicked. The content script is executed when enabled and deactivated when disabled. The icon changes accordingly to indicate the script's state.                                                                                                                                              |
| [content_script.js](https://github.com/j0rd1s3rr4n0/Tinder-AutoLike-Extension/blob/main/content_script.js)       | The code allows for clicking on a specific element on a webpage at regular intervals. It also includes functionality to toggle the header, enabling or disabling the script's execution. This code is designed specifically for use with the Google Chrome browser.                                                                                                                                                                     |
| [popup.html](https://github.com/j0rd1s3rr4n0/Tinder-AutoLike-Extension/blob/main/popup.html)                     | This code is a HTML document that creates a webpage for a Tinder AutoLike extension. It contains a title, a button to activate the extension, and a link to the GitHub project. It also includes CSS styling for the button and list items. The JavaScript file "popup_script.js" is linked for additional functionality.                                                                                                               |
| [popup_script.js](https://github.com/j0rd1s3rr4n0/Tinder-AutoLike-Extension/blob/main/popup_script.js)           | This code listens for the DOMContentLoaded event and adds a click event listener to a button element with the id "toggleButton". When clicked, the code sends a message to the active tab in the Chrome browser using the chrome.tabs API. It also updates the button text based on the response from the content script. If the header is enabled, the button text is "Desactivar", otherwise it is "Activar" and the tab is reloaded. |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the Tinder-AutoLike-Extension repository:
```sh
git clone https://github.com/j0rd1s3rr4n0/Tinder-AutoLike-Extension
```

2. Change to the project directory:
```sh
cd Tinder-AutoLike-Extension
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using Tinder-AutoLike-Extension

```sh
node app.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
