import { Route, Routes } from "react-router-dom";
import Layout from "Layout";
import Home from "pages/Home";
import Todo from "pages/Todo";
import User from "pages/User";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Layout>
  );
}

export default App;
