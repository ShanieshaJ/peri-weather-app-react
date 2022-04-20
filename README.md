# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install Node.js

You can install [Node.js](https://nodejs.org/en/) by clicking on the latest LTS version.
- Open Command Prompt Terminal (**If using Windows**)
- Type `npm i -g create-react-app` and press enter

## Create React Application
- Create an empty folder (See naming directory)
- Open empty with VS Code
- Open Terminal (Make sure it is the current directory)
- Run `npx create-react-app .`
- Type `npm start`
- To stop the server, go to terminal (Command Prompt), select node and type `ctrl/cmd + c`
- To make sure that the Node.js server actually is off, go on Task Manager to see

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### `npm install bootstrap`

Install Bootstrap in your Node.js powered apps with the [npm package](https://www.npmjs.com/package/bootstrap).

The bootstrap module itself exports all of our plugins. You can manually load Bootstrap’s plugins individually by loading using the `import bootstrap/dist/css/bootstrap.css` from node-modules folder in the index.js.

## Important facts to remember

For naming directory folder or packages rules:
- All characters must be in lowercase only, **not** uppercase or mixed or uppercase/lowercase
- The name length must be greater than zero
- Should not contain any leading or trailing spaces 
- Must contain hyphens ( - ) (It cannot be Peri Weather App React. It must be peri-weather-app-react only)
- Must not contain any non-safe-URL characters (Since the name is going to be part of the URL)
- Cannot contain any period or understore characters in the naming the directory or package

If you create a new folder for future projects. It **MUST** go inside the src folder since you are using Create React App. 

It cannot be outside of the src folder, or else will display this error message: You attempted to import `../../public/images/Galaxy.jpg` which falls outside of the project `src/` directory. Relative imports outside of `src/` are not supported. 

This is the special restriction added by developers of create-react-app. It is implemented in `ModuleScopePlugin` to ensure files reside in `src/`. That plugin ensures that relative imports from app's source directory don't reach outside of it.

## Things to do with the project (Starting from April 18-25)
- Fix the infomation of the temperature (In process)
- Clean code the js/css files
- Add the API to the weather app (In process)
- Add how to install FontAwesome icons

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
