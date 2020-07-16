import React from 'react'

const Message = () => {
  return (
    <div>
      <div className="flex m-6 rounded-lg border-2 border-grey-500 overflow-hidden">
        <span className="text-3xl text-grey-400 px-3 border-r-2 border-grey">+</span>
        <input type="text" className="w-full px-4" placeholder="Message to #general" />
      </div>
    </div>
  )
}

Message.propTypes = {}

export default React.memo(Message)
