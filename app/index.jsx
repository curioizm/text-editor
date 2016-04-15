import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import './styles/index.less'

let appNode = document.createElement('div')
document.body.appendChild(appNode)

ReactDOM.render(<App />, appNode)
