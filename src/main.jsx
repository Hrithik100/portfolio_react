import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "aos/dist/aos.css"
import "remixicon/fonts/remixicon.css"
import { Provider } from 'react-redux'
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
