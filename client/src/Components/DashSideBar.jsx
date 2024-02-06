import { Sidebar } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { HiArrowCircleRight, HiUser } from 'react-icons/hi'


const DashSideBar = () => {


  const location = useLocation()
  const [tab, setTab] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab')
    console.log(tabFormUrl)
  }, [location.search])

  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={"User"} labelColor="dark">
            Profile
          </Sidebar.Item>

          <Sidebar.Item icon={HiArrowCircleRight} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSideBar