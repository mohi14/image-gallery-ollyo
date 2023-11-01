import './App.css'
import ImageCard from './components/ImageCard'

function App() {


  return (
    <>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, idx) => <ImageCard item={item} key={idx} />)}
      </div>
    </>
  )
}

export default App
