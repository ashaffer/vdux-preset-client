
# vdux-client

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Pre-bundled client-side vdux store creator

## Installation

    $ npm install vdux-client

## Usage

Instead of calling [redux](https://github.com/rackt/redux) directly, you call vdux-client, like this:

```javascript
import client from 'vdux-client'
import thunk from 'redux-thunk'
// ...any other redux middleware you like...
import reducer from './reducer'

const initialState = {}
const configStore = client(thunk, ...otherMiddleware)
const store = configStore(reducer, initialState)

vdux(store, app, document.body)
```

That's it.

## What's included

  * [virtex-dom](https://github.com/ashaffer/virtex-dom) - DOM rendering backend
  * [virtex-component](https://github.com/ashaffer/virtex-component) - Adds components
  * [virtex-local](https://github.com/ashaffer/virtex-local) - Local state for your components
  * [redux-multi](https://github.com/ashaffer/redux-multi) - Lets you dispatch multiple actions by returning an array from your handlers.
  * [redux-ephemeral](https://github.com/ashaffer/redux-ephemeral) - Creates and destroys component local state for [virtex-local](https://github.com/ashaffer/virtex-local).

## License

The MIT License

Copyright &copy; 2015, Weo.io &lt;info@weo.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
