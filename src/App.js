import React, { useState } from 'react'
import './App.css'
import Footer from './Footer'
const data = {
  Forest: [
    {
      name: 'alpah fortest',
      rating: 'rating : 5',

      palace: 'delli',
      image: './images/forest-one.jpg'
    },
    {
      name: 'zeron gate',
      rating: 'rating : 3',

      palace: 'zeron',
      image: './images/forest-two.jpg'
    },
    {
      name: 'musk bian',
      palace: 'eitger',
      rating: 'rating : 2',

      image: './images/forest-three.jpg'
    }
  ],
  Mountain: [
    {
      name: 'cloutdinga',
      palace: ' itel mbai',
      rating: 'rating : 5',
      image: './images/mount-one.jpg'
    },
    {
      name: 'marine peak ',
      palace: 'navi  mumbai',
      rating: 'rating : 3',

      image: './images/mount-two.jpg'
    },
    {
      name: 'pateian jikara',
      palace: 'xg-mbay',
      rating: 'rating : 0',

      image: './images/mount-three.jpg'
    }
  ],
  Ocean: [
    {
      name: 'Hanging ocian',
      palace: 'mumbai',
      rating: 'rating : 4',

      image: './images/sea-one.jpg'
    },
    {
      name: 'indianna beach ',
      palace: 'navi  mumbai',
      rating: 'rating : 5',

      image: './images/sea-two.jpg'
    },
    {
      name: 'Jelly Caves',
      palace: 'bombay',
      rating: 'rating : 5',

      image: './images/sea-three.jpg'
    }
  ],
  Desert: [
    {
      name: 'Stone age ',
      palace: 'rajasthan',
      rating: 'rating : 3',

      image: './images/desert-one.jpg'
    },
    {
      name: 'maxrrine beaoinch ',
      palace: 'Roaxard desert',
      rating: 'rating : 5',

      image: './images/desert-two.jpg'
    },
    {
      name: 'Light power',
      palace: 'poblia dixon',
      rating: 'rating : 5',

      image: './images/desert-three.jpg'
    }
  ]
}

const App = () => {
  const [cityName, setCityName] = useState(data.Forest)
  const handleCityName = city => {
    setCityName(data[city])
  }
  return (
    <>
      <header className='hero'>
        <h1 className='hero-heading'>Planet Earth</h1>
        <h3 className='hero-heading'>World's most inspiring natural Wonders</h3>
      </header>

      <section>
        <div className='container container-center section-center'>
          {Object.keys(data).map(city => {
            return (
              <div className='container btn-center'>
                <button
                  className='earth-btn '
                  key={city}
                  onClick={() => {
                    handleCityName(city)
                  }}
                >
                  {city}
                </button>
              </div>
            )
          })}
        </div>
        <ul>
          {cityName.map(city => {
            return (
              <li key={city.title}>
                <div className='img-container'>
                  <img src={city.image} alt='img' className='city-image' />
                </div>
                <p className='earth-location'>{city.name}</p>
                <p className='earth-location'>{city.palace}</p>
                <p className='earth-location'>{city.rating}</p>
              </li>
            )
          })}
        </ul>
      </section>
      <hr style={{ color: 'red' }} />
      <Footer />
    </>
  )
}

export default App
