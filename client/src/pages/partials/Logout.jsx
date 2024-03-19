import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Logout() {

  const navigate = useNavigate();

  function handleLogout () {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
      <a onClick={handleLogout} class="nav-link text-white" href="/"><LogoutIcon className="me-1"/>Log out</a>
    </>
  )
};