import React, { useState } from 'react'
import Button from '../../components/Button'
import { Input } from '../../components/Input'

function InputForm() {
  const AllData = []
  const [fullName, setFullName] = useState('')
  const [className, setClassName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [textarea, setTextarea] = useState('')
  const [img, setImg] = useState(null)
  const handleFormSubmit = (e) => {
    e.preventDefault()

    const data = {
      FullName: fullName.trim(),
      Subject: subject.trim(),
      Class: className.trim(),
      Email: email.trim(),
      Gender: gender.trim(),
      age: age.trim(),
      textarea: textarea.trim(),
      img: img,
    }
    AllData.push(data)

    localStorage.setItem('teachers', JSON.stringify(AllData))
  }

  const handleInputChange = (setter) => (e) => setter(e.target.value)
  const handleFileChange = (e) => setImg(e.target.files[0])

  return (
    <div className="p-[30px]">
      <div>
        <form onSubmit={handleFormSubmit} className="max-w-[981px] h-[591px]">
          <div className="flex justify-between">
            <h2>Add teacher</h2>
            <Button
              title={'Save'}
              type={'submit'}
              extraClass={
                'pt-[12px] pb-[12px] pr-[14px] pl-[14px] rounded-[5px]'
              }
            />
          </div>
          <div className="flex gap-[60px]">
            <div>
              <p>Full Name</p>
              <Input
                title={'Full Name'}
                placeholder={'Full Name'}
                name={'FullName'}
                value={fullName}
                SetState={setFullName}
                extraStyle={'w-[407px] mb-[36px]'}
              />
            </div>
            <div>
              <p>Class</p>
              <Input
                title={'Class'}
                placeholder={'Class'}
                name={'Class'}
                value={className}
                SetState= {setClassName}
                extraStyle={'w-[407px] mb-[36px]'}
              />
            </div>
          </div>
          <div className="flex gap-[60px]">
            <div>
              <p>Email address</p>
              <Input
                title={'Email address'}
                placeholder={'Email address'}
                name={'Email'}
                value={email}
                SetState={setEmail}
                extraStyle={'w-[407px] mb-[36px]'}
              />
            </div>
            <div>
              <p>Gender</p>
              <Input
                title={'Gender'}
                placeholder={'Gender'}
                name={'Gender'}
                value={gender}
                SetState={setGender}
                extraStyle={'w-[407px] mb-[36px]'}
              />
            </div>
          </div>
          <div className="flex gap-[60px]">
            <div>
              <p>Subject</p>
              <Input
                title={'Subject'}
                placeholder={'Subject'}
                name={'Subject'}
                value={subject}
                SetState={setSubject}
                extraStyle={'w-[407px] mb-[36px]'}
              />
            </div>
            <div>
              <p>Age</p>
              <Input
                title={'Age'}
                placeholder={'Age'}
                name={'age'}
                value={age}
                SetState={setAge}
                extraStyle={'w-[407px] mb-[36px]'}
              />
            </div>
          </div>
          <p>About</p>
          <div className="flex">
            <textarea
              className="w-[406px] h-[172px] p-[20px]"
              placeholder="About"
              name="textarea"
              value={textarea}
              SetState={setTextarea}
            ></textarea>
            <Input
              type={'file'}
              name={'img'}
              title={'Import Img'}
              placeholder={'Import Img'}
              onChange={handleFileChange}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputForm
