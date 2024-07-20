import logo from './logo.svg';
import './App.css';
import { useGetAllResource } from './hooks/useGetAllResource';
import { fetchTodos, getNetworkStatus, getTodos } from './reduxstore/features/todo/todoSlice';
import { useSelector } from 'react-redux';

function App() {

  useGetAllResource(fetchTodos());
   const apiStatus = useSelector(getNetworkStatus);
   const data = useSelector(getTodos);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
