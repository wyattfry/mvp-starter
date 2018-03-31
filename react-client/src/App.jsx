import React from ('react');

const App = () => {
  console.log('window.location.pathname', window.location.pathname);
  if (window.location.pathname === '/submit') {
    return '<h1>Submission Form</h1>';
  }
  if (window.location.pathname === '/dashboard') {
    return '<h1>Dashboard</h1>';
  }
}