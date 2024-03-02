import { Paper,List, ListItem, Divider } from "@mui/material";

export default function ServicecCard(props) {

  return (
    <>
      <div class="col-md-12">
        <div class="card h-100">
          <img src={props.src} class="card-img-top" alt={props.alt}/>
          <div class="card-body">
            <h1 class="display-6 fw-bold lh-1 lead">
              <span>{props.service}</span>
            </h1>
            <p>
              <div>{props.checkIn}</div>
              <div>{props.checkOut}</div>
              <div>{props.operatingTime}</div>
            </p>

            <hr />

            <p class="text-secondary">
              {props.description}
            </p>

            <hr />

            <h5 className="lead text-dark mt-5 text-center card-header rounded">
              Starting at:
              <br />
              <span className="h1 fw-bold">₱{props.price}.00</span><span className="text-secondary"> 
              <br /> 
              for {props.duration}hrs.</span>
            </h5>
          </div>
          <div class="card-footer d-flex justify-content-center">
            <a
              type="button"
              class="btn btn-primary button-color"
              data-toggle="modal"
              data-target="#HomeCareBookNow"
              href="/PetOwnerPartialPaymentBreakdown"
            >
              Book Now
            </a>
          </div>
        </div>
        <div
        class="modal fade"
        id="HomeCareBookNow"
        tabindex="-1"
        role="dialog"
        aria-labelledby="HomeCareBookNowCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="HomeCareBookNowLongTitle">
                {props.service} Booking Confirmation
              </h5>
              {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>*/}
            </div>
            <div
              class="modal-body"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1 class="display-6 fw-bold text-center lh-1">Thank you</h1>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              viverra aliquet tellus suscipit malesuada. Nullam id sollicitudin
              est. Proin interdum ligula ac elit condimentum, vitae lacinia erat
              porta. Donec dictum, nisl quis aliquet volutpat, diam enim
              lobortis urna, nec posuere enim orci sed dolor. */}
              <div> Thank you for availing our {props.service} service. Please review the
              details of your reservation and kindly wait for our staff to review and confirm your reservation.
              </div>

              <Paper elevation={3} style={{ padding: "30px" , marginTop:"15px"}}>
                <Paper
                  elevation={0}
                  style={{
                    padding: "5px",
                    backgroundColor: "yellow",
                    textAlign: "center",
                  }}
                >
                  Reservation Details
                </Paper>
                <List
                  style={{
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                  }}
                  aria-label="mailbox folders"
                >
                  <ListItem>
                    <div>Check In: {}</div>
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <div>Check Out: {}</div>
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <div>Pet(s): {}</div>
                  </ListItem>
                  <Divider component="li" />
                  <ListItem>
                    <div>
                      Total Charge:
                      <p>(Price is subject to change)</p>
                    </div>
                  </ListItem>
                </List>

                {/* <Paper
                  elevation={0}
                  style={{
                    padding: "5px",
                    backgroundColor: "Red",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {" "}
                  Subject to confirmation
                </Paper> */}
              </Paper>
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
              <button type="button" class="btn btn-primary button-color" onClick={props.handleBookingAppointmentConfirmation}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}