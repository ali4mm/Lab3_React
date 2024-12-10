'use client' //
import React, { useState } from 'react'
import Header from './HeaderPage'
import styles from './stylePage.module.css'

function UserEmail(props) {
    const [checkEmails, setcheckEmails] = useState('')
    function handleClick() {
        return setcheckEmails(true)
    }
    function showEmail() {
        if (checkEmails) {
            return (
                <div>
                    <h3> The Users Email</h3>
                    {props.emails.map((email, index) => (
                        <h3 key={index}>{email}</h3>
                    ))}
                </div>
            )
        }
        return null
    }
    return (
        <div className={styles.buttonTogether}>
            <h5>Click the button to see all emails</h5>
            <button className={styles.emailButton} onClick={handleClick}>
                Show Emails
            </button>

            {showEmail()}
        </div>
    )
}

export default UserEmail
