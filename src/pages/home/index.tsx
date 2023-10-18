import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { List } from "../../components/list";
import { get } from "../../services/api.services";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interface/user.interface";
import { Component01 } from "../../components/componente01";



const Home = () => {
    const navigate = useNavigate();
    const [listUser, setListUser] = useState<IUser[]>([])
    const [inputValue, setInputValue] = useState('');


    const handleClick = async () => {
        const lista = await get(`users/${inputValue}`);
        setListUser(previous => [...previous, lista.data])
    }


    const handleNavigateRepos = (username: string) => {
        navigate(`/repos/${username}`)
    }


    return (
        <div className="App container pt-16">

            <Component01 />
       {/*      <h1 className="text-6xl font-bold md:w-1/2 mb-16">Explore repositórios no Github</h1>

            <section className='flex'>
                <Input value={inputValue} onChange={setInputValue} />
                <Button handleClick={handleClick} />
            </section>

            <section>
                {listUser.map(item => (
                    <List key={item.id} id={item.id} image={item.avatar_url} title={item.name} onClick={() => handleNavigateRepos(item.login)} />
                ))}

            </section> */}

        </div>
    )
}

export { Home }