import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import TodosLayout from './Layouts/TodosLayout';
import NoPage from './components/common/NoPage';

function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout  />}>
          <Route index element={<TodosLayout  />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
