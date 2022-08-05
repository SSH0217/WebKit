import { BrowserRouter, Route, Routes } from "react-router-dom"
import Aboutus from "./inc/Aboutus";
import Contact from "./inc/Contact";
import Header from "./inc/Header"
import Lecture from "./inc/Lecture";
import Main from "./inc/Main"
import Product from "./inc/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/product" element={<Product />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
