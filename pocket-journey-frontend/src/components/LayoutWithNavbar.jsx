// components/LayoutWithNavBar.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const LayoutWithNavBar = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default LayoutWithNavBar;
