import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/*
ReactDOM.render(<h1>hello world</h1> , document.getElementById("root"))


React.DOM.render function is appending the first parameter to the second parameter 
*/
