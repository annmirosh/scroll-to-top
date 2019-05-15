# Scroll to top Web Component

This is a Web Component that implements a "scroll-to-top" button functionality.

This component can be used with React, Angular, Ember, Vue.js
frameworks or in the VanillaJS app.

[Demo](https://annmirosh.github.io/scroll-to-top/)

### How to use:

1. Install ```scroll-to-top-btn``` package.

    `npm i scroll-to-top-btn`

2. Depending on the framework that you use, enable the custom HTML elements.

    - for vanila js project add script tag to the page:

        ```<script src="node_modules/scroll-to-top-btn/dist/scrolltotop.js"></script>```

    - for React project define custom elements in the main.js file:

    ```
    import { defineCustomElements } from 'scroll-to-top-btn/dist/loader';
    defineCustomElements(window);
    ```

    - for Vue.js project define custom elements in the main.js file:

    ```
    import { defineCustomElements } from 'scroll-to-top-btn/dist/loader';

    // tell Vue to ignore all components defined in the test-components
    // package.
    Vue.config.ignoredElements = [/scroll-to-top-btn/];

    defineCustomElements(window);
    ```

3. Add <scroll-to-top-btn></scroll-to-top-btn> to the page/view.
