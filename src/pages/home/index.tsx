import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { List } from "../../components/list";
import { get } from "../../services/api.services";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interface/user.interface";
import { Loading } from "../../components/loading";
import { useLoading } from "../../contexts/loadingContext";
import { useGithub } from "../../contexts/githubContext";



const Home = () => {
    const navigate = useNavigate();
    const { getUsersGithub, listUser } = useGithub();
    const [inputValue, setInputValue] = useState('');


    const handleClick = async () => {
       await getUsersGithub(inputValue)
    }


    const handleNavigateRepos = (username: string) => {
        navigate(`/repos/${username}`)
    }


    return (

        <div className="App container pt-16">
            <h1 className="text-6xl font-bold md:w-1/2 mb-16">Explore repositórios no Github</h1>

            <section className='flex'>
                <Input value={inputValue} onChange={setInputValue} />
                <Button handleClick={handleClick} />
            </section>

            <section>
                {listUser.map(item => (
                    <List key={item.id} id={item.id} image={item.avatar_url} title={item.name} onClick={() => handleNavigateRepos(item.login)} />
                ))}


            </section>
        </div>



    )
}

export { Home }