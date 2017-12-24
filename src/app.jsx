import React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'
import GameStore from './store/GameStore'

@observer
class App extends React.Component {
  render () {
    console.log(this.props)
    return (
      <h1>{this.props.data.sampleValue}</h1>
    )
  }
}

const store = new GameStore();
render (
  <App data={store}/>,
  document.getElementById('app')
)
