import './style.css'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    return (
    <div className='header-container'>
        <Link to={"/"}><span>TODO App</span></Link>
        <Link to={"/about"}><span>John Smith</span></Link>

        <div onClick={() => {
            navigate('/')
        }}>back</div>
    </div>
    )
}

export default Header