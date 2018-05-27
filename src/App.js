import React, { Component } from 'react';
import Button from './components/Button';
import Onboarding from './components/Onboarding';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

class App extends Component {
  render() {
    const startOnboarding = {
      title: 'Start',
      content: 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.',
      footer: <Button>Got it</Button>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
          <Button>Save</Button>
          <Onboarding title={startOnboarding.title} content={startOnboarding.content} footer={startOnboarding.footer}/>
        </Container>
      </div>
    );
  }
}

export default App;
