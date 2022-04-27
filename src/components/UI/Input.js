import React, { useRef, useImperativeHandle } from "react";
import classes from '../login/Login.module.css'


const Input = React.forwardRef((props, ref) => {

    const { type, id, value, onChange, onBlur, labelText, isValid } = props

    const inputRef = useRef()

    const activate = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })

    return (
        <div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
            <label htmlFor={id}>{labelText}</label>
            <input
                ref={inputRef}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )

})
export default Input