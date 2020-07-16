import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserField, updatePasswordField, signUp } from '../redux/reducers/users'

const Register = () => {
  const username = useSelector((s) => s.users.username)
  const password = useSelector((s) => s.users.password)
  const dispatch = useDispatch()

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div>
        <form className="max-w-sm">
          <div className="md:flex md:items-center justify-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={username}
                onChange={(e) => {
                  dispatch(updateUserField(e.target.value))
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-username"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-username"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => {
                  dispatch(updatePasswordField(e.target.value))
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">what this div for?</div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => {
                  dispatch(signUp())
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

Register.propTypes = {}

export default React.memo(Register)
