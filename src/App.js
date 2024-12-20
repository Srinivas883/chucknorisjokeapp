import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchjokes } from "./jokeslice"
import './App.css'

function App() {

  const [category, setCategory] = useState("")
  const joke = useSelector(function (state) { return (state.joke.joke) })
  const dispatch = useDispatch()

  function handleChangeCategory(e) {
    setCategory(e.target.value)

  }
  function handleFetch() {
    dispatch(fetchjokes(category))
  }

  return (
    <>
      <input value={category} onChange={handleChangeCategory} type="text" />
      <button onClick={handleFetch}>Get Jokes</button>
      <h1>{joke}</h1>
    </>
  )
}

export default App