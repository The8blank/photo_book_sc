import "./app.scss";
import { Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";
import { Layout } from "./containers";


function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series/:id" element={<div>SERIES</div>} />
          <Route path="/films/:id" element={<div>FILM</div>} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Layout>
  );
}

export default App;
