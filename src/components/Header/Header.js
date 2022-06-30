import React, { useState } from 'react'
import './header.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
  
const Header = () => {

  const dispatch = useDispatch();
  const themeState = useSelector(state => state.lightTheme)
  const theme = themeState?"Dark Theme":"Light Theme"
  const toggler = () => {
    dispatch({ type: 'TOGGLE' })
    console.log(themeState);
  }
  const history = useHistory();
  const takeHome = () => {
    history.push('/')
  }

  const [query, setQuery] = useState("");
  
  const searchExec = () => {
    history.push({
      pathname: '/view/results',
      state: query
    }
    )
  }

  return (
    <div className='header' style={{height: '11vh'}}>
        <img
            src="https://brandlogos.net/wp-content/uploads/2017/08/download-youtube-new-logo.jpg"
            alt="Youtube"
            onClick={takeHome}
            className='logo'
            style={{cursor: 'pointer'}}
        
        />              
      <input
        type="text"
        className="seach-bar"
        onChange={(event) =>{setQuery(event.target.value)}}
        placeholder='Search' style={{ "margin-left": "15%", width: "30%", backgroundColor: 'transparent' }} />
        <button
          onClick={searchExec}
              style={{ color: "white", backgroundColor:'transparent', marginLeft:'1px' }}
          > 🔎</button>
              
      <i className="fa-solid fa-bell fa-lg" style={{ marginLeft: "10%", fontSize:"1.5rem" }}></i>
      <i className="fa-solid fa-list-alt fa-lg" style={{ marginLeft: "5%", fontSize:"1.5rem" }}></i>
      <i class="fa-solid fa-user" style={{ marginLeft: "5%" , fontSize:"1.5rem"}}></i>
      
      <button
        onClick={toggler}
        style={{ marginLeft: "5%", backgroundColor:"#d1362a", color:"white", border:'none', borderRadius:'5px'}}>{theme}</button>  
      
          
    </div>
  )
}

export default Header