import React from 'react';
import { FooterBase } from './styles';
import pedro from '../../assets/img/pedro.png'

import './footer.css'

function Footer() {
  return (
    <FooterBase>
      <a href="https://pedrinholeda.github.io/">
        <img class="Logo" src={pedro} alt="Logo Alura" />
      </a>
      <p>
      Feito com Codigo e Café por
        {' '}
        <a href="https://pedrinholeda.github.io/">
         @pedrinholeda
        </a>
        .
      </p>
    </FooterBase>
  );
}

export default Footer;
