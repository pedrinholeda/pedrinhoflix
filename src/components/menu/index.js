import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './menu.css'
// import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img class="Logo" src={Logo} alt="Pedrinhoflix Logo"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;