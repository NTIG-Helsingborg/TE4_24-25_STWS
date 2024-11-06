import React from 'react'
import Coob from '../Components/Coob'
import bear from "../Assets/Pic1.png"
import lion from "../Assets/Pic2.png"
import sloth from "../Assets/pic3.png"
import Characters from "../Assets/Characters.png"
import Films from "../Assets/Films.png"
import Planets from "../Assets/Planets.png"
import StarShips from "../Assets/StarShips.png"
import Species from "../Assets/Species.png"
import Vehicles from "../Assets/Vehicles.png"





const page = () => {
  return (
<>
  
  <div className='flex flex-row'>
      <Coob img = {Characters} header='Characters' text='Sloth is lazy'cart='/navi/characters'></Coob>
      <Coob img ={Films} header='Films' text='Lion is cool'cart='/navi/films'></Coob>
      <Coob img={Planets} header='Planets' text='Bear we love bear'cart='/navi/planets'></Coob>
  </div>
  <div className='flex flex-row pt-12'>
     <Coob img = {Species} header='Species' text='Sloth is lazy'cart='/navi/species'></Coob>
      <Coob img ={StarShips} header='Starships' text='Lion is cool'cart='/navi/starships'></Coob>
      <Coob img={Vehicles} header='Vehicles' text='Bear we love bear' cart='/navi/vehicles'> </Coob> 
  
  </div>
</>
  )
}

export default page