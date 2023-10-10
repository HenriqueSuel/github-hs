import { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/button';
import { List } from './components/list';

function App() {
  const [inputValue, setInputValue] = useState('');


  console.log('Mostrar o valor que eu digitei aqui', inputValue)

  return (
    <div className="App container pt-16">
      <h1 className="text-6xl font-bold md:w-1/2 mb-16">Explore repositórios no Github</h1>

      <section className='flex'>
        <Input value={inputValue} onChange={setInputValue}  />
        <Button />
      </section>

      <section>
        <List />

      </section>

    </div>
  );
}

export default App;
