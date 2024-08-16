import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from './Pages/Home';
import NotFoundPage from "./Pages/NotFoundPage";
import "./css/Style.css";
import "./App.css";
import axios from 'axios';
import BodyShapeDetector from "./Pages/BodyShapeDetector";
import Product from "./components/Product";
import VeinTest from "./Pages/VeniTest";
import CheckoutAddress from "./Pages/CheckoutAddress";
import Payment from "./Pages/Payment";

const Cart = React.lazy(() => import('./Pages/Cart'));
const Shop = React.lazy(() => import('./Pages/Shop'));
const AboutUs = React.lazy(() => import('./Pages/About'));
const Contact = React.lazy(() => import('./Pages/Contact'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));
const QuizPage = React.lazy(() => import('./Pages/QuizPage'));
const Login = React.lazy(() => import('./Pages/Login'));
const SearchResults = React.lazy(() => import('./Pages/SearchResult'));
const CustomTShirt = React.lazy(() => import('./Pages/CustomTShirt'));
const FashionBlog = React.lazy(() => import('./Pages/FashionBlog'));
const Registration = React.lazy(() => import('./Pages/Registration'));
const Media = React.lazy(() => import('./Pages/Media'));
const Faq = React.lazy(() => import('./Pages/Faq'));
const Dresses = React.lazy(() => import('./Pages/Dresses'));
const PhotoUpload = React.lazy(() => import('./components/PhotoUpload'));

const AppRoutes = () => {
  const location = useLocation();
  const excludeHeaderFooter = ['/login', '/Register'].includes(location.pathname);

  return (
    <>
      {/* Conditionally render Header and Footer */}
      {!excludeHeaderFooter && <Header />}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Registration />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/customize" element={<CustomTShirt />} />
          <Route path="/blog" element={<FashionBlog />} />
          <Route path="/color" element={<VeinTest />} />
          <Route path="/blog/:id" element={<FashionBlog />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path="/media" element={<Media />} />
          <Route path="/payment" element={<CheckoutAddress />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/bodyshape" element={<BodyShapeDetector />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </React.Suspense>
      {!excludeHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  const [response, setResponse] = useState(null);

  const testBackendConnection = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/test'); // Adjust the endpoint if necessary
      setResponse(res.data);
    } catch (error) {
      console.error('Error connecting to backend:', error);
      setResponse('Error connecting to backend');
    }
  };

  return (
    <div>
      <Router>
        <AppRoutes />
      </Router>
      <div>
        <button onClick={testBackendConnection}>Test Backend Connection</button>
        {response && <div>Response: {response}</div>}
      </div>
    </div>
  );
}

export default App;
