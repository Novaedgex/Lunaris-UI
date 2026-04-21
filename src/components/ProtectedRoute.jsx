// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuthed = sessionStorage.getItem('gn_auth') === 'true'

  if (!isAuthed) return <Navigate to='/' replace />

  return <Outlet />
}

export default ProtectedRoute