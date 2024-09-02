import './Parterners.css'
import img1 from '../../../assests/Parterners/GoogleCloud.png'
import img2 from '../../../assests/Parterners/CU.png'
import img3 from '../../../assests/Parterners/PP.png'
import img4 from '../../../assests/Parterners/GDGC.png'

function Parterners(){
    return(
        <div className='Parterners'>
            <h1>Community Partners</h1>
            <h3>We're pleased to introduce our Community Partners and Extended Events Partners</h3>

            <div className='img_grid'>
                <div className='img_col'><img src={img1} alt=''></img></div>
                <div className='img_col'><img src={img2} alt=''></img></div>
                <div className='img_col'><img src={img3} alt=''></img></div>
                <div className='img_col'><img src={img4} alt=''></img></div>
            </div>
        </div>
    )
}

export default Parterners;