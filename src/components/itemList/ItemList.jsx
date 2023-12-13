import { useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import './ItemList.css';

import ListEmojiBar from '../listEmojiBar/ListEmojiBar';
import Avatars from '../avatars/Avatars';
import SaveList from '../listEmojiBar/SaveList';
import BackButton from '../backButton/BackButton';

function ItemList({
  token,
  setListDisplay,
  gifts,
  giftsId,
  setItem,
  setItemId,
  fetchGifts,
  buttonRefItem,
  setIsComponentVisibleItem,
}) {
  useEffect(() => {
    fetchGifts();
  }, [token, giftsId]);

  return (
    <motion.div
      initial={{
        x: '100vw',
      }}
      animate={{
        x: '0',
      }}
      exit={{
        x: '100vw',
      }}
      transition={{
        duration: 0.2,
        ease: 'easeIn',
      }}
      className='absolute'
    >
      <ListEmojiBar />
      {/* <Avatars /> */}
      <SaveList />

      <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins min-h-screen min-w-[100vw] flex items-center justify-center relative overflow-hidden bg-[#222]'>
        <div className='m-0 box-border font-poppins min-w-[350px] max-w-[350px] min-h-[200px] bg-[#ffffff1a] bg-opacity-25 rounded-[10px] z-10 p-5'>
          <h3 className='mx-0 mt-0 mb-[25px] px-0 pb-0 pt-2 box-border font-poppins text-white'>
            ITEM.LISTS
          </h3>
          {!gifts ? (
            <h4 className='font-semibold  text-white'>
              Please add a new gift...
            </h4>
          ) : (
            gifts?.map((gift, index) => (
              <div
                key={gift._id}
                ref={buttonRefItem}
                onClick={() => {
                  setIsComponentVisibleItem((prev) => !prev);
                  setItem(gift);
                  setItemId(gift._id);
                }}
                className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden flex justify-items-stretch justify-between p-2.5 gap-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'
              >
                <div className='flex grow flex-col relative min-w-0 m-0 px-0 pb-0 pt-1 box-border font-poppins text-white'>
                  <h2 className='absolute right-[-75px] top-1/2 -translate-y-1/2 text-[#00aeff] duration-200 text-[2em] group-hover/list:right-6'>
                    <small className='font-medium opacity-25'>#</small>{' '}
                    {index + 1}
                  </h2>
                  <div className='flex justify-between'>
                    <h4 className='font-semibold leading-[1.2em] duration-200 group-hover/list:text-[#222] capitalize overflow-hidden text-ellipsis whitespace-nowrap'>
                      {gift.title}
                    </h4>
                    <div className='shrink-0 me-0 px-0 pb-0  box-border font-poppins relative w-[20px] h-[20px]'>
                      <h5 className='absolute -top-2 -right-1 text-sm text-center font-poppins text-white group-hover/list:text-[#222] uppercase'>
                        {!gift.emoji ? '🎁' : gift.emoji}
                      </h5>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-xs duration-200 group-hover/list:text-[#222] lowercase overflow-hidden text-ellipsis whitespace-nowrap'>
                      {gift.description ? gift.description : <br />}
                    </p>
                    <div className='shrink-0 me-0 px-0 pb-0  box-border font-poppins relative w-[20px] h-[20px]'>
                      {gift.purchased && (
                      <svg
                        className='absolute w-4 h-4 bottom-0 -right-1 text-sm text-center font-poppins text-white group-hover/list:text-[#222]'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 21 21'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z'
                        />
                      </svg>
                      )}
                    </div>
                  </div>
                </div>
                {/* <div className='m-0 box-border font-poppins text-white absolute -bottom-6 right-14 flex flex-row duration-200 group-hover/list:bottom-0'>
                  <button
                    className='w-14 bg-blue-500 rounded-5 grow '
                    // onClick={() => navigate('/ItemList')}
                  >
                    Edit
                  </button>
                  <button className='w-14 bg-red-500 rounded-5 grow mr-1'>
                    Delete
                  </button>
                </div> */}
              </div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ItemList;
