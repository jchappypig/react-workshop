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