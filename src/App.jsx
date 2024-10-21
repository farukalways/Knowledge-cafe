import './App.css'
import Blogs from './Component/Blogs/blogs'
import BookMarks from './Component/Bookmarks/BookMarks'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
      <Header></Header>

      <main className='md:flex'>

      <Blogs></Blogs>
      <BookMarks></BookMarks>

      </main>
    </>
  )
}

export default App
