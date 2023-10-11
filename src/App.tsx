import { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/button';
import { List } from './components/list';
import { get } from './services/api.services';
import { IRepo } from './interface/repos.interface';

function App() {
  const [listRepo, setListRepo] = useState<IRepo[]>([])
  const [inputValue, setInputValue] = useState('');


  const handleClick = async () => {
    const lista = await get(`users/${inputValue}/repos`);

    setListRepo(lista.data)

  }

  return (
    <div className="App container pt-16">
      <h1 className="text-6xl font-bold md:w-1/2 mb-16">Explore repositórios no Github</h1>

      <section className='flex'>
        <Input value={inputValue} onChange={setInputValue} />
        <Button handleClick={handleClick} />
      </section>

      <section>
        <List listRepo={listRepo}/>

      </section>

    </div>
  );
}

export default App;
