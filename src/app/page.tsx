

import { createContext } from 'react';
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, SkipBack, SkipForward,Shuffle, Repeat, Mic2, LayoutList, Headphones,Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 '>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>
          <nav className=' flex flex-col  gap-3 mt-6 pt-10 border-t  border-zinc-800'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 '>Hot Hits Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 '>Aniver Funk</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 '>My Playlist</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 '>Top Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 '>Playerlist</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 '>Playerlist</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className=' rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className=' rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'> Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-6'>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition ease-in-out duration-300'>
              <Image src="/assets/justin.jpg" width="104" height="104" alt='Justin' />
              <strong>Justin Bieber</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition ease-in-out duration-300 '>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition ease-in-out duration-300'>
              <Image src="/assets/justin.jpg" width="104" height="104" alt='Justin' />
              <strong>Justin Bieber</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition ease-in-out duration-300 '>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition ease-in-out duration-300'>
              <Image src="/assets/justin.jpg" width="104" height="104" alt='Justin' />
              <strong>Justin Bieber</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition ease-in-out duration-300 '>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition ease-in-out duration-300'>
              <Image src="/assets/justin.jpg" width="104" height="104" alt='Justin' />
              <strong>Justin Bieber</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition ease-in-out duration-300 '>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition ease-in-out duration-300'>
              <Image src="/assets/justin.jpg" width="104" height="104" alt='Justin' />
              <strong>Justin Bieber</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition ease-in-out duration-300 '>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition ease-in-out duration-300'>
              <Image src="/assets/justin.jpg" width="104" height="104" alt='Justin' />
              <strong>Justin Bieber</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transition ease-in-out duration-300 '>
                <Play />
              </button>
            </a>
          </div>
          <h2 className='font-semibold text-3xl mt-10'> Made for Felipe Santana de Jesus</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="#" className='bg-zinc-700/10 p-3 rounded flex flex-col gap-2 hover:bg-zinc-700/30 transition duration-300'> 
              <Image src="/assets/justin.jpg" className='w-full' width={120} height={120} alt='Justin' />
              <strong className='font-semibold'>Daily 1</strong>
              <span className='text-xs text-zinc-500'>Heloo world, girl in red and more</span>
            </a>
            <a href="#" className='bg-zinc-700/10 p-3 rounded flex flex-col gap-2 hover:bg-zinc-700/30 transition duration-300'> 
              <Image src="/assets/justin.jpg" className='w-full' width={120} height={120} alt='Justin' />
              <strong className='font-semibold'>Daily 1</strong>
              <span className='text-xs text-zinc-500'>Heloo world, girl in red and more</span>
            </a>
            <a href="#" className='bg-zinc-700/10 p-3 rounded flex flex-col gap-2 hover:bg-zinc-700/30 transition duration-300'> 
              <Image src="/assets/justin.jpg" className='w-full' width={120} height={120} alt='Justin' />
              <strong className='font-semibold'>Daily 1</strong>
              <span className=' text-xs text-zinc-500'>Heloo world, girl in red and more</span>
            </a>
            <a href="#" className='bg-zinc-700/10 p-3 rounded flex flex-col gap-2 hover:bg-zinc-700/30 transition duration-300'> 
              <Image src="/assets/justin.jpg" className='w-full' width={120} height={120} alt='Justin' />
              <strong className='font-semibold'>Daily 1</strong>
              <span className='text-xs text-zinc-500'>Heloo world, girl in red and more</span>
            </a>
            <a href="#" className='bg-zinc-700/10 p-3 rounded flex flex-col gap-2 hover:bg-zinc-700/30 transition duration-300'> 
              <Image src="/assets/justin.jpg" className='w-full' width={120} height={120} alt='Justin' />
              <strong className='font-semibold'>Daily 1</strong>
              <span className='text-xs text-zinc-500'>Heloo world, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex items-center gap-2 '>
          <Image src="/assets/justin.jpg" width={48} height={48} alt='Justin' />
          <div className='flex flex-col'>
            <strong className='font-normal'>Love Yourself</strong>
            <span className='text-xs text-zinc-400'>Justin Bieber</span>
          </div>
        </div>
        <div className='flex items-center flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack className='text-zinc-200'/>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-white text-black ml-auto'>
                  <Play />
              </button>
            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-500'>
              <div className='bg-zinc-200 w-20 h-1 border-t border-zinc-800'></div>
            </div>
            <span className='text-sm text-zinc-400'>2:20</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2  size={18} className='text-zinc-200'/>
          <LayoutList  size={18} className='text-zinc-200'/>
          <Headphones  size={18} className='text-zinc-200'/>
          <div className='flex items-center'>
            <Volume size={18} className='text-zinc-200'/>
            <div className='h-1 rounded-full w-20 bg-zinc-500'>
              <div className='h-1 w-10 rounded-full bg-white'></div>
            </div>
          </div>
          <Maximize2 size={18} className='text-zinc-200'/> 
        </div>
      </footer>
    </div>
  )
}
