import "./app.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Layout } from "./containers";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
