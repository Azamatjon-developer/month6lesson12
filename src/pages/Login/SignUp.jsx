import { Link, useNavigate } from 'react-router-dom'; // useParams olib tashlandi
import { Input } from '../../components/Input';
import React, { useEffect } from 'react';
import Button from '../../components/Button';
import { useContext } from 'react'
import { Context } from '../../Context/Context'

function SignUp() {
  const navigate = useNavigate();
  const {setToken} = useContext(Context)

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };

    if (data.login == "Azamat" && data.password =="123") {
      setToken(data); 
      navigate("/");
    } else {
      alert("Login yoki password xato");
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-[100px] text-[36px] text-[#4F4F4F] font-kumbh font-semibold">
        <h2 className="text-center">Welcome, Sign up </h2>
      </div>
      <div className="flex flex-col items-center">
        <p className="mt-[100px] text-[#667085] font-kumbh font-medium">
          It is our great pleasure to have you on board!{' '}
        </p>
        <form onSubmit={handleSubmitSignUp}>
          <Input
            isRequired={true}
            placeholder="Enter your Email"
            type="email"
            name="email"  extraStyle="mb-[14px]"
          />
          <Input
            isRequired={true}
            placeholder="Create your Login"
            type="text"
            name="login"
            extraStyle="mb-[14px]"
          />
          <Input
            isRequired={true}
            placeholder="Enter your password"
            type="password"
            name="password"
            extraStyle="mb-[14px]"
          />
          <Button title={'Sign up'} type={'submit'} extraClass={'mb-[100px]'} /> {/* Button form ichiga qo'shildi */}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
