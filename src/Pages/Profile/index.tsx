import React, { useState } from "react";
import SideBar from "./SideBar";
import ProfileInfo from "./ProfileInfo";
import EditProfile from "./EditProfile";

const Profile: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("personal-info");

  function loadActivePage() {
    if (activePage == "personal-info") return <ProfileInfo />;
    else if (activePage == "edit-profile") return <EditProfile />;
  }

  return (
    <div className="flex-grow  w-full flex justify-center items-stretch bg-neutral-300 dark:bg-neutral-800 gap-2 p-3">
      <div className="w-72 hidden lg:block rounded bg-neutral-100 dark:bg-neutral-900 shadow-lg dark:shadow-transparent shadow-neutral-400">
        <SideBar activePage={activePage} setActivePage={setActivePage} />
      </div>
      <div className="w-full h-auto rounded bg-neutral-100 dark:bg-neutral-900 shadow-lg dark:shadow-transparent shadow-neutral-400">
        {loadActivePage()}
      </div>
    </div>
  );
};

export default Profile;
