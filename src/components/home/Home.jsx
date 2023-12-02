import { useState, useEffect, useRef } from "react";
import BottomBar from "../bottomBar/BottomBar";
import ListGroup from "../listGroup/ListGroup";
import AddItem from "../addItem/AddItem";
import TopNav from "../topNav/TopNav";
import { useNavigate } from "react-router";
import TwoBoxes from "../twoBoxes/TwoBoxes";
import Avatars from "../avatars/Avatars"
import AllSearch from '../search/AllSearch'

function Home({ isLoggedIn, token, clearUser, userId }) {
  const [lists, setLists] = useState([]);
  const [showTopNav, setShowTopNav] = useState(true);
  const loginCounter = useRef(0);

  let listRoute = `http://localhost:4000/lists/list/owner/${userId}`;

  async function fetchLists() {
    if (token)
      try {
        let response = await fetch(listRoute, {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "GET",
        });

        console.log("response", response);
        let results = await response.json();

        console.log("results", results);
        if (response.status === 200) {
          setLists(results.listOwner);
        } else {
          console.log("No Results");
        }
      } catch (error) {
        console.log(error);
      }
  }

  const navigate = useNavigate();

  useEffect(() => {
    console.log("logged in TEST ", isLoggedIn);
    loginCounter.current++;
    if (!isLoggedIn.current && loginCounter.current > 1) navigate("/auth");
  }, []);

  return (
    <>
      <TopNav clearUser={clearUser} showTopNav={showTopNav} />
      <Avatars/>
      <AllSearch/>
      <TwoBoxes/>
      <ListGroup token={token} fetchLists={fetchLists} lists={lists} />
      <BottomBar clearUser={clearUser} />
    </>
  );
}

export default Home;
