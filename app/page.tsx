export default function Home() {
  return (
    <main className='flex-grow bg-gray-800 text-white'>
      <div className='h-screen flex-col gap-y-2'>
        <h1 className='text-xl'>This site is still under development😕</h1>
        <h2 className='text-lg'>
          Check my resume{' '}
          <a
            href='https://drive.google.com/file/d/106k85SZrdnckTypWfRPZUEMr5agtEyGC/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>here</button>
          </a>{' '}
          👈
        </h2>
      </div>
    </main>
  );
}
