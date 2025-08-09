import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Shopcontext } from "./SHOP/Context/Shopcontext.jsx";
import {Cartprovider} from './SHOP/Pages/Cart/Cartcontext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopcontext >
<Cartprovider>
      <BrowserRouter>
    < App />
    </BrowserRouter>
    </Cartprovider>
    </Shopcontext >
  </StrictMode>
)
