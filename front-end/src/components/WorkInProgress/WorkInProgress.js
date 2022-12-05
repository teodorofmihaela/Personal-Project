import SVG from '../../assets/images/work_in_progress.svg'
import Loader from 'react-loaders'
import './WorkInProgress.scss'

const WorkInProgress = () => {
    return (
        <div className='container'>
            <h1 className='header'> This page is Work in progress...</h1>
            <img className='logo' src={SVG} alt="Work in progress... logo"/>
            <Loader type="ball-scale-ripple-multiple" />

        </div>
        )
    }
    export default WorkInProgress;