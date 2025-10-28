import {Provider} from 'react-redux'
import feedbackStore from './store.js'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={feedbackStore}>
    <App />
    </Provider>
  
)
