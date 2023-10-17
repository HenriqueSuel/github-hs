import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../services/api.services";
import { IRepo } from "../../interface/repos.interface";
import { List } from "../../components/list";


const Repos = () => {

    const [listRepos, setListRepos] = useState<IRepo[]>([]);

    const { username } = useParams();


    useEffect(() => {
        const onMount = async () => {
            const result = await get(`users/${username}/repos`);

            console.log(result)
            setListRepos(result.data)
        }
        onMount();
    }, [])


    return (
        <div className="App container pt-16">
            <h1 className="text-6xl font-bold md:w-1/2 mb-16">Explore repositórios no Github</h1>

            <section>
                {listRepos.map(item => (
                    <List key={item.id} id={item.id} image={item.owner.avatar_url}  />
                ))}

            </section>

        </div>
    )
}


export { Repos } 