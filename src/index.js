/**
 * Imports
 */

import {createStore, applyMiddleware} from 'redux'
import combineReducers from '@f/combine-reducers'
import composeReducers from '@f/compose-reducers'
import component from 'virtex-component'
import ephemeral from 'redux-ephemeral'
import local from 'virtex-local'
import multi from 'redux-multi'
import dom from 'virtex-dom'

/**
 * Default middleware
 */

const defaults = [
  local('app'),
  component,
  dom(document),
  multi
]

/**
 * vdux-client
 */

function client (...middleware) {
  const configStore = applyMiddleware(...defaults, ...middleware)(createStore)

  return (reducer, initialState = {}) => {
    const finalReducer = composeReducers(
      reducer,
      combineReducers({
        app: ephemeral
      })
    )

    initialState.app = initialState.app || {}
    return configStore(finalReducer, initialState)
  }
}

/**
 * Exports
 */

export default client
