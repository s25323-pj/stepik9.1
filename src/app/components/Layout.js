import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => (
    <div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/contact/us">Contact US</Link></li>
                <li><Link href="/contact/pl">Contact PL</Link></li>
                <li><Link href="/contact/de">Contact DE</Link></li>
            </ul>
        </nav>
        <main>{children}</main>
    </div>
);

export default Layout;
