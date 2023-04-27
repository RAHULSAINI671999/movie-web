import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppState } from "../App";

const Header = () => {
    const useAppState = useContext(AppState)
    return (
        <>
          
<div className='header sticky top-0 z-10 bg-black text-3lg flex justify-between items-center font-bold p-2 text-2xl border-b-2 border-gray-600'>
<Link to={"/"}>Spatial</Link>
{useAppState.login ? 
    <Link to={"/addmovie"}>
 <h1 className='text-lg text-white flex items-center cursor-pointer'><Button className='text-green'> <AddIcon className='mr-3 color-secondary' /> </Button>Add Movie</h1>
 </Link>
 :
 <Link to={'/login'}><h1 className='text-lg  bg-red-500 cursor-pointer flex items-center'>
          <Button><span className='text-white font-medium capitalize'>Login</span></Button>
      </h1></Link>
 }
  </div>

</>
    )
}

export default Header
