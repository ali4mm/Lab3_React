'use client'
import React from 'react'
import styles from '../stylePage.module.css'


function Socialmedia() {
   const handleClick=()=>{
      alert('Facebook');
   };
   const handleClick1=()=>{
      alert('Instgram');
   };
  return (
    <div className={styles.button-container} >

<button className={styles.socialStyle} onClick={handleClick}>Facebook</button>
<br/>
<button className={styles.socialStyle1} onClick={handleClick1}>Instgram</button>




      </div>
  )
}

export default Socialmedia
