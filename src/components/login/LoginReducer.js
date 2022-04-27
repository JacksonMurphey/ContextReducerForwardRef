

export const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.payload, isValid: action.payload.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false }
}

export const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.payload, isValid: action.payload.trim().length >= 5 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length >= 5 }
    }
    return { value: '', isValid: false }
}

export const nameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.payload, isValid: action.payload.trim().length >= 3 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length >= 3 }
    }
    return { value: '', isValid: false }
}

export const ageReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.payload, isValid: action.payload > 0 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value > 0 }
    }
    return { value: '', isValid: false }
}