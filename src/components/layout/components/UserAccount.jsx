import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../../redux/userDetails.api";

const UserAccount = () => {
  //console.log(`${localStorage.getItem("token")}`)

  //const dispatch = useDispatch();
  const { userDetail, loading } = useSelector((state) => state.userDetails);
 
  // useEffect(() => {
  //     dispatch(fetchUserDetails())
  // }, [dispatch]);
  //console.log(userDetail)
  if (loading) {
      return (
        <div className="w-full min-h-svh flex justify-center items-center">
          Loading....
        </div>
      );
  }
  return (
    <span className="text-sm">
      {userDetail?.data?.first_name} {userDetail?.data?.last_name}
    </span>
  );
};

export default UserAccount;
