import React from 'react';
import './App.css';
import { LanguageSelector } from './components/LanguageSelector';

export default function App () {
  return (
    <div className="page-wrapper">
      <header>
        <div className="logo shadow-neo">LOGO</div>
        <LanguageSelector />
      </header>
      <main>
        <div className="text">
          
        </div>
      </main>
      <footer>Copyright 2023 - José Gerardo López Arroyo - All Rights Reserved</footer>
    </div>
  );
}


