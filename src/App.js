import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import AllProducts from "./routes/AllProducts";
import Categore from "./routes/Categore";
import Categores from "./routes/Categores";
import ProductDetails from './routes/ProductDetails'
// import RouterCategores from "./routes/RouterCategores";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllProducts />} />
          <Route path="/:productId" element={<ProductDetails />} />
          <Route path="/categores" element={<Categores />} />
          <Route path="categores/:categore" element={<Categore/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);