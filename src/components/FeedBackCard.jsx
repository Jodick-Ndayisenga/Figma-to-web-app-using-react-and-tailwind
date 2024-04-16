import {quotes} from '../assets';

const FeedBackCard=({content, name, img, title})=>(
    <div className='flex justify-between flex-col px-7 py-10 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="quote" className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[15px] leading-[25px] text-white my-5'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[45px] h-[45px] rounded-full'/>
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[16px] sm:text-[20px] ss:text-[13px]leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[12px] xs:text-[16px] leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )


export default FeedBackCard
