import HouseIcon from '@mui/icons-material/House';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

export default function WhatWeOffer() {
  const iconStyle = {
    fontSize: '50px'
  };

  return (
    <>
      <div className="container mt-5">

        <div className="text-center">
          <h6 className='yuki-font-color'>Services</h6>
          <h4 className='black-font'>
            What do we offer?
          </h4>
          <p className="black-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

        <div className="my-5">

          <div class="row my-5">
            <div class="col-sm">
              <div class="card-body text-center">
                <HouseIcon style={iconStyle}/>
                <h5 class="card-title yuki-font-color">Accommodation</h5>
                <p class="card-text text-secondary">
                  Providing comfortable and clean living spaces for pets, including cozy beds, toys, and separate areas for different types and sizes of animals.
                </p>
              </div>
            </div>
            <div class="col-sm">
              <div class="card-body text-center">
                <LocalDiningIcon style={iconStyle}/>
                <h5 class="card-title yuki-font-color">Meals and Dietary</h5>
                <p class="card-text text-secondary">
                  Serving high-quality and nutritious pet food, and accommodate special dietary needs based on the pet owner's instructions.
                </p>
              </div>
            </div>

          </div>

          <div class="row my-5">
            <div class="col-sm">
              <div class="card-body text-center">
                <FitnessCenterIcon style={iconStyle}/>
                <h5 class="card-title yuki-font-color">Exercies and Playtime</h5>
                <p class="card-text text-secondary">
                  Offering a well-designed play area for pets to engage in physical activities and socialize with other animals.
                </p>
              </div>
            </div>
            <div class="col-sm">
              <div class="card-body text-center">
                <HealthAndSafetyIcon style={iconStyle}/>
                <h5 class="card-title yuki-font-color">Care and Health Monitoring</h5>
                <p class="card-text text-secondary">
                  Monitoring  pets' health and behavior regularly, and promptly address any concerns or issues.
                </p>
              </div>
            </div>
            
          </div>

        </div>
        </div>
    </>
  )
}