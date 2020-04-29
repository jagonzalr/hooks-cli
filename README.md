[![npm version](https://badge.fury.io/js/hooks-cli.svg)](https://badge.fury.io/js/hooks-cli)

# hooks-cli

Opinionated CLI for scaffolding React hooks.

[This CLI was made by following Dominik Kundel tutorial](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)

##Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
	- [Create](#create)
	- [Develop](#develop)
	- [Distribute](#distribute)
- [Structure](#structure)
- [What is included?](#what-is-included?)
- [License](#license)

## Getting started

`sudo npm install -g hooks-cli`

## Usage

### Create

`mkdir my-custom-hook`
`cd my-custom-hook`
`create-hook`

#### Initialize a git repository

`create-hook -g` or `create-hook --git`

### Develop

`npm start`

This will run a demo locally at `localhost:3000` using `webpack.demo.js`

### Distribute

`npm publish --access public` [Reference](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

This will use `webpack.config.js`

Update the `externals` object if you add more `peerDependencies`. By default `React` is included.

## Structure

```
my-custom-hook
├── LICENCE
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── postcss.config.js
├── webpack.config.js
├── webpack.demo.js
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierignore
├── .prettierrc
├── demo
│   ├── styles
│	│	├── index.scss
│	│	├── tailwind.css
│   │   └── variables.scss
│   ├── App.jsx
│   ├── index.html
│   └── index.jsx
└── src
    └── index.js
```

## What is included?

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Webpack](https://webpack.js.org/)
- [Tailwindcss](https://tailwindcss.com/) (only for demo)

## License

hooks-cli is [MIT licensed](./LICENSE).
