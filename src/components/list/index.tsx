interface IProps {
    id: number;
    image: string;
    title?: string;
    onClick?: () => void;
}

const List = ({ id, image, onClick, title }: IProps) => {

    const handleClick = () => {
        console.log(onClick)
        if (onClick) {
            onClick();
        }
    }

    return (
        <div className="bg-white my-4 p-5 flex items-center" key={id} onClick={handleClick}>
            <img className="rounded-full h-20" src={image} alt="" />
            <div className="ml-5">
                <h1>{title}</h1>

            </div>
        </div>
    )
}


export { List }