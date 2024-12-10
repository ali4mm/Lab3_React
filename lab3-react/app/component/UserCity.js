'use client' 
import React, { useState } from 'react'
import Header from './HeaderPage'
import styles from './stylePage.module.css'

function UserCity(props) {
    const [checkCities, setcheckCities] = useState('');
    function handleClick() {
        return setcheckCities(true);
    }
function showCity(){
if (checkCities){
   return(
      <div>
         <h3> The Users city</h3>
         {props.cities.map((city, index)=>
            (<h3 key={index}>{city}</h3>

            )
            )
            }
      </div>
   );
}
return null;
}
    return (
        <div className={styles.buttonTogether} >
            <h5>Click the button to see all Cities</h5>
            <button className={styles.cityButton} onClick={handleClick}>
                Show Cities
            </button>

          {showCity()}
                </div>


    );
}

export default UserCity;
