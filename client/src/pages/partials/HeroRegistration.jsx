
import Cats from '../../assets/images/cat.png';

export default function HeroRegistration() {
  return (
    <>
      <div className="row ">
        <h1 style={{marginBottom: 0}} className='yukimito-font yuki-font-color display-1'>
          YUKIMITO
        </h1>
        <h3>
          Pet Hotel & Boarding Services
        </h3>
      </div>
      <img
      src={Cats}
      alt="Cats"
      style={{ width: "90%", maxWidth: "90%", margin: 'auto' }}
    />
    </>
  )
};