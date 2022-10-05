import {useState} from 'react';
import Banner from "./components/Banner";
import Forms from "./components/Forms";

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
    </>

  );
}

export default App;
