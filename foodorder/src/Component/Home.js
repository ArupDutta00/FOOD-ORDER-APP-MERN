import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            {props.getdata.map((currentvalue, index) => {
                return index === 0 ?
                    <NavLink to='/pizza'><img id="pizza" src={currentvalue.image} align="center" width='500' height='500' alt=''></img></NavLink>
                    :
                    <NavLink to='/burger'><img id="burger" src={currentvalue.image} align="center" alt='' width='500' height='500'></img></NavLink>
            }
            )}
        </div>
    )
}

export default Home;
