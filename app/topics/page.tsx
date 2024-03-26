export default function page() {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-[80%]'>
          <div className='topic'>
            <img src='/blog1.png' alt='topic images' className='topic-img' />
            <h1 className='topic-title'>Web</h1>
          </div>
          <div className='topic'>
            <img src='/blog3.png' alt='topic images' className='topic-img' />
            <h1 className='topic-title'>Cloud</h1>
          </div>
          <div className='topic'>
            <img src='/blog2.png' alt='topic images' className='topic-img' />
            <h1 className='topic-title'>DSA</h1>
          </div>
          <div className='topic'>
            <img src='/blog2.png' alt='topic images' className='topic-img' />
            <h1 className='topic-title'>Front End</h1>
          </div>
          <div className='topic'>
            <img src='/blog2.png' alt='topic images' className='topic-img' />
            <h1 className='topic-title'>Web</h1>
          </div>
        </div>
      </div>
    </>
  );
}
