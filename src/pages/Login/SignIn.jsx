import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { Input } from '../../components/Input'
import { Context } from '../../Context/Context'
import { useContext } from 'react'
function SignIn(e) {
  const navigate = useNavigate()
  const { setToken } = useContext(Context)
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    }
    if (data.login == 'Azamat' && data.password == '123') {
      setToken(data)
      navigate('/')
    } else {
      alert('Login yoki password xato')
    }
  }

  return (
    <div>
      <div className="flex justify-center mt-[100px] text-[#4F4F4F] text-[36px] font-kumbh font-semibold text-center">
        <h2 className="font-kumbh font-semibold">
          Welcome, Log into your account
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <p className="mt-[100px] mb-[14px] text-[#667085] text-[16px] font-kumbh font-medium">
          It is our great pleasure to have you on board!
        </p>

        <form onSubmit={handleSubmit} className="w-[512px] text-center">
          <Input
            isRequired={true}
            placeholder="Enter your Login"
            type="text"
            name="login"
            inputVal={(onchange = (evt) => console.log(evt))}
            extraStyle={`mb-[14px] bg-slate-100`}
          />
          <Input
            isRequired={true}
            placeholder="Enter your password"
            type="password"
            name="password"
            extraStyle="mb-[14px] bg-slate-100"
          />

          <Button
            extraClass={
              'pt-[13px]  pl-[101px] pr-[101px] pb-[13px] bg-[#2D88D4] rounded-[10px] font-kumbh font-semibold text-[16px] text-white'
            }
            title="Login"
            type="submit"
          />
        </form>
        <Link
          className="text-[#2D88D4] mt-[14px] mb-[100px] text-center text-[16px] font-kumbh font-semibold"
          to="/sign-up"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default SignIn
