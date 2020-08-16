<h1 align="center">Proffy</h1>

<p align="center">Web application to connect teachers and students.</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/th92rodr/proffy?color=7159c1" />
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/th92rodr/proffy?color=b24c63" />
  <a href="https://github.com/th92rodr/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/th92rodr/proffy?color=3675d3" />
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-fff?color=1A424F" />
  <a href="https://github.com/th92rodr/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/th92rodr/proffy?style=social" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/repo status-Done-fff?style=flat&color=47A248" alt="Done - The project has been finalized." />
</p>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#tech-stack">Tech Stack</a> •
 <a href="#layout">Layout</a> •
 <a href="#how-it-works">How it works</a> •
 <a href="#license">License</a>
</p>

## About

Web application to connect teachers and students.

This project was developed during the Next Level Week #02 offered by [Rocketseat](https://rocketseat.com.br/).

## Features

- [x] Register teachers and their schedules
- [x] Search for teachers by subject and by date
- [x] Get in touch with a teacher

## Tech Stack

The following tools were used for building this project:

**API**

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/)

**Website**

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

**Mobile App**

- [ReactNative](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)

## Layout

You can check the layout at Figma.

- [Web](https://www.figma.com/file/0VvbIhQ673VSBOhh7N0xsZ/Proffy_Web?node-id=0%3A1)

- [Mobile](https://www.figma.com/file/RVCnn5LSmCKYfgFpe0cJrW/Proffy_Mobile)

---

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:

- `Node.js`<br />
  recommend version 12.18

  `Node` can be installed from `https://nodejs.org/en/`.

- `NPM` or `Yarn`

  - `NPM`:<br />
    recommend version 6.14

    Installing `Node` will also install `NPM` automatically.

  - `Yarn`:<br />
    recommend version 1.22<br />
    required version 1.\*

    `Yarn` can be installed from `https://classic.yarnpkg.com/en/`.

### Running the API

Make sure you are inside the `api` folder, then follow these steps:

- Install the project dependencies:

```sh
yarn install
# or
npm install
```

- Init the database (create tables and default records):

```sh
yarn knex:migrate
# or
npm run knex:migrate
```

- Start the API:

```sh
yarn start
# or
npm start
```

The API will be running on PORT `3333`.

### Running the Web App

Make sure you are inside the `web` folder, then follow these steps:

- Install project dependencies:

```sh
yarn install
# or
npm install
```

- Start the APP:

```sh
yarn start
# or
npm start
```

The app will be running on port `3000`.

### Running the Mobile App

Make sure you are inside the `mobile` folder, then follow these steps:

- Install project dependencies:

```sh
yarn install
# or
npm install
```

- Start the APP:

```sh
yarn start
# or
npm start
```

- Expo Developer Tools.

  - Expo Developer Tools will open up in the browser.
  - Select `LAN` as connection type.
  - Open the Expo mobile phone app.
  - Scan the provided QR Code with the Expo app.

---

## License

This project is under the license [MIT](./LICENSE).
