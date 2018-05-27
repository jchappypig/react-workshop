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
[https://atlaskit.atlassian.com/packages/core/onboarding](https://atlaskit.atlassian.com/packages/core/onboarding)
* Storybook
[https://storybook.js.org/](https://storybook.js.org/)
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

In the editor, add a button in `App.js` by replacing `<p>` element with the following
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

Replace button with customized `Button`
```
<Button>Save</Button>
```

**Use color constants**

In the editor, `App.js`
```
const buttonColor = '#2BB98C';
const buttonHoverColor = '#21906d'
```

Replace hard-coded color with colors variables
```
const Button = styled.button`
    color: #fff;
    background-color: ${buttonColor};
    border-color: ${buttonColor};
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
      background-color: ${buttonHoverColor};
      border-color: ${buttonHoverColor};
    }
`;
```

#### Try it out

* Play around with the styles and make the button special to you - May be hot pink? round? 😆
* Add a div called `Container` using styled-components to leave some padding before the `Button`

Time: 10mins

<kbd><img src="https://github.com/SafetyCulture/react-workshop-fundamental/raw/master/src/assets/button.png" /></kbd>



<br><br><br><br>

**Extract Button component**

The skeleton of a component
```
import React, { Component } from 'react';

export default class extends Component {
  render() {
  }
}
```

Firstly, create a new file called `Button.js` under a new folder named `components`

Put the skeleton component snippet to the `Button.js`

Then move button related code into `Button.js`. It becomes

```
const buttonColor = '#2BB98C';
const buttonHoverColor = '#21906d'

const Button = styled.button`
    color: #fff;
    background-color: ${buttonColor};
    border-color: ${buttonColor};
    display: inline-block;
    font-weight: normal;
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 0.75rem 1.75rem;
    border: 1px solid transparent;
    border-radius: 0.3rem;

    &:hover {
      background-color: ${buttonHoverColor};
      border-color: ${buttonHoverColor};
    }
`;

export default class extends Component {
  render() {
    return <Button>{this.props.children}</Button>
  }
}
```



**Learn about version control - [git](http://rogerdudler.github.io/git-guide/)**

In the terminal, firstly initialize your app with git control
```
git init
```

After initialization, you should be able to see the status of the changes
```
git status
```

Then add all your files to be under git control
```
git add -A
```

Commit the changes
```
git commit -m 'added button component'
```


Add your react app to github - [https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

* Create a new github repository

<kbd><img src="https://github.com/SafetyCulture/react-workshop-fundamental/raw/master/src/assets/new-repo.png" /></kbd>

* Back to the terminal
```
git remote add origin git@github.com:<yourGithubUserName>/react-workshop.git
git push -u origin master
```

### Create another React component - onboarding
Reference:
https://atlaskit.atlassian.com/packages/core/onboarding

**Create a new file called `Onboarding.js` under `components` folder**

With the skeleton of a component
```
import React, { Component } from 'react';

export default class extends Component {
  render() {
  }
}
```

By looking at the expecting onboarding design, we know that each onboarding component is composed of 3 parts - title, content and footer

**Firstly, let's create onboarding title in `Onboarding` component**

```
  render() {
    const { title } = this.props;

    return (
      <div>
        <h4>{title}</h4>
      </div>
    )
  }
```

**Give some styles to the background in `Onboarding` component**

```
const Container = styled.div`
  color: white;
  background-color: #2BB98C;
  padding: 1rem;
  width: 400px;
  text-align: left;
`;
```

```
 render() {
    const { title } = this.props;

    return (
      <Container>
        <h4>{title}</h4>
      </Container>
    )
  }
```

**Add onboarding content in `Onboarding` component**

```
 render() {
    const { title, content } = this.props;

    return (
      <Container>
        <h4>{title}</h4>
        <p>
          {content}
        </p>
      </Container>
    )
  }
```

**Test the `Onboarding` Component in `App.js`**

```
const startOnboarding = {
  title: 'Start',
  content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
}

```
```

          <Onboarding title={startOnboarding.title} content={startOnboarding.content}/>
```

**Challenge: Try to add button to the footer**

Time: 10 mins

<kbd><img src="https://github.com/SafetyCulture/react-workshop-fundamental/raw/master/src/assets/onboardingHover.gif" /></kbd>












