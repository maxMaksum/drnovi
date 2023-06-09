import Head from 'next/head'
import React, { useEffect } from 'react'

import FormAdmin from '../components/FormAdmin'
import Headers from '../components/Headers'
import { useRouter } from 'next/router';

function admin() {
    const router = useRouter()
      
        return (
    <div className="w-full h-full relative bg-green-500">
        <Head>
            <title>Admin</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Headers />
        
        <div className='w-100 flex items-center justify-center'>
            <FormAdmin/>
        </div>
     

    </div>
  )
}
export default admin
