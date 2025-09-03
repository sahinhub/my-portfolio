import { Link, NavLink, useNavigate, useLocation } from 'react-router'; 
import ThemeToggle from './ThemeToggle';
import { useContext, useState, useEffect } from 'react'; 
import { ThemeContext } from '../context/themeContext';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isdark } = useContext(ThemeContext);
    const [isOpen, setOpen] = useState(false);


    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const handleNavigate = () => {
        navigate('/contact-me');
    };

    const navlinks = [
        { path: '/', label: 'Home' },
        { path: '/about-me', label: 'About Me' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact-me', label: 'Contact Me' },
    ];

    return (
        <div className="container mx-auto p-1 lg:p-0 ">
            <div className="navbar relative px-0 lg:p-2">
                {/* Logo */}
                <div className="navbar-start flex-1/6">
                    <NavLink to="/" className="text-xl">
                        <img className="w-10" src="https://i.postimg.cc/DymWhPxY/logo.png" alt="Sahin" />
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden justify-center items-center text-center lg:flex flex-3/6 ">
                    <ul className="menu-horizontal px-4 space-x-10 transition-all">
                        {navlinks.map(link => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={ `
                                    text-lg menuLink
                                    `}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Right Side */}
                <div className="navbar-end flex-1/2 lg:flex-1/6 space-x-4">
                    <ThemeToggle />
                    <div className={` hidden lg:block ${isdark && 'btnAnimation'} p-[1px] rounded-lg`}>
                        <button
                            onClick={handleNavigate}
                            className={`${isdark ? 'btnGradientDark' : 'btnBg'}  px-6 py-2 rounded-md dark:text-primary cursor-pointer text-xl`}
                        >
                            Lets talk
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden overflow-hidden">
                        <button
                            onClick={() => setOpen(!isOpen)}
                            className="border border-[#b6b6b632] bg-transparent p-1 btn rounded-lg cursor-pointer transition-rotate duration-500 "
                        >
                            {/* Hamburger / Close Icons */}
                            {isOpen ? (
                                <svg
                                    className="fill-current transform rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 512 512"
                                >
                                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                </svg>
                            ) : (
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Dropdown */}
                        <div className={`z-10 top-14 right-0 w-full absolute h-auto transition-all ${isdark ? 'menuBGDark' : 'menuBGLight'} duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 flex' : 'opacity-0 -translate-y-10 pointer-events-none'} py-2 rounded-lg p-2`}>
                            <ul className="space-x-3 space-y-2 w-full">
                                {navlinks.map(link => (
                                    <li
                                        key={link.path}
                                        className={` focus:bg-black
                                            ${isdark ? 'hover:bg-[#1616ff]' : 'hover:bg-black hover:text-white'} 
                                            transition-all duration-500 ease-in-out 
                                            py-2 px-3 rounded-md cursor-pointer w-full
                                        `}
                                    >
                                        <Link to={link.path} className="text-lg w-full block">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
