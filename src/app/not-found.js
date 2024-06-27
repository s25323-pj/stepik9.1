"use client";


import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    return <h1>Nie znaleziono elementu: {pathname}</h1>;
}
