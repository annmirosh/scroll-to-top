# Scroll to top Web Component

This is a Web Component that implements a "scroll-to-top" button functionality.

This component can be used with React, Angular, Ember, Vue.js
frameworks or in the VanillaJS app.

[Demo](https://annmirosh.github.io/scroll-to-top/)

### How to use:

1. Install ```scroll-to-top-btn``` package.

    `npm i scroll-to-top-btn`

2. Depending on the framework that you use, enable the custom HTML elements and use ```<scroll-to-top-btn></scroll-to-top-btn>``` tag in your code:

    - for *vanila js* project add script tag to the page:

    ```<script src="node_modules/scroll-to-top-btn/dist/scrolltotop.js"></script>```

    - #### For React project:
    Define custom elements in the index.js or main.js file
    (see React demo [here](https://github.com/annmirosh/scroll-to-top-demos/tree/master/react-demo))

    ```
    import {defineCustomElements} from 'scroll-to-top-btn/dist/loader';

    ReactDOM.render(<App/>, document.getElementById('root'));

    defineCustomElements(window);
    ```

    Use the component on your view:

    ```
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <scroll-to-top-btn mode="dark"></scroll-to-top-btn>
          </header>
        </div>
      );
    }

    export default App;
    ```

    - for *Vue.js* project define custom elements in the main.js file:

    ```
    import { defineCustomElements } from 'scroll-to-top-btn/dist/loader';
    Vue.config.ignoredElements = [/scroll-to-top-btn/];
    defineCustomElements(window);
    ```

3. Add ```scroll-to-top-btn``` to the page/view.

    ```
    <scroll-to-top-btn mode="light"></scroll-to-top-btn>
    ```