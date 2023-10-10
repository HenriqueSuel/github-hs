const Button = () => {

    const handleClick = () => {
        console.log('chamou')
    }

    return (
        <button className="bg-lime-600 p-6 text-white" onClick={handleClick}>Pesquisar</button>
    )
}


export { Button }