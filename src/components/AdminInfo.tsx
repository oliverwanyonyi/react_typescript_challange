import React from 'react'
import { Admin } from '../types'

type AdminInfoProp = {
    admin:Admin
}

const AdminInfo: React.FC<AdminInfoProp> = ({admin}) => {
  return (
    <>
    <div><span># {admin.id}</span></div>
    <div><span>Name</span><span>{admin.name}</span></div>
    <div><span>Email</span><span>{admin.email}</span></div>
    <div><span>Role</span><span>{admin.role}</span></div>
    <div><span>Last Login</span><span>{admin.lastLogin.toLocaleDateString()}</span></div>

    </>
  )
}

export default AdminInfo