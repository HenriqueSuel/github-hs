import { createContext, useContext, useState } from "react";
import { get } from "../services/api.services";
import { IUser } from "../interface/user.interface";
import { useLoading } from "./loadingContext";
import { IRepo } from "../interface/repos.interface";



interface IGithub {
    getUsersGithub: (username: string) => void;
    listUser: IUser[];
    getReposGithub: (username: string) => void;
    listRepos: IRepo[];
}

const GithubContext = createContext<IGithub>({
    getUsersGithub: () => null,
    listUser: [],
    getReposGithub: () => null,
    listRepos: [],
})

interface IGithubProviderProps {
    children: React.ReactNode
}


const GithubProvider = ({ children }: IGithubProviderProps) => {
    const { setIsVisible } = useLoading();
    const [listUser, setListUser] = useState<IUser[]>([])
    const [listRepos, setListRepos] = useState<IRepo[]>([]);

    const getUsersGithub = async (username: string) => {
        setIsVisible(true)
        const resp = await get(`users/${username}`);
        setListUser(previous => [...previous, resp.data]);
        setIsVisible(false)
    }

    const getReposGithub = async (username: string) => {
        setIsVisible(true)
        const result = await get(`users/${username}/repos`);
        setListRepos(result.data)
        setIsVisible(false)
    }

    return (
        <GithubContext.Provider
            value={{
                getUsersGithub,
                listUser,
                getReposGithub,
                listRepos
            }}

        >
            {children}
        </GithubContext.Provider>
    )
}


const useGithub = () => useContext(GithubContext);

export { GithubProvider, useGithub }