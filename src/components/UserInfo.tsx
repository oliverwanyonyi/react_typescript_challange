import React from 'react'
import { Info } from '../types'

type UserInfoProp  = {
    user:Info;
}

const UserInfo: React.FC<UserInfoProp> = ({user}) => {
  return (
    <div>
     <div><span># {user.id}</span></div>
     <div><span>Name</span><span>{user.name}</span></div>
     <div><span>Email</span><span>{user.email}</span></div>
    </div>
  )
}

export default UserInfo