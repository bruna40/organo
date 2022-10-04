import './index.css'

export default function Forms() {
  return (
    <div className="campo-texto">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <form> 
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome" />
            <label htmlFor="Cargo">Cargo</label>
            <input type="text" id="cargo" name="cargo" placeholder="Digite seu cargo" />
            <label htmlFor="imagem">Imagem</label>
            <input type="text" id="imagem" name="imagem" placeholder="Informe o endereço da imagem" />
            <label htmlFor="time">Time</label>
            <input type="text" id="time" name="time" placeholder="Informe o time" />

            <button type="submit">Criar Card</button>
            
        </form>
    </div>
  );
}