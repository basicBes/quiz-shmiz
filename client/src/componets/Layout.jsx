import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Layout() {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
}
