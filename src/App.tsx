import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesApp } from "./routes";
import { Toaster } from "react-hot-toast";

import AOS from 'aos';

import { AuthProvider } from "@/contexts/authContext";
import { HomeAppProvider } from '@/contexts/homeAppContext';

import "./styles/styles.css";
import "./styles/tailwind.css";
import 'react-loading-skeleton/dist/skeleton.css'
import 'aos/dist/aos.css';



export const App: React.FC = () => {

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    // window.addEventListener('load', AOS.refresh)
    // if (document.readyState == "complete") AOS.refresh();
  }, []);

  return (
    <Router>
      <AuthProvider>
        <HomeAppProvider>
        <Toaster />
        <RoutesApp />
        </HomeAppProvider>
      </AuthProvider>
    </Router>

  );


}


