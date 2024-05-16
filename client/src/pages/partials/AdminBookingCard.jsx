export default function AdminBookingCard(props) {

  const petOwners = props.petOwners;

  const getOwnerName = (petOwnerId) => {
    const owner = petOwners.find(owner => owner.id === petOwnerId);
    return owner ? owner.name : 'Unknown';
  };

  return (
    <>
      <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
        <div className="py-3">
          <div className="card shadow">
            <div class="card-header">
              <b>Booking Details</b>
            </div>
            <div class="card-body">
              <h5 class="card-title">Client Name: {getOwnerName(props.petOwnerId)}</h5>
              <p>Booking ID: YKMTBK{props.bookingId}</p>
              <p class="card-text text-secondary">
                Service Availed: {props.service === "dayCare" ? "Day Care": null} {props.service === "errandsCare" ? "Errands Care": null} {props.service === "homeCare" ? "Home Care": null}
                <br />
                Check In Time: {new Date(props.checkIn).toLocaleString()}
                <br />
                Expected Check Out Time: {new Date(props.checkOut).toLocaleString()}
              </p>

              <div className="d-flex justify-content-end ">
                <button
                  className="btn btn-primary yuki-color button-border-color mx-2"
                  data-toggle="modal"
                  data-target={"#AdminBookingAccept" + props.bookingId}
                  href="/"
                >
                  {" "}
                  Accept
                </button>

                {props.bookings.map(booking => {
                  return (
                    <div
                      class="modal fade"
                      id={"AdminBookingAccept" + booking.id}
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="AdminBookingCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="AdminBookingLongTitle">
                              Confirm Booking
                            </h5>
                          </div>
                          <div class="modal-body">
                            Are you sure you want to confirm booking?
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
                              id={booking.id}
                              type="button"
                              class="btn btn-primary button-color"
                              onClick={() => props.handleBookingAcceptance(booking.id)}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                <a
                  type="button"
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target={"#AdminRejectBooking" + props.bookingId}
                  href="/"
                >
                  Reject
                </a>

                <div
                  class="modal fade"
                  id={"AdminRejectBooking" + props.bookingId}
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="AdminBookingCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="AdminBookingLongTitle">
                        Are you sure you want to reject booking?
                        </h5>
                      </div>
                      <form>
                        <div class="form-group p-3">
                          <label for="exampleFormControlTextarea1">
                            Reason for rejecting booking
                          </label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={props.handleRejectionReason}
                          ></textarea>
                        </div>
                      </form>
                      <div class="modal-footer">
                        <a type="button" class="btn btn-secondary" data-dismiss="modal" href="/">
                          Cancel
                        </a>
                        <button type="button" class="btn btn-danger" onClick={() => props.handleBookingRejection(props.bookingId)}>
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
