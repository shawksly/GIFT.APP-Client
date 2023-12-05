import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import BottomBar from '../bottomBar/BottomBar';
import ListGroup from '../listGroup/ListGroup';
import ItemList from '../itemList/ItemList';
import AddItem from '../addItem/AddItem';
import TopNav from '../topNav/TopNav';
import { useNavigate } from 'react-router';
import TwoBoxes from '../twoBoxes/TwoBoxes';
import Avatars from '../avatars/Avatars';
import AllSearch from '../search/AllSearch';

function Home({ isLoggedIn, token, clearUser, userId, name, mail, photo }) {
  const [listDisplay, setListDisplay] = useState(true);
  const [lists, setLists] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [giftsId, setgiftsId] = useState('');

  const loginCounter = useRef(0);

  const navigate = useNavigate();

  let listsRoute = `http://localhost:4000/lists/list/owner/${userId}`;
  let giftsRoute = `http://localhost:4000/gifts/gift/${giftsId}`;

  function chooseDisplayedGifts(giftList) {
    // setGifts(giftList.gifts)
    // setGiftsId(giftList._id)
  }

  async function fetchLists() {
    if (token)
      try {
        let response = await fetch(listsRoute, {
          headers: new Headers({
            'content-type': 'application/json',
            authorization: token,
          }),
          method: 'GET',
        });

        console.log('response', response);
        let results = await response.json();

        console.log('results', results);
        if (response.status === 200) {
          setLists(results);
        } else {
          setLists({});
          console.log('No Lists Yet');
        }
      } catch (error) {
        console.log(error);
      }
  }

  async function fetchGifts() {
    if (giftsId && token)
      try {
        let response = await fetch(giftsRoute, {
          headers: new Headers({
            'content-type': 'application/json',
            authorization: token,
          }),
          method: 'GET',
        });

        let results = await response.json();

        console.log('GIFTS FETCH RESPONSE ', results);

        if (response.status === 200) {
          setGifts(results);
        } else {
          setGifts({});
          console.log('Gift List Empty');
        }
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    console.log('logged in TEST ', isLoggedIn);
    loginCounter.current++;
    if (!isLoggedIn.current && loginCounter.current > 1) navigate('/auth');
  }, []);

  return (
    <>
      <TopNav clearUser={clearUser} />
      <Avatars />
      <AllSearch />
      <TwoBoxes />
      <div className='relative'>
        <AnimatePresence initial={false}>
          {listDisplay ? (
            <ListGroup
              key="lists"
              token={token}
              setListDisplay={setListDisplay}
              fetchLists={fetchLists}
              lists={lists}
              setgiftsId={setgiftsId}
            />
          ) : (
            <ItemList
              key="gifts"
              token={token}
              setListDisplay={setListDisplay}
              gifts={gifts}
              giftsId={giftsId}
              fetchGifts={fetchGifts}
            />
          )}
        </AnimatePresence>
      </div>
      <BottomBar
        token={token}
        fetchLists={fetchLists}
        setListDisplay={setListDisplay}
        clearUser={clearUser}
        name={name}
        mail={mail}
        photo={photo}
      />
    </>
  );
}

export default Home;
