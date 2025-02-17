import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserAccount = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "http://localhost:6001/users/profile",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "token"
            )}`,
          },
        });

        setProfile(res.data);
      } catch (error) {
        if (error.status === 503) {
          localStorage.removeItem("token");
          navigate("/signin");
        }
        toast.error("Profile failed");
      }
    };
    fetchData();
  }, []);
  return (
    <span className="text-sm">
      {profile?.data?.first_name} {profile?.data?.last_name}
    </span>
  );
};

export default UserAccount;
