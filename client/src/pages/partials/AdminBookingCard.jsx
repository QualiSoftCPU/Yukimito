export default function AdminBookingCard(props) {
  return (
    <>
      <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
        <div className="py-3">
          <div className="card shadow">
            <div class="card-header">
              <b>Booking Details</b>
            </div>
            <div class="card-body">
              <h5 class="card-title">Pet Owner ID: {props.petOwnerId}</h5>
              <p>Booking #: 000000{props.bookingId}</p>
              <p class="card-text text-secondary">
                Service Availed: {props.service}
                <br />
                Check In Time: {props.checkIn}
                <br />
                Expected Check Out Time: {props.checkOut}
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
                  data-target="#AdminBooking"
                  href="/"
                >
                  Reject
                </a>

                <div
                  class="modal fade"
                  id="AdminBooking"
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
                          Reject Booking
                        </h5>
                      </div>
                      <div class="modal-body">
                        Are you sure you want to reject booking?
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
                        <a type="button" class="btn btn-primary button-color" href="/AdminDashboard">
                          Submit
                        </a>
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
