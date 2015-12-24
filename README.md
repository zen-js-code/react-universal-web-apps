# React SSR Example Application

The application contains several variants, **each in its separate branch**, progressively demonstrating various paradigms for writing [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) JavaScript with [React](https://facebook.github.io/react/), [React Router](https://github.com/rackt/react-router), [Node](https://nodejs.org/en/) and [Express](http://expressjs.com/).

All applications are installed using:

```
npm install
```

and ran using:

```
npm start
```

> Note that `master` branch doens't actually contain an application and the above **won't work**.

You can access the application's server directly under [http://localhost:6001]() or via its *BrowserSync* access server [http://localhost:3000](). *BrowserSync* console is available under [http://localhost:3001]().

Enjoy.

## Simple Application

> The application is under [simple](https://github.com/zen-js-code/react-universal-web-apps/tree/simple) branch.

The basis for the entire application stack, this application starts (and ends) with client-side React, with no handling of rendering on the server. The data is not retrieved, rather fed via props from the top level route.

## Naive Universal Application

> The application is under [simple+ssr](https://github.com/zen-js-code/react-universal-web-apps/tree/simple+ssr) branch.

This version of the application performs the following:

1. render HTML on server, based on data necessary
2. deliver the HTML to the browser
3. send the data , used to render the HTML, to the browser as well
4. allow React to resolve the necessary re-renders

### A Little Less Naive Universal Application

> The application is under [simple+ssr+context](https://github.com/zen-js-code/react-universal-web-apps/tree/simple+ssr+context) branch.

This application improves on the previous variant by abstracting data propagation and delegating it to React Context. This is achieved by introducing a new wrapper component that does most of the "heavy" lifting required for Context usage in React components.

### More Complex, But Still Naive, Application

> The application is under [simple+ssr+context+promise](https://github.com/zen-js-code/react-universal-web-apps/tree/simple+ssr+context+promises) branch.

This application expands the previous by adding another page and delegating data retrieval to static methods on the components themselve (limited to Route components).

### Flux Universal Application

> The application is under [flux+ssr+context+promise](https://github.com/zen-js-code/react-universal-web-apps/tree/flux+ssr+context+promises) branch.

This variant of the application makes the transformation from our naive Flux-less application to still (hopefully less) somewhat naive Flux-full one.