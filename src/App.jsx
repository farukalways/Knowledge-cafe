import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/blogs'
import BookMarks from './Component/Bookmarks/BookMarks'
import Header from './Component/Header/Header'

function App() {

  const [Bookmarks, setbookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
     console.log('Bookmarks Adding soon');
  }
  return (
    <>
      <Header></Header>

      <main className='md:flex max-w-7xl mx-auto'>

        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarks></BookMarks>

      </main>
    </>
  )
}

export default App
