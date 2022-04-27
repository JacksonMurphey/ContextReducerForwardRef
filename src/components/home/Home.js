import classes from './Home.module.css'

import { useContext } from 'react'
import AuthContext from '../../store/auth-context'

import Button from '../UI/Button'
import Card from '../UI/Card'


const Home = (props) => {
    const context = useContext(AuthContext)

    return (
        <Card className={classes.home}>
            <h1>Welcome back {context.user.name}!</h1>
            <Button onClick={context.onLogout}>Logout</Button>
        </Card>
    )
}
export default Home