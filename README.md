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

## Before we start

* Register a github account
https://github.com/

* Add your ssh key to your github account
https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/


* Register a heroku account
https://www.heroku.com/

* Add your ssh key to your heroku account
https://devcenter.heroku.com/articles/keys
```
heroku keys:add
```

* Make sure the following is installed through terminal

  * homebrew
  * git
  * heroku
  * npm
  * yarn
  * npx

````
command -v brew >/dev/null 2>&1 || /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
command -v git >/dev/null 2>&1 || brew install git
command -v heroku >/dev/null 2>&1 || brew install heroku
command -v npm >/dev/null 2>&1 || brew install npm
command -v yarn >/dev/null 2>&1 || npm install -g yarn
command -v npx >/dev/null 2>&1 || npm install -g npx

````

* Install VS code
https://code.visualstudio.com/download





## Step-by-step tutorial
### Create a react app using [react-create-app](https://github.com/facebook/create-react-app)

In the terminal
```
npx create-react-app react-workshop
```

```
cd react-workshop
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
import styled from 'styled-components';
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

Firstly, create a new file called `Button.js` under a new folder named `components` under `src`

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

(30 minutes)

#### Try it out

* Play around with the styles and make the button special to you - May be hot pink? round? 😆

Time: 5mins


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
const onboarding1 = {
  title: 'Start',
  content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
}

```
```

          <Onboarding title={onboarding1.title} content={onboarding1.content}/>
```

### Challenge: Try to add a button to as the footer of `Onboarding` component**

Time: 10 mins

<kbd><img src="https://github.com/SafetyCulture/react-workshop-fundamental/raw/master/src/assets/OnboardingHover.gif" /></kbd>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**Solution**

`Onboarding.js`
```
export default class extends Component {
  render() {
    const { title, content, footer } = this.props;

    return (
      <Container>
        <h4>{title}</h4>
        <p>
          {content}
        </p>
        {footer}
      </Container>
    )
  }
}
```

`App.js`
```
const onboarding = {
  title: 'Start',
  content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'
  footer: <Button>Learn more</Button>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>Save</Button>
        <Onboarding
          title={onboarding.title}
          content={onboarding.content}
          footer={onboarding.footer}
          />
      </div>
    );
  }
}

```

### Make `Onboarding` Component interactive

**Try `onClick` event**

Move onBoarding steps definition into `App` Constructor
```
class App extends Component {
  constructor(props) {
    super(props);
    const onboarding1 = {
      title: 'Start',
      content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.',
      footer: <Button>Learn more</Button>
    }

    this.initialOnboarding = onboarding1;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>Save</Button>
        <Onboarding
          title={this.initialOnboarding.title}
          content={this.initialOnboarding.content}
          footer={this.initialOnboarding.footer}
          />
      </div>
    );
  }
}

```

Define a dummy onClick event in `App.js`
```
  onClick = () => {
    window.alert('Stop clicking me!');
  }

```

Pass `onClick` property to `Button` component

`App.js`
```
<Button onClick={this.onClick}>Got it</Button>
```

Allow `onClick` to be called in `Button` Component

`Button.js`
```
export default class extends Component {
  render() {
    return <ButtonContainer><Button onClick={this.props.onClick}>{this.props.children}</Button></ButtonContainer>
  }
}
```
<kbd><img src="https://github.com/SafetyCulture/react-workshop-fundamental/raw/master/src/assets/onBoardingClick.gif" /></kbd>


<br><br>

**Introducing component state**

Firstly, let's create multiple onboarding steps

```
  constructor(props) {
    super(props);

    const onBoarding1 = {
      title: 'Start',
      content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.',
      footer: <Button>Learn more</Button>
    }

    const onBoarding2 = {
      title: 'Learn more',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      footer: <div><Button>Previous</Button><Button>Next</Button></div>
    }

    const onBoarding3 = {
      title: 'Finally',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      footer: <Button>Got it</Button>
    }

    onBoarding1.next = onBoarding2;
    onBoarding2.next = onBoarding3;
    onBoarding3.previous = onBoarding2;
    onBoarding2.previous = onBoarding1;

    this.state = { currentOnboarding: undefined };
    this.initialOnboarding = onBoarding1;
  }
```

Define 3 major actions - `startOnboarding`, `nextOnboarding` and `previousOnboarding`

```
  startOnboarding = () => {
    this.setState({ currentOnboarding: this.initialOnboarding })
  }

  nextOnboarding = (onboarding) => {
    this.setState({ currentOnboarding: onboarding.next });
  }

  previousOnboarding = (onboarding) => {
    this.setState({ currentOnboarding: onboarding.previous });
  }

```

