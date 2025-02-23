import { FC } from 'react'

interface Button{
    label:string;
    onClick:()=>void;
    disabled:boolean
}
const Button: FC<Button> = ({label, onClick, disabled}) => {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  )
}

export default Button