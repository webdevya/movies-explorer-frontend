import Header from "../../Header/Header";
import Profile from "../../Profile/Profile";


function ProfilePage({ onProfileUpdate, onProfileExit, isEditMode, setIsEditMode, errorText, infoText }) {
  return (
    <div >
      <Header />
      <Profile
        onProfileUpdate={onProfileUpdate}
        onProfileExit={onProfileExit}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        errorText={errorText}
        infoText={infoText}
      />
    </div>
  );
}
export default ProfilePage;
