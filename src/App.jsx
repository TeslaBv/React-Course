import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Card from './components/card'
import { db } from './data/db'



function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  function addToCart(item) {
    if (cart.find( product => product.id === item.id )) {
      item.quantity += 1
      setCart( prev => [...prev])
      return
    }
    item.quantity = 1
    setCart( prev => [...prev, item])
    
  }
  
  return (
    <>
      <Header />
      <main className='container-xl mt-5'>
        <h2 className='text-center'>Nuestra Colección</h2>
        
        <div className='row mt-5'>
          {data.map((cloth) => (
            <Card
              key={cloth.id}
              cloth ={cloth}
              setCart={setCart}
              addToCart={addToCart}
              cart={cart}
            />
          ))}
        </div>
      </main>



      <footer className='bg-dark mt-5 py-5'>
        <div className='container-xl'>
          <p className='text-white text-center fs-4 mt-4 m-md-0'>
            Clothing Store - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
