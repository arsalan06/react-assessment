import { Route, Routes } from "react-router-dom";
import UserListing from "../views/user";
import UserDetail from "../views/user/userDetail";

function RouterList() {
  return (
    <Routes>
      <Route path="/" element={<UserListing />} />
      <Route path="/user-detail/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default RouterList;
