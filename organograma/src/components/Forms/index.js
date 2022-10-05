import { useState } from 'react';
import './index.css'
import CampoTexto from '../CampoTexto/index';
import ListaSuspensa from '../ListaSuspensa/index';
import{ times } from '../../utils/time';
import Botao from '../Botao/index';

export default function Forms({ onSubmit }) {
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [cargo, setCargo] = useState('');
    const [time, setTime] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            nome:nome,
            time:time,
            imagem:imagem,
            cargo:cargo
     
        });
    }
  
  return (
    <section className="formulario">
        <form onSubmit={handleSubmit}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto
                value={nome}
                onChange={valor => setNome(valor)}
                required={true}
                label="Nome"
                placeholder="Digite seu nome"
            />
            <CampoTexto
                value={cargo}
                onChange={valor => setCargo(valor)}
                required={true}
                label="Cargo"
                placeholder="Digite seu cargo"
            />
            <CampoTexto
                value={imagem}
                onChange={valor => setImagem(valor)}
                required={true}
                label="Imagem"
                placeholder="Cole a URL da imagem"
            />
            <ListaSuspensa
                value={time}
                onChange={valor => setTime(valor)}
                required={true}
                label="Time"
                itens={times}
            />
            <Botao>
                Criar Card
            </Botao>

            
        </form>
    </section>
  );
}