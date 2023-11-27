import { useState } from 'react'
import BottomBar from '../bottomBar/BottomBar'
import ListGroup from '../listGroup/ListGroup'
import TopNav from '../topNav/TopNav'
import { useNavigate } from 'react-router';

function Home({ isLoggedIn, token, clearUser, userId }) {

  const [lists, setLists] = useState([])

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

  // useEffect(() => {
  //   console.log("logged in TEST ", isLoggedIn);
  //   if (!isLoggedIn.current) navigate('/auth');
  // }, []);

  return (
    <div>
<TopNav clearUser={clearUser} />
<ListGroup token={token} fetchLists={fetchLists} lists={lists} />
<BottomBar />


    </div>
  )
}

export default Home