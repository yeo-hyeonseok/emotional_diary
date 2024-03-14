import { Route, Routes } from "react-router-dom";
import Layout from "Layout";
import Home from "pages/Home";
import Todo from "pages/Todo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Layout>
  );
}

export default App;
