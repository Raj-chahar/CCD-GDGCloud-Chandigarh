import { FaLinkedin } from 'react-icons/fa';
import './TeamCards.css'

function TeamCards({img2, name2, nameDes, teamDes, linkedInLink}){

    const handleLinkedInClick = () => {
        // window.location.href = linkedInLink
        if (linkedInLink) {
            window.open(linkedInLink, '_blank'); // Open Twitter link in a new tab
          } else {
            console.error('No LinkedIn link provided');
          }
    }

    return(
        <div className='teamContainer'>
            <div className='teamCard'>
                <div className='teamImg'>
                    <img src={img2} alt='' />
                </div>
                <h1>{name2}</h1>
                <h2>{nameDes}</h2>
            </div>
            <button className='footer_team' onClick={handleLinkedInClick}><FaLinkedin/></button>
            
        </div>
    );
};

export default TeamCards;