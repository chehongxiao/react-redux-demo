import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    console.log("初始化渲染render");
    console.log("重新渲染，最新state："+this.props.value);
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        点击了:: {value} 次
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          奇数时累加
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          异步累加
        </button>
      </p>
    )
  }
}

export default Counter
