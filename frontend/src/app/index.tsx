import { Routing } from "pages"
import { Provider } from 'react-redux'
import './App.scss'
import store from "./store"
function App() {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  )
}

export default App
