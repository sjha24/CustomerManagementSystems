import React from 'react'

const NavBar = () => {
    const token = localStorage?.getItem("token");
    let name = "";
    if(token != null){
        const userName = localStorage?.getItem("userId");
        name = userName?.split("@");
    }
  return (
    <div className='heading'>
        <div className="headTop">
            <h1>Welecome to Customer Management System</h1>
        </div>
        <h4 className="name">User Name - {name[0]}</h4>
    </div>
  )
}

export default NavBar