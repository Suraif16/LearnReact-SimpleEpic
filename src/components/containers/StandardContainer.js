import appleBanner from '../../images/apple-banner.jpg';
import StandardLink from '../../links/StandardLink';


function StandardContainer({title, description, image, style}) {
  return (
    <div>
        <div className={`flex flex-col gap-3 items-center justify-center py-3 ${style}`}>
        <p className='text-[50px] font-semibold'>{title}</p>
        <p className='font-thin text-lg'>{description}</p>
        <div className='flex flex-row gap-3 py-3'>
        <StandardLink path='/iPhone/iphone-14' name='Learn more>>' />
        <StandardLink path='/iPhone/iphone-14' name='Buy now>>' />
        </div>
        <img src={image} alt='Apple Banner' className='w-[400px]' />
        </div>
    </div>
  )
}

export default StandardContainer
