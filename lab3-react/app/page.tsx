//Name Ali Kazem ...create 9 component and i fetch  data from API ,I used them in components and I make 3 test component
//UserEmail.test.js ,HeaderPage.test.js and Socialmedia.test.js ,I using npm test and I apploy the app to vercal 
import React from 'react'
import Footer from './component/Footer'
import HeaderPage from './component/HeaderPage'
import NavBar from './component/NavBar'
import UserEmail from './component/UserEmail'
import UserName from './component/UserName'
import styles from './component/stylePage.module.css'
import UserCity from './component/UserCity'


async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return users
}

async function Page() {
    const users = await fetchData()
    const emails = users.map((user) => user.email)
    const names = users.map((user) => user.name)
    const cities = users.map((user) => user.address.city)

    return (
        <div>
            <HeaderPage />
            <h1 className={styles.textStyle}>Fetch Email,Name and City from external Api</h1>

            <header className={styles.headStyle}>
                <UserEmail emails={emails} />
                <UserName names={names} />
                <UserCity cities={cities} />

            </header>

            <Footer />
            <NavBar />

        </div>
    )
}

export default Page
