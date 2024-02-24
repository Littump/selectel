import { memo } from "react";
import { AddPet } from "widgets";

const AddPetPage = memo(() => {
    return (
        <div>
            <AddPet />
        </div>
    );
});

export default AddPetPage;
