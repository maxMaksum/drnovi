import React, {useContext, useRef, useState} from 'react'
import { Store } from "../components/contex/myContext"

import{fetchAdd, fetchRead}from "./CrudFunction"
import { useRouter } from 'next/router';

import SearchInput from "./SearchInput";

function FormLocation() {
 

  const { setShowLocation, alamat, setAlamat, location, setLocation,setShowSpinner, Id} = useContext(Store);
  const [newAlamat, setNewAlamat] = useState ("")
  // console.log(Id)
  const ref = useRef(null);
  const router = useRouter()

  const saveForm = async(e)=>{
    e.preventDefault()
    setShowSpinner(true)
    const data2 = await fetchAdd("/api/alamat", {alamat:alamat})
    // setAlamat("") 
   
    console.log(data2)
    if(data2.status==200){
    const alamat = await fetchRead("/api/alamat")
   
     setLocation(alamat.abc)
    }
    alert(data2.data.message)
    setShowSpinner(false)
    // console.log(alamat.abc)
    setShowLocation(false)
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  const getAlamat =(y)=>{
    setDataM({...dataM, alamat: y})
    console.log(y)
  }

 const closeOK = (e)=>{
        e.preventDefault()
        setShowLocation(false)
      }   
  
  // useEffect(()=>{
  //   setDataM({...dataM, rm:lastRM})
  // },[]) 
  
  // console.log(lastRM)
  return (
    <div className='w-full '>
        <div className='flex items-center justify-center' ref={ref}>
        <form className=" w-96 bg-white rounded-lg border border-gray-200 shadow-md p-2 dark:bg-gray-800 dark:border-gray-70 p-4 mt-4">
            <div className ="mb-2">
                <label htmlFor="rm" className ="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RM</label>
                <input
                 type="text"
                 id="rm"
                 className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
             
                value={alamat ||""}
                onChange ={(e)=>setAlamat(e.target.value)} />
               
            </div>
          
        
            
          
            <div className="flex items-center justify-center space-x-4">
               <button onClick={(e)=>saveForm(e)}type="submit" className ={"text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>Save</button>

               <button onClick={(e)=>closeOK(e)}type="submit" className ="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CLOSE</button>

            </div>
          
        </form>
        </div>

    </div>
  )
}

export default FormLocation
