import './App.css'
import HomePage from './HomePage.jsx';
import Card from './compos/Card'

function App() {
 

  return (
    <>
      <HomePage />
     
      <Card description="Description de l'hotel a3ti li 3andek" title="Hotel Mr Othmen Jnayeh" location="Sousse/sahloul" price="150dt" stars={4} />
    </>
  )
}

export default App
