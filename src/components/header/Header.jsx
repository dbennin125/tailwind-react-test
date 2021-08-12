import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header aria-label="Header" className={headCSS}>
    <h1  >Welcome</h1>
    <ul  className={nav}  >
      <NavLink 

        to="/"
        exact
        activeClassName={active}
      >
    Home
      </NavLink>

      <NavLink 
    
        to="/workout"
        activeClassName={active}
      >
    Workouts
      </NavLink>

    </ul>
  </header>
);

const headCSS = `
grid grid-cols-2 gap-4
text-center
p-4
bg-gradient-to-r from-green-200 via-cyan-500 to-blue-200
`;

// const linkCSS = `
// justify-evenly
// `;

const nav = `
grid grid-cols-2 gap-2
grid-span-2
bg-white
text-black
bg-gradient-to-r from-white via-cyan-200
`;

const active = `
text-white
bg-<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
`;
// bg-gradient-to-r from-green-400 via-cyan-50 to-black
// <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

// bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
// m-6
// bg-gradient-to-r from-cyan-400 to-sky-500 
// text-white