Trigger those 3 actions in the buttons' `onClick` event accordingly

```
  constructor(props) {
    super(props);

    const onBoarding1 = {
      title: 'Start',
      content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.',
      footer: <Button onClick={() => this.nextOnboarding(onBoarding1)}>Learn more</Button>
    }

    const onBoarding2 = {
      title: 'Learn more',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      footer: <div><Button onClick={() => this.previousOnboarding(onBoarding2)}>Previous</Button><Button onClick={() => this.nextOnboarding(onBoarding2)}>Next</Button></div>
    }

    const onBoarding3 = {
      title: 'Finally',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      footer: <Button onClick={() => this.nextOnboarding(onBoarding3)}>Got it</Button>
    }

    onBoarding1.next = onBoarding2;
    onBoarding2.next = onBoarding3;
    onBoarding3.previous = onBoarding2;
    onBoarding2.previous = onBoarding1;

    this.state = { currentOnboarding: undefined };
    this.initialOnboarding = onBoarding1;
  }
```

Every time we click we change the state, and set the `currentOnboarding`. So we are going to read the `currentOnboarding` from the state and re-render every time on click.

`App.js`
```
render() {
    const {currentOnboarding} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button onClick={this.startOnboarding}>Start</Button>
        {currentOnboarding && <Onboarding
          title={currentOnboarding.title}
          content={currentOnboarding.content}
          footer={currentOnboarding.footer}
          />}
      </div>
    );
  }
```

30 minutes

**Bind `Onboarding` component to a target element**

Firstly, let's create a dummy component that the `onBoarding` element can bind to.

`App.js`
```
const ColorPanel = styled.div`
  display: inline-block;
  background-color: #CDCDCD;
  color: black;
  padding: 2rem;
  width: fit-content;
  margin: 1rem;
  border-left: 1rem solid ${props => props.color};
`
```

I also create a flex center container to put those new elements
```
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
```

```
        <FlexContainer>
          <ColorPanel color='green'>Element 1</ColorPanel>
          <ColorPanel color='red'>Element 2</ColorPanel>
          <ColorPanel color='yellow'>Element 3</ColorPanel>
        </FlexContainer>
```

I will need some ways to connect `Onboarding` component to the target `ColorPanel` element

I am going to create a new component called `WithOnboarding` to connect those two together

`WithOnboarding.js`
```
import React, { Component } from 'react';
import Onboarding from './Onboarding';

export default class extends Component {
  render() {
    const { current, children, onboarding } = this.props;

    return (
      <div>
        {children}
        {current === onboarding && <Onboarding
          title={onboarding.title}
          content={onboarding.content}
          footer={onboarding.footer}
        />}
      </div>
    )
  }
}
```

So in `App.js`, we can just do
```
  render() {
    const { currentOnboarding } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FlexContainer>
          <WithOnboarding onboarding={this.initialOnboarding} current={currentOnboarding}>
            <ColorPanel color='green'>Element 1</ColorPanel>
          </WithOnboarding>
          <WithOnboarding onboarding={this.initialOnboarding.next} current={currentOnboarding}>
            <ColorPanel color='red'>Element 2</ColorPanel>
          </WithOnboarding>
          <WithOnboarding onboarding={this.initialOnboarding.next.next} current={currentOnboarding}>
            <ColorPanel color='yellow'>Element 3</ColorPanel>
          </WithOnboarding>
        </FlexContainer>
        <Button onClick={this.startOnboarding}>Start</Button>
      </div>
    );
  }
```
20 minutes

### Deployment

```
heroku create -b https://github.com/mars/create-react-app-buildpack.git
```

```
yarn build
```

```
git push heroku master
```

[https://blog.heroku.com/deploying-react-with-zero-configuration](https://blog.heroku.com/deploying-react-with-zero-configuration)
[https://devcenter.heroku.com/articles/buildpacks](https://devcenter.heroku.com/articles/buildpacks)

### Storybook

**Install storybook**
```
npm i -g @storybook/cli
getstorybook
```

**Start storybook**
```
yarn run storybook
```

**Edit the storybook**

In `src/stories/index.js`, we replace the `Button` with our own `Button`
```
import { Welcome } from '@storybook/react/demo';
import Button from '../components/Button'
```

We can also add another storybook for `Onboarding` component
```
storiesOf('Onboarding', module)
.add('with title and content', () => (
  <Onboarding title='Hello title' content='Hello content' footer={<Button onClick={action('clicked')}>Got it</Button>}>
  </Onboarding>
));
```

## Useful resources
* https://storybook.js.org/
* https://react-styleguidist.js.org/
* https://atlaskit.atlassian.com/packages
* https://ant.design/docs/react/introduce
* https://interplayapp.com/




























