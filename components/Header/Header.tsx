'use client';

import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/boardStore';
import { ChangeEvent, useCallback } from 'react';

const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  const onHandleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchString(e.target.value);
    },
    [setSearchString]
  );

  return (
    <header>
      <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>
        <div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50' />
        <Image
          src='/trello-logo.png'
          width={300}
          height={150}
          alt='Trello logo'
          className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
        />
        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
          <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
            <MagnifyingGlassIcon className='h-5 w-6 text-gray-400' />
            <input
              type='text'
              placeholder='Search'
              className='flex-1 outline-none p-2'
              value={searchString}
              onChange={onHandleChange}
            />
            <button hidden type='submit'>
              Search
            </button>
          </form>
          <Avatar name='Pavel Mezentcev' round color='#0055d1' size='50' />
        </div>
      </div>

      <div className='flex items-center justify-center px-5 md:py-5 py-2'>
        <p className='flex items-center text-sm font-light p-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]'>
          <UserCircleIcon className='inline-block h-10 w-10 text-[#0055d1] mr-1' />
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  );
};
export default Header;
