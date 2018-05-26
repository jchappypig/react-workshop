# React workshop
## Schedule
* React Basic
  * Jsx
  * Virtual Dom
  * React state
  * React props
  * The react mindset
* Create a button React component
* Create an on-boarding React component
* Storybook
* Deploy React app to Heroku

<br><br>

## Step-by-step tutorial
### Create a react app using [react-create-app](https://github.com/facebook/create-react-app)

In the terminal
```
npx create-react-app react-is-awesome
```

```
cd react-is-awesome
```

```
yarn
```

```
yarn start
```
<br>

### Create our first React component - button

**Install a style package called [styled-components](https://github.com/styled-components/styled-components)**

In the terminal
```
yarn add styled-components
```

**Add button in the page**

In the editor, add a button in `App.js` under `<p>` tag
```
<button>Save</button>
```
**Give some styles to the button**

In the editor, import `styled-component`
```
import Styled from 'styled-components';
```

Define a button style
```
const Button = styled.button`
    color: #fff;
    background-color: #2BB98C;
    border-color: #2BB98C;
    display: inline-block;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 0.75rem 1.75rem;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 0.3rem;

    &:hover {
      background-color: #21906d;
      border-color: #21906d;
    }
`;
```

Replace Button with customized `Button`
```
<Button>Save</Button>
```








