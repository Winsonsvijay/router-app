import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function UserDetails() {

  const { id } = useParams('id');
  console.log('id', id)

  const [userData, setUserData] = useState({})
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  useEffect(() => {
    if(!isDataLoaded) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => response.json()).then((userList) => {
            setUserData(userList)
            setIsDataLoaded(true)
        }).catch((error) => {
            console.log('error', error)
        })
    }
  },[isDataLoaded])

  console.log('userData', userData)

  return (
    <div>
        {(isDataLoaded && userData) && (
            <>
            <h2>User Details {userData.username}</h2>
            <ul>
                <li>Name : {userData.name}</li>

                <li>User Name : {userData.username}</li>

                <li>Address : {userData.address.street},<br/>
                            {userData.address.city}</li>
            </ul>
            </>
        )}
        <button><Link to='/users'>Back</Link></button>
    </div>
  )
}