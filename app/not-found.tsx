import Link from 'next/link';
import { NotFoundImg } from '@/components/app';

export default function NotFound() {
  return (
    <div className='flex min-h-[80vh] flex-col-reverse items-center justify-center gap-x-28 p-10 md:flex-row'>
      <div className='relative scale-75 md:scale-100'>
        <div className='absolute -top-20 left-10'>
          <div className='w-20 border-[20px] border-b-[40px] border-t-0 border-transparent border-b-gray-600'></div>
          <div className='absolute left-1/2 top-7 -z-10 h-6 w-6 -translate-x-1/2 rounded-full border-0 border-gray-600 bg-yellow-200'></div>
          <div className='absolute left-1/2 top-6 -z-10 w-[460px] -translate-x-1/2 border-[200px] border-b-[380px] border-t-0 border-transparent border-b-yellow-200 border-opacity-20'></div>
        </div>
        <NotFoundImg />
      </div>
      <div className='flex flex-col items-center py-28 md:items-start'>
        <h2 className='font-retro text-6xl'>404</h2>
        <p className='font-jost mb-3 text-3xl'>PAGE NOT FOUND</p>

        <Link href={'/'}>
          <button className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-800 group-hover:from-pink-500 group-hover:to-orange-400'>
            <span className='relative rounded-md bg-gray-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
              Back to Home
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
