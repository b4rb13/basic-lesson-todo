import useTodoContext from '../../../../contexts/useTodoContext'
import './style.css'
const Footer = () => {

    console.log('footer')
    const { statistics } = useTodoContext()
    return <div className='footer-container'>
        <span>Footer</span>
        <div className='statistics'>
            <span className='total'>Total: {statistics.totalCount}</span>
            <span className='done'>Done: {statistics.done}</span>
            <span className='pending'>Pending: {statistics.pending}</span>
        </div>
    </div>
}

export default Footer