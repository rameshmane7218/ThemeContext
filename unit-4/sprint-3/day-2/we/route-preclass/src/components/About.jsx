import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
  return (
    <div>
        About us:
        <p>We are best</p>
        <p>Thanks!</p>
        <button onClick={()=>{
            // server fetch();
            navigate("/products/newPage")
        }}>Submit</button>
    </div>
  )
}

export default About