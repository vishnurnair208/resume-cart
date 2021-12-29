import React from 'react'
import HomeComponent from './Component/HomeComponent'
import "./HomeStyle.css"
import "./Component/HomeDescription"
import HomeDescription from './Component/HomeDescription'

const Home = () => {
    return (
        <div>
            <HomeComponent/>
            <HomeDescription/>
        </div>
    )
}

export default Home
