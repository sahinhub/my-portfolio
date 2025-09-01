import { Link, NavLink, useNavigate } from 'react-router';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/contact-me');
    };

    const [isOpen, setOpen] = useState(false);

    const navlinks = [
        { path: '/', label: 'Home' },
        { path: '/about-me', label: 'About Me' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact-me', label: 'Contact Me' },
    ];

    return (
        <div className="container mx-auto overflow-hidden">
            <div className="navbar relative">
                {/* Logo */}
                <div className="navbar-start">
                    <NavLink to="/" className="text-xl">
                        <img className="w-10" src="/public/logo.svg" alt="Sahin" />
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-3 space-x-8 transition-all">
                        {navlinks.map(link => (
                            <li key={link.path}>
                                <Link to={link.path} className="text-lg menuLink">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="navbar-end space-x-4 relative">
                    <ThemeToggle />
                    <button
                        onClick={handleNavigate}
                        className="btnGradient px-6 py-2 rounded-md dark:text-primary cursor-pointer text-xl"
                    >
                        Lets talk
                    </button>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setOpen(!isOpen)}
                            className="btn btn-circle cursor-pointer relative"
                        >
                            {/* Hamburger / Close Icons */}
                            {isOpen ? (
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512"
                                >
                                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                </svg>
                            ) : (
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                </svg>
                            )}
                        </button>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
