import Header from "../../Header/Header";
import Profile from "../../Profile/Profile";


function ProfilePage({ onProfileUpdate, onProfileExit }) {
  return (
    <div >
      <Header />
      <Profile
        onProfileUpdate={onProfileUpdate}
        onProfileExit={onProfileExit}
      />
    </div>
  );
}
export default ProfilePage;
