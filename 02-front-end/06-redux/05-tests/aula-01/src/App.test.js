import React from 'react';
import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRedux from './helpers/renderWithRedux'
import '@testing-library/jest-dom/extend-expect';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('test if counter starts with 5', () => {
    const INITIAL_STATE = { clickReducer: { counter: 5 }};
    const { queryByText } = renderWithRedux(<App />, INITIAL_STATE);
    expect(queryByText('5')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText, debug } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');
    userEvent.click(buttonAdicionar)
    expect(queryByText('1')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const INITIAL_STATE = { clickReducer: { counter: 10 }};
    const { queryByText } = renderWithRedux(<App />, INITIAL_STATE);
    const buttonAdicionar = queryByText('Clique aqui');
    userEvent.click(buttonAdicionar)
    userEvent.click(buttonAdicionar)
    expect(queryByText('12')).toBeInTheDocument();
  });
});