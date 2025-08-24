import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ShopProvider } from "./SHOP/Context/Shopcontext.jsx";
import {Cartprovider} from './SHOP/Pages/Cart/Cartcontext.jsx';
import { Authprovider } from "./SHOP/Context/Authcontext.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider >
<Cartprovider>
  <Authprovider>
      <BrowserRouter>
    < App />
    </BrowserRouter>
    </Authprovider>
    </Cartprovider>
    </ShopProvider >
  </StrictMode>
)
