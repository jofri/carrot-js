
![Carrot-js logo](./img/carrot-js_logo.svg)
# Carrot-js - Like Redux without the boilerplate

 - **No more props!** - Store and retrieve variables from any React file without passing down props
 - **Reactive variables!** - Listen for changes to instantly update your state (or activate your callback)
 -  **Easy peasy carrot squeezy!** - Just import carrot-js in any file and you're ready to go

&nbsp;

# Example

Install Carrot-js using your terminal:
```bash
npm install carrot-js
```

Import Carrot-js in your root-component (usually App.js) and wrap all your components:

```bash
import { Carrot, pantry } from 'carrot-js';

function  App() {
  return (
    <>
      <Carrot value={pantry}>
        <Navbar />
        <Dashboard />
      </Carrot>
    <>
  );
}
```

## Set variable

'Plant' a variable from any file (eg. an API response). Your plant method takes 2 arguments:

 - Variable name
 - Data to be stored in variable

```bash
import { plant } from 'carrot-js';

plant('exampleVariable', 'Crops are good this year!');
```



## Get variable ( and listen for any future variable changes)

The 'pick' method will get your variable and start listening for any changes to it. It takes two arguments:

 - Variable name
 - Callback function (eg. setVariable, myFunction, (data) => { console.log(data) } etc.)

 Every time the variable changes, 'pick' will execute your callback function. The component below will print 'Crops are good this year!':

```bash
import { useEffect, useState } from 'react';
import { pick } from 'carrot-js';

function MyComponent () {
  const [variable, setVariable] = useState('');

  useEffect( () => {
    pick('exampleVariable', setVariable);
  }, []);

  return (
    <>
      <h4>{variable}</h4>
    <>
  );
}
```



## Licence

MIT
