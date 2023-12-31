import './App.css'
import GalleryImageContainer from './components/GalleryImageContainer'
import Header from './components/Header'

function App() {


  return (
    <div className='container mx-auto my-[20px] bg-white  rounded-[10px]'>
      <Header />
      <GalleryImageContainer />
    </div>
  )
}

export default App
