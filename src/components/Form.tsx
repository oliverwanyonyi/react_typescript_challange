import { FormEvent, useRef, useState } from "react"

type formData = {
    name:string;
    email:string;
    password:string;
}
const Form = () => {
    const [formData,setFormData] = useState<formData>({
        name:'',
        email:'',
        password:''
    })

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

        const handleSubmit = (event:FormEvent<HTMLFormElement>) =>{

            event.preventDefault()

            const nameValue = name.current!.value
            const emailValue = email.current!.value
            const passwordValue = name.current!.value

            setFormData({
                name:nameValue,
                email:emailValue,
                password:passwordValue
            })
        }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" ref={name} />
            <input type="email" placeholder="Enter your email" ref={email} />
            <input type="password" placeholder="Enter your password" ref={password} />
            <button type="submit">Submit</button>
        </form>

        <h2>Registration Details</h2>
        <p>Name:<span>{formData?.name}</span></p>
        <p>Email:<span>{formData?.email}</span></p>
       
    </div>
  )
}

export default Form