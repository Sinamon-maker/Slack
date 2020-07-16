import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setChanelname, addNametochaneLlist } from '../redux/reducers/chanels'

const Newchanel = () => {
  // const uniqchanel = useSelector((store) => store.chanels.uniqchanel)
  const [isEditmode, setMode] = useState(true)

  const dispatch = useDispatch()
  const onChange = (e) => {
    const newValue = e.target.value
    dispatch(setChanelname(newValue))
  }

  return isEditmode ? (
    <button
      className="px-4 mb-1 mr-8 font-sans text-sm tracking-wide hover:bg-teal-700 focus:outline-none focus:shadow-outline"
      type="button"
      onClick={() => setMode(false)}
    >
      <div className="font-sans text-sm tracking-wide hover:bg-teal-700 focus:outline-none focus:shadow-outline">
        Add new channel
      </div>
    </button>
  ) : (
    <div className="flex flex-row w-3/5">
      <div className="bg-purple-900 text-xl">
        {' '}
        <input
          type="text"
          onChange={onChange}
          className="font-sans text-purple-800 text-sm bg-grey-200"
        />{' '}
      </div>
      <div className="mr-2 ml-2">
        <button
          className="bg-teal-700 text-xl text-grey-400 mb-8 mr-2 px-3 hover:bg-teal-700 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            setMode(true)
            dispatch(addNametochaneLlist())
          }}
        >
          <span className="hover:bg-teal-700 focus:outline-none focus:shadow-outline">+</span>
        </button>
      </div>
    </div>
  )
}

Newchanel.propTypes = {}

export default React.memo(Newchanel)
