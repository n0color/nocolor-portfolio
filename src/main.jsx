import { StrictMode } from 'react'
import { 
  BrowserRouter, 
  createBrowserRouter, 
  RouterProvider, 
  Route, 
} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.scss'

import App from './App.jsx'
import PdfViewer from './CV.jsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: 
  },
  {
    path: '/cv',
    element: <PdfViewer />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)