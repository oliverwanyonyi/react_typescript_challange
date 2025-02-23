import AdminInfo from "./components/AdminInfo";
import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import { Admin, Info } from "./types";

function App() {
  // const handleClick = () => {
  //   alert("50% offers now available");
  // };

  const user: Info = {
    id: 1,
    name: "John Doe",
    email: "johndoe@mail.com",
  };
  const admin: Admin = {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };
  return (
    <>
      <div>
        {/* <Button
          label="Check new Offers"
          disabled={false}
          onClick={handleClick}
        /> */}
        <UserInfo user={user} />
        <AdminInfo admin={admin} />
      </div>
    </>
  );
}

export default App;
