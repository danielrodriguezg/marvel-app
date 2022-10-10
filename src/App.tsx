import SearchComponent from "./components/search";
import { Provider } from 'react-redux';
import configureStore from "./store";
import './app.css';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <SearchComponent/>
    </Provider>
  )
}

export default App
