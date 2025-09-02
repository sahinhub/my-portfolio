import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import router from './routes/routes'; './routes/routes.jsx';

import './index.css'
import ThemeContext from './context/themeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContext>
      <RouterProvider router={router} />
    </ThemeContext>
  
  </StrictMode>
)
