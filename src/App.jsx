import "./app.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Series, Films } from "./pages";
import { Layout } from "./containers";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
