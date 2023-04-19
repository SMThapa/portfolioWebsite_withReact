import { useState } from 'react'
import logo from '../image/logo3.png'

export const Header = () => {

  const [bdColor, setBgColor] = useState('#DDD6CE')
  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 600){
      setBgColor('#EEEAE3')
    }else{
      setBgColor('#DDD6CE')
    }
  })

  const hamburgerButton = document.querySelector('header .hamburger-menu');
  const handleButton = () =>{
    hamburgerButton.classList.toggle('closed');
  }

  return (
    <header>
      <div className="hamburger-menu closed">
        <button onClick={()=>handleButton()}><img src="https://img.icons8.com/ios-filled/150/null/delete-sign--v1.png" alt=''/></button>
        <div className="links">
          <a href="#home" onClick={()=>handleButton()}><h1>home</h1></a>
          <a href="#about" onClick={()=>handleButton()}><h1>about</h1></a>
          <a href="#projects" onClick={()=>handleButton()}><h1>projects</h1></a>
          <a href="#contact" onClick={()=>handleButton()}><h1>contacts</h1></a>
        </div>
      </div>
      <nav style={{backgroundColor:`${bdColor}`}}>
        <div className="brand">
            <img src={logo} alt="" />
        </div>
        <div className="nav-container">
          <div className="links">
              <a href="#home">home</a>
              <a href="#about">about</a>
              <a href="#projects">projects</a>
              <a href="#contact">contact</a>
          </div>
        </div>
        <div className="social-media">
          <a target='_blank' rel='noreferrer' href="https://twitter.com/SMThapa23"><img src="https://img.icons8.com/ios/50/null/github--v1.png" alt=''/></a>
          <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/siddharth-m-thapa-41b233269/"><img src="https://img.icons8.com/ios/50/null/linkedin.png" alt=''/></a>
          <a target='_blank' rel='noreferrer' href="https://github.com/SMThapa"><img src="https://img.icons8.com/ios/100/null/twitter--v1.png" alt=''/></a>
        </div>
        <div className="menu">
          <img onClick={()=>handleButton()} src="https://img.icons8.com/material/48/null/menu--v1.png" alt=''/>
        </div>
      </nav>
    </header>
  )
}
