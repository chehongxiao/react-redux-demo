import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import reducer from './reducers'

const store = createStore(reducer); // store.dispatch() 后执行reducer
console.log('开始');
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => {store.dispatch({ type: 'INCREMENT' }),console.log('state：'+store.getState());}} // 加
    onDecrement={() => {store.dispatch({ type: 'DECREMENT' }),console.log('state：'+store.getState());}} // 减
  />,
  rootEl
)

render()
store.subscribe(render)
