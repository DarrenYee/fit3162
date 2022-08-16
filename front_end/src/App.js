import './App.css';

import '@fontsource/roboto/400.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import SignIn from './pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
