
import { Outlet } from 'react-router';
import './App'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
   <div className=''>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  );
}

export default App
