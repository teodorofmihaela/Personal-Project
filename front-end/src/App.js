import Route from 'react';
import Routes from 'react';
import './App.scss';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Navbar/>
    </Routes>
    </>
  );
}

export default App;
