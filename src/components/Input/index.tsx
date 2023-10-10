import { ChangeEvent, useState } from "react"


interface IProps {
    value: string;
    onChange: (value: string) => void;
}


const Input = ({ value, onChange }: IProps) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <input className="px-6 w-full indent-8" type="text" value={value} onChange={handleInputChange} />
    )
}

export { Input }