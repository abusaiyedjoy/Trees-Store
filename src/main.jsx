import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Importing router and providers
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Importing custom components
import AuthProvider from './Authentication/AuthProvider';
import router from './Router/Router';

// Main render function
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Authentication Provider */}
    <AuthProvider>
      {/* Routing Configuration */}
      <RouterProvider router={router} />
      {/* Toast Notifications */}
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
