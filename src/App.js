import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Service from './Layout/Service';
import About from './Layout/About';
import Home from './Layout/Home';
import NoPage from './NoPage';
import NavBar from './NavBar';
import Footer from './Footer';
import Users from './Users';
import Container from 'react-bootstrap/esm/Container';
import Faculty from './Users/Faculty';
import Student from './Users/Student';

function App() {
  return (
    <div>
        <NavBar />
        <Container>
          <div className="mainContent">
            <Outlet />
          </div>
        </Container>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path='/users/student' element={<Student />} />
          <Route path='/users/faculty' element={<Faculty />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
