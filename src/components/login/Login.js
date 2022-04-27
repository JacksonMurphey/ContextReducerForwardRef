import { useContext, useRef, useEffect, useReducer, useState } from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import classes from './Login.module.css'
import { emailReducer, passwordReducer, nameReducer, ageReducer } from "./LoginReducer";
import Input from "../UI/Input";
import Button from "../UI/Button";


const Login = () => {

    const [formIsValid, setFormIsValid] = useState(false)

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    })
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })
    const [nameState, dispatchName] = useReducer(nameReducer, {
        value: '',
        isValid: null
    })
    const [ageState, dispatchAge] = useReducer(ageReducer, {
        value: '',
        isValid: null
    })

    const context = useContext(AuthContext)

    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()
    const ageRef = useRef()

    const { isValid: emailValid } = emailState
    const { isValid: passwordValid } = passwordState
    const { isValid: nameValid } = nameState
    const { isValid: ageValid } = ageState


    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Checking Validity')
            setFormIsValid(emailValid && passwordValid && nameValid && ageValid)
        }, 500)
        return () => {
            console.log('In Cleanup')
            clearTimeout(timer)
        }
    }, [emailValid, passwordValid, nameValid, ageValid])

    //EventListeners for Change
    const emailChangeHandler = e => {
        dispatchEmail({ type: "USER_INPUT", payload: e.target.value })
    }
    const passwordChangeHandler = e => {
        dispatchPassword({ type: "USER_INPUT", payload: e.target.value })
    }
    const nameChangeHandler = e => {
        dispatchName({ type: "USER_INPUT", payload: e.target.value })
    }
    const ageChangeHandler = e => {
        dispatchAge({ type: "USER_INPUT", payload: e.target.value })
    }

    //Validotor checks
    const validateEmail = () => {
        dispatchEmail({ type: 'INPUT_BLUR' })
    }
    const validatePassword = () => {
        dispatchPassword({ type: 'INPUT_BLUR' })
    }
    const validateName = () => {
        dispatchName({ type: 'INPUT_BLUR' })
    }
    const validateAge = () => {
        dispatchAge({ type: 'INPUT_BLUR' })
    }

    //Submit Handler 
    const submitHandler = e => {
        e.preventDefault()
        if (formIsValid) {
            context.onLogin(emailState.value, passwordState.value)
            context.setLoggedInUser(nameState.value, ageState.value)
        } else if (!emailValid) {
            emailRef.current.focus()
        } else if (!nameValid) {
            nameRef.current.focus()
        } else if (!ageValid) {
            ageRef.current.focus()
        } else {
            passwordRef.current.focus()
        }
    }

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailRef}
                    type='email'
                    id='email'
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmail}
                    labelText='E-Mail'
                    isValid={emailValid}
                />
                <Input
                    ref={nameRef}
                    type='text'
                    id='name'
                    value={nameState.value}
                    onChange={nameChangeHandler}
                    onBlur={validateName}
                    labelText='Name'
                    isValid={nameValid}
                />
                <Input
                    ref={ageRef}
                    type='number'
                    id='age'
                    value={ageState.value}
                    onChange={ageChangeHandler}
                    onBlur={validateAge}
                    labelText='Age'
                    isValid={ageValid}
                />
                <Input
                    ref={passwordRef}
                    type='password'
                    id='password'
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePassword}
                    labelText='Password'
                    isValid={passwordValid}
                />
                <div className={classes.actions}>
                    <Button type='submit' className={classes.btn}>Login</Button>
                </div>
            </form>
        </Card>
    )
}
export default Login