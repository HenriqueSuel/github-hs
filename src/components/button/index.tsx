

interface IProps {
    handleClick: () => void;
}


const Button = ({ handleClick }: IProps) => {


    return (
        <button className="bg-lime-600 p-6 text-white" onClick={handleClick}>Pesquisar</button>
    )
}


export { Button }