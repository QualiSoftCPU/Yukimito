import { Button } from "@mui/material";


export default function AdminBookingCard(props) {
  return (
    <>
      <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
        <h1 class="display-5 fw-bold">
          <span className="yuki-font-color">Yukimito</span> Bookings
        </h1>
        <div className="py-3">
          <div className="card shadow">
            <div class="card-header">
              <b>Booking Details</b>
            </div>
            <div class="card-body">
              <h5 class="card-title">Pet Owner Name: {props.petOwnerName}</h5>
              <p class="card-text text-secondary">
                Contact Number: {props.contactNumber}
                <br />
                Pet Name: {props.petName}
              </p>

              <div className="d-flex justify-content-end ">
                <button className="btn btn-primary yuki-color button-border-color mx-2">
                  {" "}
                  Accept
                </button>

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
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            onChange={props.handleRejectionReason}
                          ></textarea>
                        </div>
                      </form>
                      <div class="modal-footer">
                        <a
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                          href="/"
                        >
                          Cancel
                        </a>
                        <a
                          type="button"
                          class="btn btn-primary button-color"
                          href="/AdminDashboard"
                        >
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

        <Button
          className="button-color"
          variant="contained"
          onClick={props.handleSubmit}
          style={{ marginRight: "10px" }}
        >
          LOG OUT
        </Button>
      </div>
    </>
  )
};