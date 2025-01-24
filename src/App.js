
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

import SearchResults from "./pages/SearchResults";
import AddPost from './componets/AddPost';

function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts/:id" element={<PostDetails/>}/>
      <Route path="/add-post" element={<AddPost/>}/>
      <Route path='/search' element={<SearchResults/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
