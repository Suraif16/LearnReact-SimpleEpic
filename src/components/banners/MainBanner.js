import appleBanner from '../../images/apple-banner.jpg';
import StandardLink from '../../links/StandardLink';

function MainBanner() {
  return (
    <div className='flex flex-col gap-3 items-center justify-center py-3'>
    <p className='text-[50px] font-semibold'>iPhone 14</p>
    <p className='font-thin text-lg'>With awesome quality and performance</p>
    <div className='flex flex-row gap-3 py-3'>
    <StandardLink path='/iPhone/iphone-14' name='Learn more>>' />
    <StandardLink path='/iPhone/iphone-14' name='Buy now>>' />
    </div>
      <img src={appleBanner} alt='Apple Banner' className='w-[800px]' />
    </div>
  )
}

export default MainBanner
