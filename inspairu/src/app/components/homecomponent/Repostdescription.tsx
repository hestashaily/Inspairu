import React from 'react'

const Repostdescription = () => {
  return (
    <div className='flex flex-col items-start'>
        <label className='font-[600] text-[18px] text-[#525252] mb-[10px]'>Description</label>
        <input type="text" placeholder='Write somethig....caption, hashtags, title etc.' className='py-[10px] mb-[10px] px-[14px] border-1 w-full outline-none border-[#CBD5E1] rounded-[14px]' />
    </div>
  )
}

export default Repostdescription