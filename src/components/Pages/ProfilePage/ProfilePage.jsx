import Header from "../../Header/Header";
import Profile from "../../Profile/Profile";


function ProfilePage({ onProfileUpdate, onProfileExit, isEditMode, setIsEditMode }) {
  return (
    <div >
      <Header />
      <Profile
        onProfileUpdate={onProfileUpdate}
        onProfileExit={onProfileExit}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
    </div>
  );
}
export default ProfilePage;
