import { useState, useEffect, useRef } from "react";
import BottomBar from "../bottomBar/BottomBar";
import ListGroup from "../listGroup/ListGroup";
import ItemList from "../itemList/ItemList"
import AddItem from "../addItem/AddItem";
import TopNav from "../topNav/TopNav";
import { useNavigate } from "react-router";
import TwoBoxes from "../twoBoxes/TwoBoxes";
import Avatars from "../avatars/Avatars"
import AllSearch from '../search/AllSearch'
import ItemModal from "../itemModal/ItemModal";






function Home({ isLoggedIn, token, clearUser, userId, name, mail, photo }) {

  const [lists, setLists] = useState([]);
  const [showTopNav, setShowTopNav] = useState(true);
  const [currentGifts, setCurrentGifts] = useState({});
  const [currentGiftsId, setCurrentGiftsId] = useState('');

  const loginCounter = useRef(0);
  
  const navigate = useNavigate();

  function chooseDisplayedGifts(list) {
    setCurrentGifts(list)
    setCurrentGiftsId(list._id)
  }

  let listsRoute = `http://localhost:4000/lists/list/owner/${userId}`;
  let giftsRoute = `http://localhost:4000/gifts/gift/${currentGiftsId}`;

  async function fetchLists() {
    if (token)
      try {
        let response = await fetch(listsRoute, {
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
          setLists({});
          console.log("No Lists Yet");
        }
      } catch (error) {
        console.log(error);
      }
  }

  async function fetchGifts() {
    if (currentGifts && token)
      try {
        let response = await fetch(giftsRoute, {
          headers: new Headers({
            "content-type": "application/json",
            authorization: token,
          }),
          method: "GET",
        });

        let results = await response.json();

        console.log('GIFTS FETCH RESPONSE ', results);

        if (response.status === 200) {
          setCurrentGifts(results.getGifts);
        } else {
          setCurrentGifts({});
          console.log("Gift List Empty");
        };

      } catch (error) {
        console.log(error);
      }
  }


  useEffect(() => {
    console.log("logged in TEST ", isLoggedIn);
    loginCounter.current++;
    if (!isLoggedIn.current && loginCounter.current > 1) navigate("/auth");
    fetchGifts();
  }, []);

  return (
    <>
      <TopNav clearUser={clearUser} showTopNav={showTopNav} />
      <Avatars/>
      <AllSearch/>
      <TwoBoxes/>
      <ItemModal/>
      <ListGroup token={token} fetchLists={fetchLists} lists={lists} />
      <ItemList token={token} fetchGifts={fetchGifts} />
      <BottomBar token={token} fetchLists={fetchLists} clearUser={clearUser} name={name} mail={mail} photo={photo} />
    </>
  );
}

export default Home;
