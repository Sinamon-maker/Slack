import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { receiveChanels } from '../redux/reducers/chanels'

import Itemchanel from './itemchanel'

const Listofchannels = () => {
  const chanels = useSelector((s) => s.chanels.chanels)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(receiveChanels())
  }, [])

  const ListOfchannels = chanels.reduce((acc, rec) => {
    return acc.concat(rec.chanelname)
  }, [])

  return (
    <div>
      {ListOfchannels.map((chanel) => {
        return (
          <div key={chanel}>
            {' '}
            <Itemchanel chanel={chanel} />
          </div>
        )
      })}

      <div className="px-4 mb-3 font-sans">Direct Messages</div>

      <div className="flex items-center mb-3 px-4">
        <span className="bg-green-500 rounded-full block w-2 h-2 mr-2" />
        <span className="text-purple-100">
          Olivia Dunham <i className="text-grey-400 text-sm">(me)</i>
        </span>
      </div>

      <div className="flex items-center mb-3 px-4">
        <span className="bg-green-400 rounded-full block w-2 h-2 mr-2" />
        <span className="text-purple-100">Adam Bishop</span>
      </div>

      <div className="flex items-center px-4 mb-6">
        <span className="border rounded-full block w-2 h-2 mr-2" />
        <span className="text-purple-100">killgt</span>
      </div>
    </div>
  )
}

Listofchannels.propTypes = {}

export default React.memo(Listofchannels)
