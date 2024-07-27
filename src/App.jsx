import './App.css';
import {HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layouts/Layout';
import TodosLayout from './Layouts/TodosLayout';
import NoPage from './components/common/NoPage';
import ProtectedRoute from './components/ProtectedRoute'; 
import Login from './components/auth/login/Login';

function App() {

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={
              <ProtectedRoute>
                <TodosLayout />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NoPage />} />
            <Route path="/login" element={<Login />} /> {/* Add the login route */}
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

