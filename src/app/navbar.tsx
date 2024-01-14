'use client'
import Image from 'next/image'
import { useState } from 'react';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-dark text-white flex justify-between items-center p-4">
            <button onClick={() => setIsOpen(!isOpen)}>
                <Bars3Icon className="h-6 w-6 text-gray-200" />
            </button>
            <div className="flex items-center">
                <Image src="/logo-horizontal-white.svg" alt="Hello Stavanger" width={205} height={36} />
            </div>
            <button>
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-200" />
            </button>
        </nav>
    );
};

export default NavBar;