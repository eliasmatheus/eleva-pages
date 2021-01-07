import React, { useState } from 'react';

// CSS
import './styles.css';

// Components
import Footer from '../../components/footers/CheckoutFooter';
import HeaderSignup from '../../components/HeaderSignup';
import CreateAccountCard from '../../components/cards/CreateAccount';

const SignupAddress = () => {
  document.title = 'Criar Conta Premium | Elevagro';

  const [isLoggedIn] = useState(() => {
    return JSON.parse(
      localStorage.getItem('@elevagro-app/viewer-status|is-logged-in'),
    );
  });

  return (
    <div id="page-signup">
      <HeaderSignup />

      <main>
        <CreateAccountCard renderPage={isLoggedIn ? 2 : 1} />
      </main>

      <Footer />
    </div>
  );
};

export default SignupAddress;
