import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store.jsx'
import "./index.css"
import "./App.css"
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
           <Provider store={store}>
                   <App />
            </Provider>
    </BrowserRouter>
)
