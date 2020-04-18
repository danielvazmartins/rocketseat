import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './NewOng.scss'
import Logo from '../../assets/logo.svg'

export default function NewOng() {

    function handleSubmit(e) {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <div className="content">
            <div className="panel">
                <section className="info">
                    <img src={Logo} className="logo" alt="Be The Hero"/>
                    <h3 className="title">Cadastro</h3>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="link"><FiArrowLeft color="#e01e41" /> Voltar para o logon</Link>
                </section>
                <section>
                    <form onSubmit={e => handleSubmit(e)}>
                        <input type="text" name="name" placeholder="Nome da ONG" />
                        <input type="email" name="email" placeholder="E-mail" />
                        <input type="text" name="whatsapp" placeholder="WhatsApp" />
                        <div className="form-line">
                            <input type="text" name="cidade" placeholder="Cidade" />
                            <input type="text" name="uf" placeholder="UF" style={{ width: '80px' }}/>
                        </div>
                        <button type="submit" className="button">Cadastrar</button>
                    </form>
                </section>
            </div>
        </div>
    )
}