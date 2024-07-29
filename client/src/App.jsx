import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/login/signin.jsx';
import AdminPage from './components/pages/adminpage';
import StudentPage from './components/pages/studentpage';
import FacultyPage from './components/pages/facultypage.jsx';
import AlumniPage from './components/pages/alumnipage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
