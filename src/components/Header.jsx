"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ employerName }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Commenting out the router-related code for now
  // const [router, setRouter] = useState(null);
  // const handleLogout = () => {
  //   if (router) {
  //     router.push('/page');
  //   }
  // };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="404" width={190} height={190} className="mr-2" />
      </div>
      <div className="flex items-center">
        <span className="mr-2">{employerName}</span>
        {isLoggedIn ? (
          <Link href="/" className="border-2 border-white rounded px-4 py-2 hover:bg-white hover:text-gray-800">
              Logout
            
          </Link>
        ) : (
          <span>Not Logged In</span>
        )}
      </div>
    </header>
  );
};

export default Header;
