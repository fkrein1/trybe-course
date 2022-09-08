import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import { rootReducer } from '../store';

const renderWithRedux = (
  component,
  initialState = {},
  store = createStore(rootReducer, initialState),
) => ({
  ...render(
    <Provider store={ store }>
      {component}
    </Provider>,
  ),
  store,
});

export default renderWithRedux;