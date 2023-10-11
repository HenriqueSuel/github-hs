import { useEffect } from "react"
import { IRepo } from "../../interface/repos.interface"

interface IProps {
    listRepo: IRepo[]
}

const List = ({ listRepo }: IProps) => {


    return (
        <div>
            {listRepo.map(repo => (
                <div className="bg-white my-4 p-5 flex items-center" key={repo.id}>
                    <img className="rounded-full h-20" src={repo.owner.avatar_url} alt="" />
                    <div className="ml-5">
                        <h1>{repo.full_name}</h1>
                        <h1>{repo.owner.avatar_url}</h1>

                    </div>
                </div>
            ))}
        </div>
    )
}


export { List }