import { memo } from "react";
import { EditPet } from "widgets";

const EditPetPage = memo(() => {
    return (
        <div>
            <EditPet />
        </div>
    );
});

export default EditPetPage;
