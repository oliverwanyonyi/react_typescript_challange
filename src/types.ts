type Info = {
    id:number;
    name:string;
    email:string;
}

type Admin = Info & {
    role:string;
    lastLogin:Date;

}

export {type Info, type Admin}