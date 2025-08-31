
import { Outlet } from 'react-router';
import './app.css'
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
