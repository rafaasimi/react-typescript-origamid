import { NavLink } from 'react-router-dom'

import resumoIcon from '../assets/icons/resumo.svg';
import vendasIcon from '../assets/icons/vendas.svg';
import webhooksIcon from '../assets/icons/webhooks.svg';
import configuracoesIcon from '../assets/icons/configuracoes.svg';
import contatoIcon from '../assets/icons/contato.svg';
import sairIcon from '../assets/icons/sair.svg';
import FintechSVG from '../assets/FintechSVG';

export function Sidenav() {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title='Fintech'/>

      <ul>
        <li>
          <span>
            <img src={resumoIcon} alt="" />
          </span>
          <NavLink to={'/'}>Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendasIcon} alt="" />
          </span>
          <NavLink to={'/vendas'}>Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooksIcon} alt="" />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoesIcon} alt="" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <img src={contatoIcon} alt="" />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={sairIcon} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
}
