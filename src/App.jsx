import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/blogs'
import BookMarks from './Component/Bookmarks/BookMarks'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookmark = (blog) => {
     const newBookmarks = [...bookmarks, blog];
     setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>

      <main className='md:flex max-w-7xl mx-auto'>

        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead ={handleMarkAsRead}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>

      </main>
    </>
  )
}

export default App
