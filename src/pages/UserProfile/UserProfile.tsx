import { useEffect } from "react";
import { isAuthenticated } from "../../utils/isAuthenticated";

const UserProfile = () => {
  useEffect(() => {
    isAuthenticated() ? "" : (location.href = "/auth");
  }, []);
  return <div>Profile</div>;
};

export default UserProfile;
