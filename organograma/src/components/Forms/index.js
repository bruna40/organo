import './index.css'
import CampoTexto from '../CampoTexto/index';

export default function Forms() {
  
  return (
    <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto
                label="Nome"
                placeholder="Digite seu nome"
            />
            <CampoTexto
                label="Cargo"
                placeholder="Digite seu cargo"
            />
            <CampoTexto
                label="Imagem"
                placeholder="Cole a URL da imagem"
            />
            
        </form>
    </section>
  );
}