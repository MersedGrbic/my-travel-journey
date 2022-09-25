import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './Data'
function App() {
  const dataList = data.map(place=>{
    return (
      <Card 
      title={place.title}
      location={place.location}
      googleMapsUrl={place.googleMapsUrl}
      startDate={place.startDate}
      endDate={place.endDate}
      description={place.description}
      img={place.imageUrl}

      />
    )
  })

  return (
    <div className="App">
      <Footer />
      {dataList}
    </div>
  )
}

export default App
