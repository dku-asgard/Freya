# Freya


# Freya Setup

This guide will help you clone a repository, set up a React project, and get started with development on Windows, macOS, and Ubuntu.

## Prerequisites

Before starting, make sure you have the following tools installed:

- **Git**: For cloning the repository.
- **Node.js**: Includes npm for managing dependencies.

### Installing Git

- **Windows**: Download and install Git from [git-scm.com](https://git-scm.com/download/win).
- **macOS**: Install Git using Homebrew with `brew install git`, or download from [git-scm.com](https://git-scm.com/download/mac).
- **Ubuntu**: Install Git using the terminal with:

  ```bash
  sudo apt update
  sudo apt install git
  ```

### Installing Node.js

- **Windows**: Download and install Node.js from [nodejs.org](https://nodejs.org/en/download/).
- **macOS**: Install Node.js using Homebrew with `brew install node`, or download from [nodejs.org](https://nodejs.org/en/download/).
- **Ubuntu**: Install Node.js using the terminal with:

  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```
git
## Cloning the Repository

1. Open your terminal or command prompt.
2. Clone the repository using Git:

   ```bash
   git clone https://github.com/dku-asgard/Freya.git
   ```

3. Navigate to the cloned project directory:

   ```bash
   cd freya
   ```

## Setting Up the React Project

1. **Install Dependencies**

   Run the following command to install the project's dependencies:

   ```bash
   npm install
   ```

2. **Start the Development Server**

   To start the development server and view the React app in your browser, run:

   ```bash
   npm start
   ```

   This will start the development server and open your default web browser to `http://localhost:3000`.

## Additional Commands

- **Install Additional Packages**: To add more libraries or packages, use:

  ```bash
  npm install package-name
  ```

- **Build the Project for Production**: To create a production build, use:

  ```bash
  npm run build
  ```
