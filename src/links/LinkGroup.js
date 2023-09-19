import React from 'react'
import { NavLink } from 'react-router-dom'


const SublinkWrapper = ({children, title}) => {
    return (<div>
        <div className='font-bold text-xs pb-3 text-gray-700'>{title}</div>
        <div className='flex flex-col gap-3'>
            {children}
        </div>
     </div>)
}


const Sublink = ({path, name}) => {
    return (<NavLink to={path}><div className='text-xs hover:underline'>{name}</div></NavLink>)
} 

function LinkGroup() {
  return (
    <div className='grid grid-cols-5 border-t-2 border-t-gray-500 py-5'>
        <SublinkWrapper title='Shop and Learn'>
            <Sublink to='/' name='Mac' />
            <Sublink to='/' name='iPad' />
            <Sublink to='/' name='iPhone' />
            <Sublink to='/' name='Watch' />
            <Sublink to='/' name='TV' />
        </SublinkWrapper>
        <SublinkWrapper title='Services'>
            <Sublink to='/' name='Apple Music' />
            <Sublink to='/' name='Apple TV+' />
            <Sublink to='/' name='Apple Fitness+' />
            <Sublink to='/' name='Apple News+' />
            <Sublink to='/' name='Apple Arcade' />
            <Sublink to='/' name='iCloud' />
        </SublinkWrapper>
        <SublinkWrapper title='Account'>
            <Sublink to='/' name='Manage Your Apple ID' />
            <Sublink to='/' name='Apple Store Account' />
            <Sublink to='/' name='iCloud.com' />
        </SublinkWrapper>
        <SublinkWrapper title='Apple Store'>
            <Sublink to='/' name='Find a Store' />
            <Sublink to='/' name='Shop Online' />
            <Sublink to='/' name='Genius Bar' />
            <Sublink to='/' name='Today at Apple' />
            <Sublink to='/' name='Apple Camp' />
            <Sublink to='/' name='Apple Store App' />
            <Sublink to='/' name='Refurbished and Clearance' />
            <Sublink to='/' name='Financing' />
            <Sublink to='/' name='Apple Trade In' />
            <Sublink to='/' name='Order Status' />
            <Sublink to='/' name='Shopping Help' />
        </SublinkWrapper>
        <SublinkWrapper title='For Business'>
            <Sublink to='/' name='Apple and Business' />
            <Sublink to='/' name='Shop for Business' />
        </SublinkWrapper>

    </div>
  )
}

export default LinkGroup
