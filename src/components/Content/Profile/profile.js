import React from 'react'
import Posts from './Posts/posts';
import ProfileInfo from './ProfileInfo/profileInfo';


const Profile = (props) => {

  let Profile = props.profile.ProfileData.map ( myData => <ProfileInfo name={myData.name} birthday={myData.birthday} adress={myData.adress} language={myData.language}/> );
  return (
      <div className ="app-profile">
        <h1>Profile</h1>
            {
              Profile
            }          
            <Posts postData={props.profile.PostContent} />            
      </div>
  );
}

export default Profile;