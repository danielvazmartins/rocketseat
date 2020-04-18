import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './Login.scss'
import Logo from '../../assets/logo.svg'
import HeroesImg from '../../assets/heroes.png'

export default props => {
    const [ongId, setOngId] = useState('ong')

    function handleSubmit(e) {
        e.preventDefault()
        console.log('submit', ongId)
    }
    
    return (
        <div className="content">
            <section>
                <img src={Logo} alt="Be The Hero"/>
                <form onSubmit={e => handleSubmit(e)}>
                    <h3 className="title">Faça seu logon</h3>
                    <input type="text" placeholder="Seu ID" value={ongId} onChange={(e) => setOngId(e.target.value)}/>
                    <button type="submit" className="button">Entrar</button>
                    <Link to="signup" className="link"><FiLogIn color="#e01e41" /> Não tenho cadastro</Link>
                </form>
            </section>
            <section>
                <img src={HeroesImg} className='heroImg' alt="Be The Hero"/>
            </section>
        </div>
    )
}