
import cartoonDogs from "../../assets/images/cartoonDogs.jpeg";

export default function LoginHero() {
  return (
    <>
      <h1 style={{marginBottom: 0}} className='yukimito-font yuki-font-color display-1'>
                  YUKIMITO
      </h1>
      <h3 className='black-font'>
        Pet Hotel & Boarding Services
      </h3>
      <div className="row d-flex justify-content-center">
        <img
              src={cartoonDogs}
            alt="cartoon dog"
            style={{ width: "100%", maxWidth: "70%" }}
          />
      </div>
    </>
  )
};