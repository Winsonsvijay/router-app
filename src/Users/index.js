import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Student from './Student';
import Faculty from './Faculty';
import Users from './Users';
import { Link } from 'react-router-dom';
import NoPage from '../NoPage';
import UserDetails from './UserDetails';

export default function UsersRoutes() {
  return (
    <div>
        <Routes>
          <Route index element={<Users />} />
          <Route  path='' >
            <Route path=':id' element={<UserDetails />} />
            <Route path='student' element={<Student />} />
            <Route path='faculty' element={<Faculty />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
    </div>
  )
}
