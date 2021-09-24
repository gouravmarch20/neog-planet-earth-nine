import React, { useState } from 'react'
import './App.css'
const data = {
  Forest: [
    {
      name: 'alpah fortest',
      palace: 'delli',
      image: './images/forest-one.jpg'
    },
    {
      name: 'zeron gate',
      palace: 'new delhi',
      image: './images/forest-two.jpg'
    },
    {
      name: 'musk bian',
      palace: 'delhi',
      image: './images/forest-three.jpg'
    }
  ],
  Mountain: [
    {
      name: 'Hanging cloutdinga',
      palace: 'mumbai',
      image: './images/mount-one.jpg'
    },
    {
      name: 'marine peak ',
      palace: 'navi  mumbai',
      image: './images/mount-two.jpg'
    },
    {
      name: 'pateian jikara',
      palace: 'bombay',
      image: './images/mount-three.jpg'
    }
  ],
  Ocean: [
    {
      name: 'Hanging Gardens',
      palace: 'mumbai',
      image: './images/sea-one.jpg'
    },
    {
      name: 'indianna beach ',
      palace: 'navi  mumbai',
      image: './images/sea-two.jpg'
    },
    {
      name: 'Jelly Caves',
      palace: 'bombay',
      image: './images/sea-three.jpg'
    }
  ],
  Desert: [
    {
      name: 'Stone age ',
      palace: 'mumbai',
      image: './images/desert-one.jpg'
    },
    {
      name: 'marine beach ',
      palace: 'Road desert',
      image: './images/desert-two.jpg'
    },
    {
      name: 'Light power',
      palace: 'bombay',
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
               <h1 className="earth-location">{city.name}</h1>
              </li>
            )
          })}
        </ul>
      </section>

      <footer>
        <p>
          Developed by
          <a href='https://www.trixoon.com/' target='_blank'>
            Gourav
          </a>
        </p>
        <a href='https://www.instagram.com/gouravmarch20/'>
          {' '}
          <i class='fab fa-instagram' target='_blank'></i>
        </a>
        <a href='https://github.com/gouravmarch20/'>
          {' '}
          <i class='fab fa-github-square ' target='_blank'></i>
        </a>

        <a href='https://www.linkedin.com/in/gouravmarch20/' target='_blank'>
          {' '}
          <i class='fab fa-linkedin-in'></i>
        </a>
      </footer>
    </>
  )
}

export default App
