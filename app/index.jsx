import React from 'react'
import ReactDOM from 'react-dom'

import Editor from './components/editor'

import './styles/index.less'

let appNode = document.createElement('div')
appNode.setAttribute('style', 'height: 100%')
document.body.appendChild(appNode)

ReactDOM.render(<Editor />, appNode)
