import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserField, updatePasswordField, signIn } from '../redux/reducers/users'

const Login = () => {
  const username = useSelector((s) => s.users.username)
  const password = useSelector((s) => s.users.password)
  const dispatch = useDispatch()

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label div className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  dispatch(updateUserField(e.target.value))
                }}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => {
                  dispatch(updatePasswordField(e.target.value))
                }}
              />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => {
                  dispatch(signIn())
                }}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </form>

        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  )
}

Login.propTypes = {}

export default React.memo(Login)
