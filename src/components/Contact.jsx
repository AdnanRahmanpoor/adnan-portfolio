import { Link } from 'react-router-dom';
import Transition from './transition';
import TelegramIcon from '../assets/telegram.svg';
import GmailIcon from '../assets/gmail.svg';
import InstagramIcon from '../assets/instagram.svg';

const Contact = () => {
  return (
    <>
      <div className='flex flex-row w-auto h-auto justify-center mt-10 mb-5 mx-auto'>
        <Link
          to={'/'}
          className='relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
        >
          <span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
          <span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
            <span className='relative text-white'>Home</span>
          </span>
        </Link>
        <Link
          to={'/about'}
          className='relative ml-5 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
        >
          <span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
          <span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
            <span className='relative text-white'>About</span>
          </span>
        </Link>
        <Link
          to={'/projects'}
          className='relative ml-5 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
        >
          <span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
          <span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
            <span className='relative text-white'>Projects</span>
          </span>
        </Link>
      </div>
      <div className='flex flex-col justify-center mt-10 mx-auto'>
        <h1 className='text-5xl mx-auto'>Contact Me</h1>
        <div className='flex flex-col mt-10 mx-auto'>
          <Link to='mailto:adnanrahmanpoor@gmail.com'>
            <button className='flex items-center bg-red-600 my-2 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-950'>
              <img src={GmailIcon} alt='' className='h-6 w-6 mr-2' />
              <span>Email Me</span>
            </button>{' '}
          </Link>
          <Link to='https://t.me/AdnanRp'>
            <button className='flex items-center bg-[#2197c9]  my-2   rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-sky-600 hover:text-[white] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-800'>
              <img src={TelegramIcon} className='h-6 w-6 mr-2' />
              <span>Telegram</span>
            </button>{' '}
          </Link>
          <Link to='https://instagram.com/adnanrahmanpoor'>
            <button className='flex items-center bg-white  my-2   rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-pink-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-950'>
              <img src={InstagramIcon} alt='' className='h-6 w-6 mr-2' />
              <span>Instagram</span>
            </button>{' '}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Transition(Contact);
