import react from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;

  if (isAuthenticated) {
    return (
      <div>
        <img src={user.picture} alt={`profile of ${user.nickname}`} />
        <h1 className="m-2">{user.nickname}</h1>
      </div>
    );
  }

  if (!isAuthenticated) return <p className="lead">You are not logged in.</p>;
};

export default Profile;
