import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import{useSession, signIn, signOut} from "next-auth/react"
import Search from './Search';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useRouter } from 'next/router';
import React, {useContext, useEffect, useState} from 'react'
import { Store } from './contex/myContext'

function Headers({myPath}) {
  const router = useRouter()
  const { showForm, showSearchOK, showAddForm, setShowAddForm, showSpinner} = useContext(Store);
  const [menu, setMenu] = useState(false)

  const showFormAdd =(e)=>{
    setShowAddForm(!showAddForm)

  }

  const changeRoute =(e)=>{
    e.preventDefault()
    router.push("/location")

  }

  const changeMenu = (e)=>{
    setMenu(!menu)

  }

  return (
    <header className="w-full  bg-green-700 h-20 flex items-center justify-center shadow-lg w-full ">
        <div className="grid grid-cols-12 w-full gap-2">
            <div className='grid col-span-8'>
                  <Search/>
            </div>
            <div className='grid col-span-4'>
              <div className='flex justify-around'>
                    <div onClick={(e)=>showFormAdd(e)}  
                      className="flex items-center justify-center cursor-pointer space-x-2">
                      <p className=' hidden sm:inline-flex'>Add RM</p>
                      < DataSaverOnIcon />
                    </div>
                    <div onClick={(e)=>changeRoute(e)}  
                      className="flex items-center justify-center cursor-pointer space-x-2 ">
                      <p className=' hidden sm:inline-flex' >Location</p>
                      < AddLocationAltIcon/>
                    </div>
                    <h1 className="hidden sm:flex items-center justify-center font-bold  text-gray-50 cursor-pointer">
                        Dr Novi
                    </h1>
                   
                </div>
            </div>
        

            {/* <div className=" grid col-span-6 gap-2">
              <div className="shadow-2xl flex items-center justify-center grid grid-cols-12 ">
                <div className='grid col-span-4'>
                  <div className='flex items-center justify-center'>
                    <Image
                      onClick={() => router.push("/")}
                      src="/logo-puskesmas.png"
                      height="40"
                      width="40"
                      className="
                      w-full cursor-pointer object-fit-content rounded-full"
                    />
                      <h1 className="flex items-center justify-center font-bold  text-gray-900 cursor-pointer">
                        Dr Novi
                      </h1>
                  </div>
                </div>
                <div className=" grid col-span-8 w-full">
                    <HeaderRight showFormAdd={showFormAdd}  />
                </div>
              </div>
            </div> */}
            {/* <div className="grid col-span-1 sm:hidden">
                <div className='flex items-center justify-end'>
                  <div  
                    className=" flex items-center justify-center p-2 md:hidden cursor-pointer" 
                    onClick={(e)=>changeMenu(e)}>
                      MENU
                  </div>
                  <div className = {menu ? "flex items-center justify-center md":"hidden"} >
                    <HeaderMenu changeMenu={changeMenu} menu={menu}/>
                  </div>
              </div>  
            </div>    */}
        </div>
      </header>    
  )
}


 

  

export default Headers