import { Link } from 'react-router-dom';
import Transition from './transition';

function About() {
  return (
    <>
      <div className='flex flex-row w-auto h-auto justify-center mt-10 mb-5 mx-auto'>
        <Link
          to={'/'}
          className='relative mr-5 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
        >
          <span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
          <span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
            <span className='relative text-white'>Home</span>
          </span>
        </Link>
        <Link
          to={'/Projects'}
          className='relative ml-5 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
        >
          <span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
          <span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
            <span className='relative text-white'>Projects</span>
          </span>
        </Link>
      </div>
      <section className='flex flex-col md:flex-row w-full h-auto mb-20'>
        <div className='flex flex-col items-center justify-start w-full pt-6 mx-auto px-5 lg:px-20'>
          <h1 className='text-5xl text-neutral-300 font-black'>About Me</h1>

          {/* Card */}
          <div className='relative block overflow-hidden rounded-lg border bg-slate-900 bg-opacity-40  border-gray-100 p-4 mt-10  lg:p-8'>
            <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

            <div className='sm:flex sm:justify-between sm:gap-4'>
              <div>
                <h2 className='text-2xl font-bold text-red-400 sm:text-xl'>
                  Adnan Rahmanpoor
                </h2>

                <p className='mt-1 text-sm font-medium text-gray-600'>
                  Web Developer
                </p>
              </div>
            </div>

            <div className='mt-4'>
              <p className='max-w-[60ch] text-md text-gray-300'>
                Hey there! I&apos;m a self-taught (& still learning) web
                developer who loves turning ideas into cool digital stuff. I
                enjoy creating websites and everyday I learn new tricks to make
                them look good and work smoothly.
              </p>{' '}
              <p className='max-w-[60ch] text-md text text-gray-300 mt-3'>
                For web development, I started with learning the basics, HTML,
                CSS and Javascript. I use{' '}
                <span className='text-purple-500'>Bootstrap 5</span> and{' '}
                <span className='text-sky-400'>TailwindCSS</span> to make the UI
                creation faster & responsive. I started learning{' '}
                <span className='text-blue-700'>ReactJS</span> and recently{' '}
                <span className='bg-black'>NextJS</span>, which I&apos;ve used
                to build <span className='font-bold'>this portfolio site</span>{' '}
                & several other in progress projects. I&apos;m focusing on
                building simple landing pages for now, & build better and bigger
                projects overtime as I gain more experience.
              </p>{' '}
              <p className='max-w-[60ch] text-md text-gray-300 mt-3'>
                I love using Windows OS and Linux systems. I also code in{' '}
                <span className='text-sky-700'>Py</span>
                <span className='text-yellow-400'>thon</span> &{' '}
                <span className='text-blue-700'>R</span> from time to time and
                learn Data Analysis as well.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Transition(About);
