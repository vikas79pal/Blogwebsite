import axios from "axios";
import { useContext, useEffect } from "react";
import { baseUrl } from "./baseurl";
import Header from "./components/Header";
import Pagination from './components/Pagination'
import Blogs from "./components/Blogs"
import { AppContext } from "./context/AppContext";
import "./App.css"

function App() {
  const {fetchBlogPost}=useContext(AppContext)
  useEffect(()=>{
  fetchBlogPost()
    
  },[])
  return (
    <div >
<Header/>
<Blogs/>
<Pagination/>
    </div>
  );
}

export default App;
