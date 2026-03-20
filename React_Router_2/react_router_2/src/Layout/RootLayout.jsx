import { Link, Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div>
      <h2>Student Portal</h2>
        <Link to="/">Dashboard</Link> |{" "}
        <Link to="/Students">Students</Link> |{" "}
        <Link to="/Addstudent">Add Student</Link> |{" "}
        <Link to="/Profile">Profile</Link>
      <Outlet/>
    </div>
  );
}

export default RootLayout;