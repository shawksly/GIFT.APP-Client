import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import useComponentVisible from '../../utils/useComponentVisible';
import BottomBar from '../bottomBar/BottomBar';
import ListGroup from '../listGroup/ListGroup';
import ItemList from '../itemList/ItemList';
import { useNavigate } from 'react-router';
import ItemModal from '../itemModal/ItemModal';
import TopNav from '../topNav/TopNav';
import Avatars from '../avatars/Avatars';

function Home({
  isLoggedIn,
  token,
  updateUser,
  clearUser,
  userId,
  name,
  mail,
  photo,
}) {
  const [listDisplay, setListDisplay] = useState(true);
  const [lists, setLists] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [giftsId, setGiftsId] = useState('');
  const [item, setItem] = useState([]);
  const [itemId, setItemId] = useState([]);
  const [currentList, setCurrentList] = useState('');
  const [currentListId, setCurrentListId] = useState('');
  const [friendsList, setFriendsList] = useState([]);
  const [friendRequestsList, setFriendRequestsList] = useState([]);

  const [displayFriends, setDisplayFriends] = useState(false);

  const loginCounter = useRef(0);

  const navigate = useNavigate();

  let listsRoute = `http://localhost:4000/lists/list/owner/${userId}`;
  let friendsRoute = `http://localhost:4000/user/friends/list`;
  let giftsRoute = `http://localhost:4000/gifts/gift/${giftsId}`;
  let friendsListsRoute = `http://localhost:4000/lists/friends`;

  const {
    dropDownRef: dropdownRefItem,
    buttonRef: buttonRefItem,
    isComponentVisible: isComponentVisibleItem,
    setIsComponentVisible: setIsComponentVisibleItem,
  } = useComponentVisible(false);

  const {
    dropDownRef: dropdownRefEditList,
    buttonRef: buttonRefEditList,
    isComponentVisible: isComponentVisibleEditList,
    setIsComponentVisible: setIsComponentVisibleEditList,
  } = useComponentVisible(false);

  const {
    dropDownRef: dropdownRefFriendsList,
    buttonRef: buttonRefFriendsList,
    isComponentVisible: isComponentVisibleFriendsList,
    setIsComponentVisible: setIsComponentVisibleFriendsList,
  } = useComponentVisible(false);

  const {
    dropDownRef: dropdownRefEditItem,
    buttonRef: buttonRefEditItem,
    isComponentVisible: isComponentVisibleEditItem,
    setIsComponentVisible: setIsComponentVisibleEditItem,
  } = useComponentVisible(false);

  async function fetchLists() {
    if (token && userId)
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
          if (results.listOwner.length > 0) {
            setLists(results.listOwner);
          } else {
            setLists([]);
            console.log('No Lists Yet');
          }
        } else {
          setLists([]);
        }
      } catch (error) {
        console.log(error);
      }
  }

  async function fetchFriends() {
    if (token && userId)
      try {
        let response = await fetch(friendsRoute, {
          headers: new Headers({
            'content-type': 'application/json',
            authorization: token,
          }),
          method: 'GET',
        });

        console.log('friends response', response);
        let results = await response.json();

        console.log('friends results', results);
        if (response.status === 200) {
          if (results.friendsList.length > 0) {
            setFriendsList(results.friendsList);
          } else {
            setFriendsList([]);
            console.log('No Friends Yet');
          }

          if (results.friendRequestsList.length > 0) {
            setFriendRequestsList(results.friendRequestsList);
          } else {
            setFriendRequestsList([]);
            console.log('No Friend Requests Yet');
          }
        } else {
          setFriendsList([]);
          setFriendRequestsList([]);
        }
      } catch (error) {
        console.log(error);
      }
  }

  async function fetchFriendsLists() {
    if (token && userId)
      try {
        let response = await fetch(friendsListsRoute, {
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
          if (results.friendsLists.length > 0) {
            setLists(results.friendsLists);
          } else {
            setLists([]);
            setDisplayFriends(false);
            console.log('No Friends With Lists');
          }
        } else {
          setLists([]);
          setDisplayFriends(false);
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
          if (results.getGifts.length > 0) {
            setGifts(results.getGifts);
          } else {
            setGifts([]);
            console.log('Gift List Empty');
          }
        } else {
          setGifts([]);
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
      {/* <TopNav clearUser={clearUser} /> */}
      {/* <Avatars /> */}
      <div className='relative'>
        <AnimatePresence>
          {isComponentVisibleItem && (
            <ItemModal
              key='itemModal'
              token={token}
              userId={userId}
              ref={dropdownRefItem}
              item={item}
              setItem={setItem}
              itemId={itemId}
              setItemId={setItemId}
              setIsComponentVisibleItem={setIsComponentVisibleItem}
              buttonRefEditItem={buttonRefEditItem}
              setIsComponentVisibleEditItem={setIsComponentVisibleEditItem}
              fetchGifts={fetchGifts}
            />
          )}
        </AnimatePresence>
      </div>
      <div className='relative'>
        <AnimatePresence initial={false}>
          {listDisplay ? (
            <ListGroup
              key='lists'
              token={token}
              setListDisplay={setListDisplay}
              fetchLists={fetchLists}
              lists={lists}
              fetchFriends={fetchFriends}
              fetchFriendsLists={fetchFriendsLists}
              friendsList={friendsList}
              setGiftsId={setGiftsId}
              setCurrentList={setCurrentList}
              setCurrentListId={setCurrentListId}
              name={name}
              photo={photo}
              displayFriends={displayFriends}
              setDisplayFriends={setDisplayFriends}
              setIsComponentVisibleEditList={setIsComponentVisibleEditList}
              buttonRefEditList={buttonRefEditList}
              setIsComponentVisibleFriendsList={
                setIsComponentVisibleFriendsList
              }
            />
          ) : (
            <ItemList
              key='gifts'
              token={token}
              currentList={currentList}
              gifts={gifts}
              giftsId={giftsId}
              setItem={setItem}
              setItemId={setItemId}
              fetchGifts={fetchGifts}
              buttonRefItem={buttonRefItem}
              setIsComponentVisibleItem={setIsComponentVisibleItem}
            />
          )}
        </AnimatePresence>
      </div>
      <BottomBar
        token={token}
        updateUser={updateUser}
        fetchLists={fetchLists}
        fetchFriends={fetchFriends}
        fetchFriendsLists={fetchFriendsLists}
        fetchGifts={fetchGifts}
        setListDisplay={setListDisplay}
        listDisplay={listDisplay}
        setDisplayFriends={setDisplayFriends}
        setIsComponentVisibleItem={setIsComponentVisibleItem}
        giftsId={giftsId}
        setItem={setItem}
        setItemId={setItemId}
        currentListId={currentListId}
        isComponentVisibleEditList={isComponentVisibleEditList}
        setIsComponentVisibleEditList={setIsComponentVisibleEditList}
        dropdownRefEditList={dropdownRefEditList}
        dropdownRefFriendsList={dropdownRefFriendsList}
        buttonRefFriendsList={buttonRefFriendsList}
        isComponentVisibleFriendsList={isComponentVisibleFriendsList}
        setIsComponentVisibleFriendsList={setIsComponentVisibleFriendsList}
        dropdownRefEditItem={dropdownRefEditItem}
        isComponentVisibleEditItem={isComponentVisibleEditItem}
        setIsComponentVisibleEditItem={setIsComponentVisibleEditItem}
        displayFriends={displayFriends}
        friendsList={friendsList}
        friendRequestsList={friendRequestsList}
        clearUser={clearUser}
        userId={userId}
        name={name}
        mail={mail}
        photo={photo}
        item={item}
      />
    </>
  );
}

export default Home;
