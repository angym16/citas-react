import React from 'react'
import ReactDOOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ReactDOM.render(
//   <>
//     <App/>
//   </>,
//   document.getElementById('root')
// )