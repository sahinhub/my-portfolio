import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className=" bottom-0 footer sm:footer-horizontal footer-center dark:bg-gray-950 py-4">
             
            <aside>
                <p className='text-primary text-[12px] lg:text-base '>© {new Date().getFullYear()} - All Right Reserved by Sahinhub | Designed by Sahin | Inspired by <Link className='link text-sm lg:text-lg no-underline ' to={'https://wenextcoder.com/'}>Next Coder</Link></p>
            </aside>
        </footer>
    );
};

export default Footer;