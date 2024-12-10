
'use client' //
import React, { useState } from 'react'
import Header from './HeaderPage'
import styles from './stylePage.module.css'

function UserName(props) {
    const [checkNames, setcheckNames] = useState('');
    function handleClick() {
        return setcheckNames(true);
    }
function showName(){
if (checkNames){
   return(
      <div>
         <h3> The Users name</h3>
         {props.names.map((name, index)=>
            (<h3 key={index}>{name}</h3>

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
            <h5>Click the button to see all Names</h5>
            <button className={styles.nameButton} onClick={handleClick}>
                Show Names
            </button>
          {showName()}
                </div>


    );
}

export default UserName;
