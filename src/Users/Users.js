import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Users() {

  const [usersList, setUserList] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if(!isDataLoaded) {
      fetch('https://fakestoreapiserver.reactbd.com/users').then((response) => response.json()).then((userList) => {
        setUserList(userList)
        setIsDataLoaded(true)
      }).catch((error) => {
        console.log('error', error)
      })
    }
  },[isDataLoaded])

  console.log('usersList', usersList)

  const handleView = (id) => {
    console.log('userId', id)
    navigate(`/users/${id}`)
  }

  return (
    <div>
      
        <h1> Welcome to users page   </h1>
        <button> <Link to='/users/student'>Add Student</Link></button>
        <button ><Link to='/users/faculty'>Add Facult</Link></button>
        {usersList && (
          <table>
            <thead>
              <th>Name</th>
              <th>User Name</th>
              <th> Address </th>
              <th> Actions </th>
            </thead>
            <tbody>
              {
                usersList.map((user, index) => {
                  return(
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.address.street + ` - ` + user.address.city}</td>
                      <td><button onClick={() => handleView(user.id)}> View </button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          
        )}
    </div>
  )
}
