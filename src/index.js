import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StorecontextProvider from './Context/Storecontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <BrowserRouter>
    <StorecontextProvider>
      <App></App>
    </StorecontextProvider>
  </BrowserRouter>

</div>

)


