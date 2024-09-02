import bg_slide_1 from '../../../assests/bg_slide_1.webp'
import bg_slide_2 from '../../../assests/bg_slide_2.webp'
import bg_slide_3 from '../../../assests/bg_slide_3.webp'
import bg_slide_4 from '../../../assests/bg_slide_4.webp'
import './Background.css'


function Background(){
    return(
        <div class="background-container">
                <img src={bg_slide_1} alt="Background 1"/>
                <img src={bg_slide_2} alt="Background 2"/>
                <img src={bg_slide_3} alt="Background 3"/>
                <img src={bg_slide_4} alt="Background 4"/>
        </div>
    )
}

export default Background;