import React from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { baseURL } from "../../Api/server";

const ProfileInfo: React.FC = () => {
  const userData = useSelector((store: RootState) => store.user.data);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-Outfit">
      <div className="w-20 h-20 xl:w-40 xl:h-40">
        <img
          draggable={false}
          src={baseURL + userData?.avatar}
          alt=""
          className="rounded-full object-cover aspect-square"
        />
      </div>
      <h2 className="font-medium text-xl">{userData?.name}</h2>
      <h2 className="font-light text-lg">{userData?.email}</h2>
      <address className="text-xs md:text-sm text-center">
        {userData?.city}, {userData?.state}, {userData?.country},PIN:{" "}
        {userData?.postalCode}
      </address>
      <h2 className="text-lg font-light">Phone: {userData?.phoneNumber}</h2>
    </div>
  );
};

export default ProfileInfo;
