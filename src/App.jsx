
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmakes from './components/Bookmakes/Bookmakes'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handleAddBookmark = blog => {
 const newBookmark = [...bookmarks, blog];
 setBookmarks(newBookmark);
}

const handleMarkAsRed = (id, time) => {
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
  // remove the read blog from bookmark
  // console.log('remove bookmark', id)
  const remaingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remaingBookmarks)
}

  return (
    <div>
    
      <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRed={handleMarkAsRed}> </Blogs>
     <Bookmakes bookmarks={bookmarks} readingTime={readingTime}></Bookmakes>
     </div>
      
    </div>
  )
}

export default App
