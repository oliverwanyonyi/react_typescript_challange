import React, { useState } from "react";

interface UserProfile {
  name: string;
  age: number;
  email: string;
}
const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile({ ...profile, name });
  };

  const updateAge = (age: string) => {
    setProfile({ ...profile,age: Number(age) });
  };

  const updateEmail = (email: string) => {
    setProfile({ ...profile, email });
  };
  return (
    <div>
      <h2>UserProfile</h2>

      <input
        type="text"
        placeholder="name"
        value={profile?.name}
        onChange={(e) => updateName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
<button>Update Profile</button>

      <div>
      <h2>My Profile</h2>

        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default UserProfile;
