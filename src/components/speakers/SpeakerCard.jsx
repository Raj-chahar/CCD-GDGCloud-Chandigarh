import { FaLinkedin, FaTwitter, } from 'react-icons/fa';
import './speakerCard.css'


function SpeakerCard( {img1, name1, nameDes, twitterLink, linkedInLink}){

    const handleTwitterClick = () => {
            // window.location.href = twitterLink;
            if (twitterLink) {
                window.open(twitterLink, '_blank'); // Open Twitter link in a new tab
              } else {
                console.error('No Twitter link provided');
              }
            
    }

    const handleLinkedInClick = () => {
        // window.location.href = linkedInLink
        if (linkedInLink) {
            window.open(linkedInLink, '_blank'); // Open Twitter link in a new tab
          } else {
            console.error('No LinkedIn link provided');
          }
    }

    return(
        <div className='speakerContainer'>
            <div className='speakerCard'>
            <div className='speakerImg'>
            <img src={img1} alt='' />
            </div>
                <h1>{name1}</h1>
                     <p>{nameDes}</p>
            <div>
            <button className='footer_speaker' onClick={handleTwitterClick}><FaTwitter/></button>
            <button className='footer_speaker' onClick={handleLinkedInClick}><FaLinkedin/></button>
            </div>
        </div>
        </div>
    );
};

export default SpeakerCard;