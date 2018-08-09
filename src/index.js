import React from 'react'
import { render } from 'react-dom'

import App from './app'
import articles from './fixtures'

render(
    <App articles = {articles} />, 
    document.getElementById('root')
)