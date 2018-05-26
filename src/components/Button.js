import React, { Component } from 'react';
import styled from 'styled-components';

const buttonColor = '#2BB98C';
const buttonHoverColor = '#21906d'

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

export default class extends Component {
  render() {
    return <Button>{this.props.children}</Button>
  }
}