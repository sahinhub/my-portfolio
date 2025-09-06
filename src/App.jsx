
import { Outlet } from 'react-router';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Analytics } from "@vercel/analytics/next"

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
