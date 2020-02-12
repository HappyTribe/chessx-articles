# ChessX Article App

This is a test application for requesting articles from a NodeJS API.

## Installation

First, clone the repository to your local machine using git commands and go into the folder

```bash
git clone <REPO_URL> chessx-articles
```

```bash
cd chessx-articles
```

Use the package manager [npm](https://www.npmjs.com/) to install the required dependencies

```bash
npm install
```

## Usage

To start the project in development mode you have to start three services:

-   MySQL Docker Service
-   NodeJS API
-   React Application

#### MySQL Docker Service

To start the database you have to go into the docker folder and execute the docker-compose file:

```bash
cd server/docker
```

```bash
docker-compose up -d
```

After the containerized docker is up and running you have to import and populate the database data from the `Dump20200212.sql` file which is located in:

```bash
server/dumps/Dump20200212.sql
```

#### NodeJS API

To start the API you have to go back to the project root and execute the npm server start command fount in the `package.json` file:

```bash
cd ../../
```

```bash
npm run start:server
```

#### React Application

After you have the API up and running you can start the frontend application in a seperate command window by executing the npm application start command:

```bash
npm run start:application
```

## Application

To see the application running you need to go to url: http://localhost:5000
