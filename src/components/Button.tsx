import { FC } from 'react'

interface ButtonProp{
    label:string;
    onClick:()=>void;
    disabled:boolean
}
const Button: FC<ButtonProp> = ({label, onClick, disabled}) => {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  )
}

export default Button