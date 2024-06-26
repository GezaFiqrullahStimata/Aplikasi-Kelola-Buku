import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Register = (props) => {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Mohon masukkan email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Mohon masukkan format email dengan benar')
      return
    }
  
    if ('' === password) {
      setPasswordError('Mohon masukkan password')
      return
    }
  
    if (password.length < 7) {
      setPasswordError('Password minimal 8 karakter')
      return
    }


    axios.post('http://localhost:8800/register',{nama:nama,email:email,password:password})
    .then((res)=>{
        navigate('/')
        alert("Registrasi berhasil,silahkan login...")
        console.log(JSON.stringify(res))
    })
    .catch((err)=>{
        console.error(err)
    })
  
    // Authentication calls will be made here...
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Registrasi</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={nama}
          placeholder="Nama"
          onChange={(ev) => setNama(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Registrasi'} />
      </div>
    </div>
  )
}

export default Register