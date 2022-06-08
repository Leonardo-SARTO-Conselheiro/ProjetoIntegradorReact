import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'



function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    const [id, setId] = useLocalStorage('id');
    let navigate = useNavigate();

    function goLogout(){
        setToken('')
        setId('')
        alert("Usuário deslogado")
        navigate('/login')
    }

    return (
        <>
            <header>
                <nav>
                    <img className="nav-logo" src="https://i.imgur.com/FyqHkFH.png" alt="Imagem Tela Inicial"/>
                        <ul className="nav-list">
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/sobrenos">Sobre</a>
                            </li>
                            <li>
                                <a href="/">Produtos</a>
                            </li>
                            <li>
                                <a href="/contato">Contato</a>
                            </li>
                            <li>
                                <a className='icon' href="/">
                                    <img  src="https://i.imgur.com/TX0KzDA.png" alt=""/>
                                </ a>    
                            </li>
                            <li>
                                <a className='icon2' href="/login">
                                    <img src="https://i.imgur.com/rBljdCZ.png" alt=""/>
                                </ a>    
                            </li>
                            <li onClick={goLogout}>
                                    <img className='logout' src="https://i.imgur.com/wVlnv0e.png" alt=""/>   
                            </li>
                        </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;