import { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import ItemList from '../itemList/ItemList';
import TwoBoxes from '../twoBoxes/TwoBoxes';

import './ListGroup.css';

function ListGroup({ token, setListDisplay, fetchLists, lists, setgiftsId }) {
  useEffect(() => {
    fetchLists();
  }, [token]);

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{
        x: '-100vw',
      }}
      animate={{
        x: '0',
      }}
      exit={{
        x: '-100vw',
      }}
      transition={{
        duration: 0.2,
        ease: 'easeIn',
      }}
      className='absolute'
    >
      <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins min-h-screen min-w-[100vw] flex items-center justify-center relative overflow-hidden bg-[#222]'>
        <div className='m-0 box-border font-poppins min-w-[350px] min-h-[400px] bg-[#ffffff1a] bg-opacity-25 rounded-[10px] z-10 p-5'>
          <h3 className='mx-0 mt-0 mb-[25px] px-0 pb-0 pt-2 box-border font-poppins text-white'>
            GIFT.LISTS
          </h3>
          {!lists.listOwner
            ? null
            : lists.listOwner?.map((list) => {
            return (
              <Fragment key={list._id}>
                <div className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden p-2.5 gap-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'>
                  <div
                    onClick={() => {
                      setgiftsId(list._id);
                      setListDisplay(false);
                    }}
                    className='flex items-center'
                  >
                    <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins relative w-[60px] h-[60px] rounded-[10px] overflow-hidden'>
                      <h5 className='text-3xl text-center font-poppins text-white group-hover/list:text-[#222]'>
                        🎁
                      </h5>
                      {/* <img src="./images/1.jpg" alt="" className='m-0 px-0 pb-0 pt-2 box-border font-poppins object-cover w-full h-full'> */}
                    </div>
                    <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins text-white'>
                      {/* <h2 className='absolute right-[-55px] top-1/2 -translate-y-1/2 text-[#00aeff] duration-200 text-[2em] group-hover/list:right-5'>
                      <small className='font-medium opacity-25'>#</small> 1
                    </h2> */}
                      <h4 className='font-semibold leading-[1.2em] duration-200 group-hover/list:text-[#222] capitalize'>
                        {list.title}
                      </h4>
                      <p className='text-xs duration-200 group-hover/list:text-[#222] lowercase'>
                        {list.description}
                      </p>
                    </div>
                  </div>
                  <div className='m-0 p-0 box-border font-poppins text-white absolute bottom-0 -right-14 flex flex-col w-14 h-20 duration-200 group-hover/list:-right-0'>
                    <button
                      onClick={() => navigate('/ItemList')}
                      className='w-14 bg-blue-500 rounded-5 grow'
                    >
                      Edit
                    </button>
                    <button className='w-14 bg-red-500 rounded-5 grow'>
                      Delete
                    </button>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default ListGroup;
