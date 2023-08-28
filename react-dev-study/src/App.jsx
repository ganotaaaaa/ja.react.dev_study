import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { getImageUrl } from './utils.jsx';

const Profile = ({name,profession,awardsNum,awards,src,discoverd}) => {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(src)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b> 
          {profession}
        </li>
        <li>
          <b>Awards: {awardsNum} </b> 
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discoverd}
        </li>
      </ul>
    </section>
  )
}

export default function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        name = 'Maria Skłodowska-Curie'
        profession = 'physicist and chemist'
        awardsNum = {4}
        src = 'szV5sdG'
        awards = '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'
        discoverd = 'polonium (element)'
      />
      <Profile 
        name = 'Katsuko Saruhashi'
        profession = 'geochemist'
        awardsNum = {2}
        src = 'YfeOqp2'
        awards = '(Miyake Prize for geochemistry, Tanaka Prize)'
        discoverd = 'a method for measuring carbon dioxide in seawater'        
      />
    </div>
  );
}
