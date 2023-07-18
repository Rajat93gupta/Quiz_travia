import React from 'react'
import { Link } from 'react-router-dom';
import '../Header.css'

const Header = () => {
  return (
    <div className='heading'>
      <Link to="/" className='header'>Quiz Trivia</Link>
      <hr className='HR'/>
    </div>
   
  )
}

export default Header;
