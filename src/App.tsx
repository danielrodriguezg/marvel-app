import SearchComponent from "./components/search";
import { Provider } from 'react-redux';
import configureStore from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';
import ResultPageComponent from "./components/result";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<SearchComponent />} />
          <Route path='/detail' element={<ResultPageComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
