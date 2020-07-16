import React from 'react'

const Itemchanel = (props) => {
  return (
    <div>
      <div className="bg-teal-700 mb-6 py-1 px-4 text-white font-semi-bold ">
        <span className="pr-1 text-grey-100">#</span> {props.chanel}
      </div>
    </div>
  )
}

Itemchanel.propTypes = {}

export default React.memo(Itemchanel)
