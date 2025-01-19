
import Link from 'next/link';
import React from 'react';

const Header = () => {
      const navMenu = [
          {
            label: "Home", slug:'/'
          },
          {
            label: "About", slug:'/about'
          },
          {
            label: "Contact", slug:'/contact'
          },
          {
            label: "Login", slug:'/auth/sign-in'
          },
          {
            label: "Register", slug:'/auth/sign-up'
          },
      ]
  return (
    <div className='border-4 '>
          <div className='flex justify-between'>
            <div><h2>Redux</h2></div>
            <div className='flex gap-6'>
              {
                navMenu.map((nav ,idx) => 
                  <Link key={idx} href={nav.slug} className='text-xl '> {nav.label} </Link>
                )
              }
            </div>
            <div><h3>icon</h3></div>
          </div>
    </div>
  );
};

export default Header;