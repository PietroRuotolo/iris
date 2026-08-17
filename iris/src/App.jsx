import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import PatientList from './pages/PatientList'
import PatientDetail from './pages/PatientDetail'
import { estaAutenticado } from './services/auth'

function Protegida({ children }) {
  return estaAutenticado() ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Protegida>
              <PatientList />
            </Protegida>
          }
        />
        <Route
          path="/paciente/:id"
          element={
            <Protegida>
              <PatientDetail />
            </Protegida>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App