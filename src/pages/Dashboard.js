import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Info from "../components/Info";
import User from "../components/User";
import Repos from "../components/Repos";

function Dashboard() {
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
}

export default Dashboard;
