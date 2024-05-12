import AdminPendingVaccineCard from "../../../../../pages/partials/AdminPendingVaccineCard";

const PendingVaccinesTab = (props) => {

  const pets = props.pets;

  const filteredPets = props.pets.filter(pet => !pet.vaccinated && pet.vaccinePhoto);

  const handleApproveVaccine = (petId) => {
    props.handleApproveVaccine(petId);
  };

  console.log(filteredPets);
  return (
    <div
      class="tab-pane fade"
      id="pending-vaccines"
      role="tabpanel"
      aria-labelledby="pending-vaccines-tab"
    >
      <ul>
      {filteredPets.map((pet, index) => {
        return (
          <AdminPendingVaccineCard 
            petId={pet.id}
            pets={pets}
            petName={pet.name}
            breed={pet.breed}
            petOwnerId={pet.petOwnerId}
            vaccinePhoto={pet.vaccinePhoto}
            handleApproveVaccine={props.handleAcceptVaccine}
          />
        )})}
      </ul>
    </div>
  )
};

export default PendingVaccinesTab;