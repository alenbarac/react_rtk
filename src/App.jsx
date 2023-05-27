import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
