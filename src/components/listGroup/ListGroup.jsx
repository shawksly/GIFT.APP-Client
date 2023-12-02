import { useEffect, Fragment } from 'react';

import './ListGroup.css';

function ListGroup({ token, updateUser, fetchLists, lists }) {
  useEffect(() => {
    fetchLists();
  }, [token]);

  return (
    <div>
      <div className='container min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-800'>
        <div className='box min-w-350 min-h-400 bg-white bg-opacity-25 rounded-2xl z-10 p-8'>
          <h3 className='mb-8 text-white'>GIFT.LISTS</h3>
          {lists?.map((list) => {
            return (
              <Fragment key={list._id}>
                <div className='list'>
                  <div className='imgBox'></div>
                  <div className='info'>
                    <h2>
                      <small>#</small> 1
                    </h2>
                    <h4 className='capitalize'>{list.title}</h4>
                    <p className='lowercase'>{list.description}</p>
                  </div>
                </div>
              </Fragment>
            );
          })}
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
          <div className='list'>
            <div className='imgBox'>
              {/* <img src="./images/1.jpg" alt=""> */}
            </div>
            <div className='info'>
              <h2>
                <small>#</small> 1
              </h2>
              <h4>Item Title</h4>
              <p>Item Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListGroup;

// <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
// <a href="#" aria-current="true" className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
//     Profile
// </a>
// <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
//     Settings
// </a>
// <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
//     Messages
// </a>
// <a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
//     Download
// </a>
// </div>

{
  /* <div className="list">
  <div className="imgBox">
    <img src="./images/1.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 1
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div>
<div className="list">
  <div className="imgBox">
    <img src="./images/2.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 2
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div>
<div className="list">
  <div className="imgBox">
    <img src="./images/4.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 3
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div>
<div className="list">
  <div className="imgBox">
    <img src="./images/3.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 4
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div>
<div className="list">
  <div className="imgBox">
    <img src="./images/5.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 5
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div> */
}