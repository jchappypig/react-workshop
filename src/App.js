import React, { Component } from 'react';
import Button from './components/Button';
import WithOnboarding from './components/WithOnboarding';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const ColorPanel = styled.div`
  display: inline-block;
  background-color: #CDCDCD;
  color: black;
  padding: 2rem;
  width: fit-content;
  margin: 1rem;
  border-left: 1rem solid ${props => props.color};
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    const onBoarding1 = {
      title: 'Start',
      content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.',
      footer: <Button onClick={() => this.nextOnboarding()}>Learn more</Button>
    }

    const onBoarding2 = {
      title: 'Learn more',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      footer: <div><Button onClick={() => this.previousOnboarding()}>Previous</Button><Button onClick={() => this.nextOnboarding()}>Next</Button></div>
    }

    const onBoarding3 = {
      title: 'Finally',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      footer: <Button onClick={() => this.nextOnboarding()}>Got it</Button>
    }

    onBoarding1.next = onBoarding2;
    onBoarding2.next = onBoarding3;
    onBoarding3.previous = onBoarding2;
    onBoarding2.previous = onBoarding1;

    this.state = { currentOnboarding: undefined };
    this.initialOnboarding = onBoarding1;
  }

  startOnboarding = () => {
    this.setState({ currentOnboarding: this.initialOnboarding })
  }

  nextOnboarding = () => {
    this.setState({ currentOnboarding: this.state.currentOnboarding.next });
  }

  previousOnboarding = () => {
    this.setState({ currentOnboarding: this.state.currentOnboarding.previous });
  }

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
}

export default App;
