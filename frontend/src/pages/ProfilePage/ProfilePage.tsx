import { memo } from "react";
import { ProfileInfo } from "widgets";

const ProfilePage = memo(() => {
    return (
        <div>
            <ProfileInfo />
        </div>
    );
});

export default ProfilePage;
