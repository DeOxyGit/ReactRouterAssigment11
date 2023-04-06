import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  return (
    <div className="neon-container">
      <p className="type-effect">The Student ID of user is {id}</p>
    </div>
  );
}

export default Profile;
