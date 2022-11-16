import logo from './logo.svg';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './config/routing';
import store from './redux/store';

function App() {


  return (
    <div className="App">
      <Provider store={store} >
         <AppRouter />
      </Provider>

    </div>
  );
}

export default App;
