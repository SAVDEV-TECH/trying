import React, { useState } from 'react'
import {Link} from "react-router-dom"

function Navbar() {

    const  [menuopen,setmenuopen]=useState(false)
    const show=()=>{
        setmenuopen(!menuopen)
    }

  return (
    <nav className='w-full h-[90px] relative z-[2]  flex items-center justify-between pl-7 pr-7'>
    <ul className='flex gap-10 my-auto'>
      <li>
          <Link className=' text-white font-bold hover:text-slate-400  transition  text-[.8125rem] ' to='/ '>
           <span>Tool</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li>
          <Link className=' text-white font-bold  hover:text-slate-400     text-[.8125rem] ' to='/ '>
           <span>image</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li>
          <Link className=' text-white font-bold  hover:text-slate-400   text-[.8125rem] ' to='/ '>
           <span>video</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li>
          <Link className='  text-white font-bold  hover:text-slate-400   text-[.8125rem] ' to='/ '>
           <span>Icon</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li>
          <Link className='  text-white font-bold  hover:text-slate-400  text-[.8125rem] ' to='/ '>
           <span>Template</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li>
          <Link className=' hover:text-slate-400  text-white font-bold   text-[.8125rem] ' to='/ '>
           <span >PsD</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>

      <li>
          <Link className='  hover:text-slate-400 text-white font-bold   text-[.8125rem] ' to='/ '>
           <span >Mocksup</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li>
          <Link className='  hover:text-slate-400 text-white font-bold   text-[.8125rem] ' to='/ '>
           <span >More</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
    </ul>
    
      
    <ul className='flex gap-10 content-center justify-center  my-auto'>
      <li>
          <Link className='   text-white font-bold hover:text-slate-400  transition  text-[.8125rem] ' to='/ '>
           <button className='border rounded-sm  px-3 py-1'>Start creating</button>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li>
          <Link className=' text-white font-bold   text-[.8125rem] ' to='/ '>
           <span className='text-orange-400  hover:text-orange-200'>pricing</span>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li>
          <Link className=' text-white font-bold   text-[.8125rem] ' to='/ '>
          <svg  style={{fill:'white', display:'inline-block'}} xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true"  ><path d="M463 538c0-55.965-22.801-84.694-42.918-110.042C402.158 405.374 388 387.535 388 349c0-.251-.011-.5-.019-.749.008-.249.019-.498.019-.749 0-48.482-18.828-94.062-53.016-128.344-28.223-28.3-64.119-46.088-102.984-51.439V166c0-13.807-11.192-25-25-25s-25 11.193-25 25v1.754C93.992 180.107 26 256.687 26 349c0 38.535-14.158 56.374-32.082 78.958C-26.199 453.306-49 482.035-49 538q0 .648.033 1.289C-48.276 574.535-19.409 603 16 603h141c0 27.57 22.43 50 50 50s50-22.43 50-50h141c35.409 0 64.276-28.465 64.967-63.711q.033-.64.033-1.289m-65 15H16c-8.271 0-15-6.729-15-15 0-38.535 14.158-56.374 32.082-78.958C53.199 433.694 76 404.965 76 349c0-73.3 58.736-132.963 130.933-133h.068c34.964 0 67.842 13.66 92.58 38.465C324.355 279.309 338 312.35 338 347.502c0 .251.011.5.019.749-.008.249-.019.498-.019.749 0 55.965 22.801 84.694 42.918 110.042C398.842 481.626 413 499.465 413 538c0 8.271-6.729 15-15 15"></path></svg>
            <ul>
             <h2 className='hidden'>Hey</h2>
            </ul>
          </Link>
      </li>
      <li className='relative'>
          <Link className='  text-white font-bold   text-[.8125rem] ' to='/ '>
           <span className='flex justify-center items-center'>
              <h3 className='  flex content-center  justify-center  pt-1 font-medium  bg-blue-500 rounded-full w-8 h-8'>S</h3>
              <svg  onClick={show} style={{fill:'white', display:'inline-block',fontSize:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" aria-hidden="true" class="_24ydrq0 _1286nb16r _1286nb12q8"><path d="M363.9 204c-3.9-9.3-13-15.4-23.1-15.4H171.1c-10.1 0-19.2 6.1-23.1 15.4s-1.7 20.1 5.4 27.2l84.9 84.9c4.9 4.9 11.3 7.3 17.7 7.3s12.8-2.4 17.7-7.3l84.9-84.9c7.1-7.1 9.2-17.9 5.3-27.2"></path></svg>
           </span>
            {
              menuopen ?
                <ul   className=' px-7  py-4 w-[300px] bg-white text-black absolute right-7  top-[50px] h-[500px]'  >
                  <div className='flex items-center justify-between pb-3 border-b-2 border-stone-950'>
                      <h2 className='w-[70px] h-[70px] bg-blue-800 flex items-center justify-center    rounded-full text-white text-[15px] '>S</h2>
                      <div className='flex flex-col gap-2 '>
                          <h3>user152405103</h3>
                          <h3>savde388@gmail.com</h3>
                          <button className='bg-blue-800 rounded-md py-2  text-white text-[14px]'>Edit</button>
                      </div>
                  </div>
             </ul>
             : null
            }
            
          </Link>
      </li>
      

      
      
    </ul>
    
  </nav>
  )
}

export default Navbar
