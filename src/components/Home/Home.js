import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className='home'>
    <h1>LITTLE TALES</h1>
    <h4>Reading is to the mind what exercise is to the body</h4>
    <button className='read-btn' onClick={()=>{ navigate('/book')}}>Read On</button>
    
    </div>
  )
}

export default Home