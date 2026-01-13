import { useState } from "react"
import { authApi } from "../api/auth/auth.api"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await authApi.login({
      email: e.target.email.value,
      password: e.target.password.value
    })

    if (result) {
      localStorage.setItem("accessToken", result.accessToken)
    }


  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-gray-600">Please login to your account</p>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm  font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
      >
        Login
      </button>
    </form>
  )
}
