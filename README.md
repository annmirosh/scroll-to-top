# Scroll to top Web Component

This is a Web Component that implements a "scroll-to-top" button functionality.

This component can be used with React, Angular, Ember, Vue.js
frameworks or in the VanillaJS app.

[Demo](https://annmirosh.github.io/scroll-to-top/)

## How to use:

1. Install ```scroll-to-top-btn``` package.

    `npm i scroll-to-top-btn`

2. Depending on the framework that you use, enable the custom HTML elements and use ```<scroll-to-top-btn></scroll-to-top-btn>``` tag in your code:

### For Vanilla JS project (see the code example [here](https://github.com/annmirosh/scroll-to-top-demos/tree/master/vanilla-js-demo)):

Add script tag to the page:

```<script src="node_modules/scroll-to-top-btn/dist/scrolltotop.js"></script>```

Use the component on your page:

```
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
    <meta charset="utf-8">
    <script src="node_modules/scroll-to-top-btn/dist/scrolltotop.js"></script>
</head>
<body>
<b>Add some long content here</b>
<scroll-to-top-btn></scroll-to-top-btn>

</body>
</html>
```

### For React project (see the code example [here](https://github.com/annmirosh/scroll-to-top-demos/tree/master/react-demo)):
Define custom elements in the index.js or main.js file


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
        <b>Add some long content here</b>
        <scroll-to-top-btn mode="dark"></scroll-to-top-btn>
      </header>
    </div>
  );
}

export default App;
```

### For Vue.js project (see the code example [here](https://github.com/annmirosh/scroll-to-top-demos/tree/master/vue-demo)):

Define custom elements in the index.js or main.js file:

```
import { defineCustomElements } from 'scroll-to-top-btn/dist/loader';
Vue.config.ignoredElements = [/scroll-to-top-btn/];
defineCustomElements(window);
```

Add component to the template:

```
<template>
    <div id="app">
        <b>Add some long content here</b>
        <scroll-to-top-btn></scroll-to-top-btn>
    </div>
</template>
```