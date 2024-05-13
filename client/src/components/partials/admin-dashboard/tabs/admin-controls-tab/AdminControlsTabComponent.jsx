import React from "react";

// import ManageAdminModal from "./modals/ManageAdminModal";

const AdminControlsTabComponent = () => {



  return (
    <div
      class="tab-pane fade"
      id="controls"
      role="tabpanel"
      aria-labelledby="controls-tab"
    >
      <div class="container py-3">
        <div class="card border">
          <div class="card-header">
            <h4>Admin Accounts</h4>
          </div>
          <div class="card-body">
            <div class="card shadow">
              <div class="card-body p-3">
                <div class="card-body d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    class="bi bi-person-square me-3"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                  </svg>
                  <i class="bi bi-person"></i>
                  <div>
                    <h5 class="card-title">Admin Name</h5>
                    <p class="card-text text-secondary">Superadmin/admin:</p>
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                  <button
                    class="btn btn-outline-secondary mx-2"
                    data-toggle="modal"
                    data-target="#adminControlModal"
                  >
                    Manage Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* admin control modal */}
{/* <ManageAdminModal/> */}
   
    </div>
  );
};

export default AdminControlsTabComponent;
