import { useRef } from 'react'

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () =>{
        inputRef.current?.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder='Enter Your Name' />
        <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default FocusInput