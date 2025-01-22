
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts/:id" element={<PostDetails/>}/>
      <Route path="/create-post" element={<CreatePost/>}/>
      <Route path='/search' element={<SearchResults/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
