import { Button } from './components/button';
import { Text } from './components/text';
import './global.css'

function App() {

  const showLabel = (label) => {
    alert(`A label dese botão é: ${label}`)
  }

  return (
    <div className='container'>
      <div className='content'>
        <Text label="Esse é meu texto colorido 1" color="blue" />
        <Text label="Esse é meu texto colorido 2" color="red" />
        <Text label="Esse é meu texto colorido 3" color="orange" />

        <Button label="Baixar CV" showLabel={showLabel} />
        <Button label="Clique em mim !" showLabel={showLabel} />
        <Button label="Eu sou um botão" showLabel={showLabel} />
      </div>
    </div>
  );
}

export default App;
