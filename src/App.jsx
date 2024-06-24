import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./pages/DefaultLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import Post from "./pages/Post";

import GlobalContext from "./contexts/GlobalContext";

import "./App.css";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:postId" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
