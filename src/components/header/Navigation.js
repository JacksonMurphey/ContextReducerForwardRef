import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import styled from 'styled-components'

const Nav = styled.nav`
    & ul {
        list-style: none;
        margin: 5px 0;
        padding: 0;
        display: flex;
        align-items: center;
    }

    & li {
        margin: 0;
        margin-left: 2rem;
    }

    & span {
        color: white;
    }

    & a {
        text-decoration: none;
        color: white;
    }

    & a:hover,
    & a:active {
        color: #f3cafb;
    }

    & button {
        margin-right: 50px;
        font: inherit;
        background: #dd0db0;
        border: 1px solid #dd0db0;
        color: white;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0,0,0,0.26);
        border-radius: 20px;
        padding: 5px 10px;
    }

    & button:focus {
        outline: none;
    }

    & button:hover,
    & button:active {
        color: #f3cafb;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
    }
`



const Navigation = () => {

    const context = useContext(AuthContext)

    return (
        <Nav>
            <ul>
                {context.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {context.isLoggedIn && (
                    <li>
                        <span>Current User: {context.user.name}</span>
                    </li>
                )}
                {context.isLoggedIn && (
                    <li>
                        <button onClick={context.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </Nav>
    )
}

export default Navigation