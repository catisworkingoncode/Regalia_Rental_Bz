import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
