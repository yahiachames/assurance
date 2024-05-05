import React from 'react'
import {useLocation} from 'react-router-dom';
import "./AcheterAssurance.css"

function AcheterAssurance() {
    const location = useLocation();
    console.log(location)
  return (
    <div>AcheterAssurance</div>
  )
}

export default AcheterAssurance