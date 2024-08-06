import { useState } from 'react'
import { ScreenContainer } from './components/ScreenContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScreenContainer></ScreenContainer>
    </>
  )
}

export default App
