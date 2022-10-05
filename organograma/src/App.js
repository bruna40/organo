import {useState} from 'react';
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Time from "./components/Time";
import { timesCard } from "./utils/time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const handleSubmit = (colaborador) => {
    console.log('Clicou no botão =>', colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }
  return (
    <>
      <Banner />
      <Forms
        onSubmit={colaborador => handleSubmit(colaborador)}
      />
      {
        timesCard
          .map(
            time =>
              <Time 
                key={time.nome}
                nome={time.nome}
                corPrimaria={time.corPrimaria} 
                corSecundaria={time.corSecundaria}
              />)
      }

    </>

  );
}

export default App;
