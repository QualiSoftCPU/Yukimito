import { useNavigate } from "react-router-dom";

export default function Logout() {

  const navigate = useNavigate();

  function handleLogout () {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
      <li onClick={handleLogout} class="nav-item active px-3 align-middle text-white">
        <u><a class="nav-link text-white" href="/">Logout</a></u>
      </li>
    </>
  )
};