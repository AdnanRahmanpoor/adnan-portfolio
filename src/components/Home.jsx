import { Typewriter, Cursor } from 'react-simple-typewriter';
import Transition from './transition'
import { Link } from 'react-router-dom';

function Home() {
  const text = Typewriter({
    words: [
      ' ',
      ' ',
      'HTML',
      'CSS',
      'Bootstrap',
      'TailwindCSS',
      'Javascript',
      'TypeScript',
      'ReactJS',
      'NextJS',
    ],
    loop: 999,
    typeSpeed: 60,
    deleteSpeed: 30,
  });

  return (
    <section className='flex flex-col lg:flex-row landscape:flex-row  w-full h-screen lg:mx-auto max-w-7xl'>
      <div className='flex flex-row items-center justify-center mx-auto md:w-full  lg:pl-40 pt-20 lg:pt-0 landscape:pt-0'>
        <div className='h-full w-full flex flex-col landscape:flex-col justify-center m-auto text-start'>
          <h1 className='text-gray-500 text-3xl'>Welcome</h1>
          <div className='flex flex-col w-auto h-auto'>
            <h3 className='text-gray-100 text-5xl font-black'>
              I&apos;m Adnan <br /> Rahmanpoor
            </h3>
            <p className='text-purple-300'>Web Developer</p>
            <p className='text-emerald-600 text-3xl opacity-25 font-black pt-8'>
              {text}
              <span>
                <Cursor cursorStyle='|' cursorColor='green' />
              </span>
            </p>{' '}
          </div>
          <div className='flex flex-row w-auto h-auto mt-10 self-start'>
            <Link
              to={'/About'}
              className='relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
            >
              <span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
              <span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
                <span className='relative text-white'>About</span>
              </span>
            </Link>
            <Link
              to={'/Projects'}
              className='relative mx-5 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
            >
              <span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
              <span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
                <span className='relative text-white'>Projects</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className='justify-center items-center pt-5 pb-10 my-auto mx-auto md:pr-40'>
        <img src='./src/assets/mainIconsdark.svg' alt='' />
      </div>
    </section>
  );
}
export default Transition(Home);
