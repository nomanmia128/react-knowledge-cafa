
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmakes from './components/Bookmakes/Bookmakes'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([]);

const handleAddBookmark = blog => {
 const newBookmark = [...bookmarks, blog];
 setBookmarks(newBookmark);
}

  return (
    <div>
    
      <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
     <Bookmakes bookmarks={bookmarks}></Bookmakes>
     </div>
      
    </div>
  )
}

export default App
