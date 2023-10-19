import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../../components/list";
import { useGithub } from "../../contexts/githubContext";


const Repos = () => {
    const { getReposGithub, listRepos } = useGithub();

    const { username } = useParams();


    useEffect(() => {
        const onMount = async () => {
            if (username) {
                getReposGithub(username);
            }
        }
        onMount();
    }, [])


    return (
        <div className="App container pt-16">
            <h1 className="text-6xl font-bold md:w-1/2 mb-16">Explore repositórios no Github</h1>

            <section>
                {listRepos.map(item => (
                    <List key={item.id} id={item.id} image={item.owner.avatar_url} />
                ))}

            </section>



        </div>
    )
}


export { Repos } 