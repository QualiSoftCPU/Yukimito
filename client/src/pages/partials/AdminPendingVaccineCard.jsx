export default function AdminPendingVaccineCard(props) {
  return (
    <>
      <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
        <div className="py-3">
          <div className="card shadow">
            <div class="card-header">
              <b>Pet Details</b>
            </div>
            <div class="card-body">
              <h5 class="card-title">Pet Name: {props.petName}</h5>
              <p>Breed: {props.breed}</p>
              <p>Owner: {props.petOwnerId}</p>
              <p class="card-text text-secondary">
                Vaccine Photo: 
                <button
                  className="btn btn-primary yuki-color button-border-color mx-2"
                  data-toggle="modal"
                  data-target={"#AdminPetVaccinePhoto" + props.petId}
                  href="/"
                >
                  {" "}
                  View Vaccine Photo
                </button>
              </p>

              <div className="d-flex justify-content-end ">
                <button
                  className="btn btn-primary yuki-color button-border-color mx-2"
                  data-toggle="modal"
                  data-target={"#AdminPetVaccine" + props.petId}
                  href="/"
                >
                  {" "}
                  Accept
                </button>
                
                {/* Confirmation Modal for Vaccine Approval */}
                {props.pets.map(pet => {
                  return (
                    <div
                      class="modal fade"
                      id={"AdminPetVaccine" + pet.id}
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="AdminPetVaccine"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="AdminBookingLongTitle">
                              Approve Vaccine
                            </h5>
                          </div>
                          <div class="modal-body">
                            Are you sure you want to approve {props.petName}'s vaccine?
                          </div>
                          <div class="modal-footer">
                            <a
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                              href="/"
                            >
                              Cancel
                            </a>
                            <button
                              id={pet.id}
                              type="button"
                              class="btn btn-primary button-color"
                              onClick={() => props.handleApproveVaccine(props.petId)}
                            >
                              Approve
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Modal for Vaccine Photo of Pets */}
                {props.pets.map(pet => {
                  return (
                    <div
                      class="modal fade"
                      id={"AdminPetVaccinePhoto" + pet.id}
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="AdminPetVaccine"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="AdminBookingLongTitle">
                              {pet.name}'s Vaccine Photo
                            </h5>
                          </div>
                          <div class="modal-body">
                            <img src={pet.vaccinePhoto} class="img-fluid" alt={`alt-${pet.name}`}/>
                          </div>
                          <div class="modal-footer">
                            <a type="button" class="btn btn-primary button-color" data-dismiss="modal" href="/">
                              Done
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
