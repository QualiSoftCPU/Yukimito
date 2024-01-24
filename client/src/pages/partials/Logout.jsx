import { useNavigate } from "react-router-dom";

export default function Logout() {

  const navigate = useNavigate();

  function handleLogout () {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
      <a onClick={handleLogout} class="nav-link yuki-font-color" href="/">Log out</a>
    </>
  )
};