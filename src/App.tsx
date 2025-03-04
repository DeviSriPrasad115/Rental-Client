import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Login from './pages/Login';

function App() {
  // For demonstration, let's show the login page if path is /login
  const isLoginPage = window.location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      {isLoginPage ? <Login /> : <Content />}
      <Footer />
    </div>
  );
}

export default App;