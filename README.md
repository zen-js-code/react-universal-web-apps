# React SSR Example Application

The application contains several variants, each in its separate branch, progressively demonstrating various paradigms for writing [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) JavaScript with [React](https://facebook.github.io/react/), [React Router](https://github.com/rackt/react-router), [Node](https://nodejs.org/en/) and [Express](http://expressjs.com/).

All applications are installed using:

```
npm install
```

and ran using:

```
npm start
```

You can access the application's server directly under [http://localhost:6001]() or via its *BrowserSync* access server [http://localhost:3000](). *BrowserSync* console is available under [http://localhost:3001]().

Enjoy.

## Simple Application
The basis for the entire application stack, this application starts (and ends) with client-side React, with no handling of rendering on the server. The data is not retrieved, rather fed via props from the top level route.