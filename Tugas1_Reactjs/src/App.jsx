import Home from "./pages";
import ProductList from "./components/shared/ProductList";
import { BrowserRouter, Route, Routes } from "react-router";
import Books from "./pages/Books";
import Group from "./pages/Group";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="book" element={<Books />} />
            <Route path="team" element={<Group />} />
            <Route path="kontak" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
