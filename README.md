# Built Small Test App To:

Work with useContext, useReducer, useRef, useImperativeHandle, and React.forwardRef

## Created a Store

In My Store, I createdContext = AuthContext. This object holds my state objects and functions.
I also created a AuthContextProvider to wrap my App in, so I would have access, app-wide, to my context. 

### Worked with LocalStorage to Control state objects

Created a loggedIn item to store in localStorage, which I would check initially to see if this value was stored, thus allowing a user to login, leave the page, then return where they left off. Then upon logout, I would remove this item from local storage.

### Created a Reusable Input component that implemented React.forwardRef and useImperativeHandle

This allowed for me to create and control Refs from my parent component for inputs that initially did not have Refs. This was directly used to allow for a focus() method to be used to direct the user to the input that was not valid when trying to login.

### Debouncing inside my useEffect

In order to prevent my useEffect from running on every keystroke, for every input, I wanted to debounce my data to delay the number of times it would have to check to see if anything had changed for a given input. This helps my program be more efficient and would save on the number of calls to a server that the program has to make.

### Made a loginReducer

This reducer checks the validity of the payload its being sent, and updates my values if they return valid. As well, when a user loses focus on a given input, 'onBlur', I have my reducer run again to check if what they input is valid. This reducer runs onSubmit, and onBlur.

