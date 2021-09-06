import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../src/store/reducers'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// config store for storybook
const storeInit = createStore(reducer)
export const decorators = [
  (Story) => (
    <Provider store={storeInit}>
      <Story />
    </Provider>
  ),
]