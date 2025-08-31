
import { Link, NavLink, useNavigate } from 'react-router';
import ThemeToggle from './ThemeToggle';
import './../App'


const Header = () => {
     const navigate= useNavigate();
    const handleNavigate=()=>{
   
        navigate('/contact-me')
    }

    const navlinks = <>
        <li><Link to='/' className='text-lg menuLink' >Home</Link></li>
        <li><Link to='/about-me' className='text-lg menuLink ' >About Me</Link></li>
        <li><Link to='/projects' className='text-lg  menuLink' >Projects</Link></li>
        <li><Link to='/contact-me' className='text-lg menuLink ' >Contact Me</Link></li>
    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar">
            <div className="navbar-start">
              
                <NavLink to={'/'} className="text-xl"><img className='w-10' src='/public/logo.svg' alt="Sahin" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-3 space-x-8 transition-all">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <ThemeToggle></ThemeToggle>
                <button onClick={handleNavigate} className=' btnGradient px-6 py-2 rounded-md dark:text-primary cursor-pointer text-xl'>Lets talk</button>
                  <div className="dropdown relative">

                    <div tabIndex={0} role="button" className=" lg:hidden cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#13024D] rounded-box z-1 mt-4 w-52 p-2 shadow absolute right-0">
                        {
                            navlinks
                        }
                    </ul>


                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;