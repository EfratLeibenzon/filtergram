import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { ImgUploader } from '../cmps/img-uploader'
import { login, signup } from '../store/user.actions.js'
import { CredentialsForm } from './credentials-form.jsx'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function LoginSignup({ onChangeLoginStatus }) {

    const [isSignup, setIsSignUp] = useState(false)

    function onSubmit(user) {
        isSignup ? onSignup(user) : onLogin(user)
    }

    function onLogin(credentials) {
        login(credentials)
            .then(onChangeLoginStatus)
            .then(() => { showSuccessMsg('Logged in successfully') })
            .catch((err) => { showErrorMsg('Oops try again') })
    }

    function onSignup(user) {
        signup(user)
            .then(onChangeLoginStatus)
            .then(() => { showSuccessMsg('Signed in successfully') })
            .catch((err) => { showErrorMsg('Oops try again') })
    }

    return (
        <div className="credentials-page">
            <CredentialsForm
                onSubmit={onSubmit} isSignup={isSignup}

            />
            <div className="btns">
                <a onClick={() => setIsSignUp((prev) => !prev)}>
                    {isSignup ?
                        'Already a member? Login' :
                        'New user? Signup here'
                    }
                </a >
            </div>
        </div >
    )



    // const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    // const [isSignup, setIsSignup] = useState(false)
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     loadUsers()
    // }, [])



    // async function loadUsers() {
    //     const users = await userService.getUsers()
    //     setUsers(users)
    // }

    // function toggleSignup() {
    //     setIsSignup(!isSignup)
    // }

    // return (
    //     <div className="login-page">
    //         <div className='login-container'>
    //             <button onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>
    //         </div>
    //     </div>

    // )

}