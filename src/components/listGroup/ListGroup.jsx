import { useEffect, Fragment } from "react";
import { useNavigate } from "react-router";
import ItemList from "../itemList/ItemList";


import "./ListGroup.css";

function ListGroup({ token, updateUser, fetchLists, lists }) {

  useEffect(() => {
    fetchLists();
  }, [token])
  


  const navigate = useNavigate();

  return (
    <div>
      <div className="container min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-800">
        <div className="box min-w-350 min-h-400 bg-white bg-opacity-25 rounded-2xl z-10 p-8">
          <h3 className="mb-8 text-white">GIFT.LISTS</h3>
          {lists?.map((list) => {
            return (
              <Fragment key={list._id}>
                <div className="list">
                <div className="imgBox">
                </div>
                <div className="info">
                  <h2>
                    <small>#</small> 1
                  </h2>
                  <h4 className="capitalize">{list.title}</h4>
                  <p className="lowercase">{list.description}</p>
                 
                </div>
              </div>
            </Fragment>
            )
          })}
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
              
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
              <div className="absolute bottom-0 right-0 flex flex-col w-14 h-20  break-all">
          <button onClick={()=> navigate  ('/ItemList')} className="w-full h-10 bg-blue-500 rounded-5">Edit</button>
          <button className="w-full h-10 bg-red-500 rounded-5" >Delete</button>
        </div>
            </div>
          </div>
          
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className="info">
              <h2>
                <small>#</small> 1
              </h2>
              <h4>List Title</h4>
              <p>List Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListGroup;

