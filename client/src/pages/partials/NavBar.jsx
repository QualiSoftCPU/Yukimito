import logoNav from '../../assets/images/Paw.PNG'

export default function Navbar() {
  return (
    <>
      <div className="shadow-sm yuki-color navbar-container ">
        <div className='container-fluid no-padding'>
          <nav className="navbar px-3">
            <a className="navbar-brand" href="/">
              <img src={logoNav} height="65" alt="..."/>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}