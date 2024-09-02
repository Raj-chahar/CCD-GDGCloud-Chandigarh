import Cloud from '../../../assests/gcp_logo.webp'
import Background from '../Background/Background';
import GetTicketsButton from '../GetTickets/GetTickets';
import './Main.css'

function Main(){
    return(
        <div id='main'>
            <Background/>
             <div className='cloud_img'>
            <img src={Cloud} alt=''/> Google Cloud
            </div>
            <div className='main_text'>
                <h1>Cloud Community Days 2024</h1>
                <p>A community organized Cloud Conference with industry experts presenting on cutting-edge topics! Cloud Community Day is powered by our shared belief that when developers come together to exchange ideas, remarkable things can happen.</p>

                <p className='date'>Date : 24 August 2024</p>

                <p className='date'>Venue: <a href='#main'>Chandigarh University</a></p>
            </div>

            <div>
            <GetTicketsButton link={'https://gdg.community.dev/events/details/google-gdg-cloud-chandigarh-presents-cloud-community-days-chandigarh/ '} className='button'/>
            </div>
        </div>

    )
}

export default Main;

