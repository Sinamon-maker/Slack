import React from 'react'

import Chanels from './chanels'
import Message from './message'

// import wave from '../assets/images/wave.jpg'

const Home = () => {
  return (
    <div className="w-full border shadow">
      <div className="flex">
        <Chanels />
        <div className="w-full flex flex-col">
          <div className="border-b flex px-6 py-2 items-center">
            <div className="flex flex-col">
              <h3 className="text-grey-800 text-md mb-1 font-extrabold">#general</h3>
              <div className="text-grey-800 font-thin text-sm">
                Chit-chattin$ about ugly HTML and mixing of concerns.
              </div>
            </div>
            <div className="ml-auto hidden md:block">
              <input
                type="search"
                placeholder="Search"
                className="border border-grey rounded-lg p-2"
              />
            </div>
          </div>
          <div className="px-6 py-4 flex-1 overflow-scroll-x">Messages</div>
          <Message />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
