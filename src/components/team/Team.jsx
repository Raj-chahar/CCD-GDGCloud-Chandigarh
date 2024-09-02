import TeamCards from './TeamCards';
import Footer from '../home/Footer/Footer'
import Team1 from '../../assests/Team/team1.12883a04b5c44c819217.jpg';
import Team2 from '../../assests/Team/team2.a20b72c00c9af0b61fbb.png';
import Team3 from '../../assests/Team/team3.96021573bce0fbcc54f6.png';
import Team4 from '../../assests/Team/team4.b161b2deb1e2b07c8ca3.png';
import Team5 from '../../assests/Team/team5.c2a13a0b3ad99a9f9d51.png';
import Team6 from '../../assests/Team/team6.85175d6d60371e9ecaa7.png';
import Team7 from '../../assests/Team/team9.3d549189053871d348f5.png';
import Team8 from '../../assests/Team/team7.00949a0542906fea6cdb.png';
import './Team.css';

function Team(){
    return(
        <div>
            <div className='Team'>
            <div>
            <h1>GDGC Team</h1>
            <h6>Google Cloud Community Day is brought to you by...</h6>
            </div>
            <div className='teamGrid'>
            <TeamCards img2={Team1} name2={"Cherish Santoshi"} nameDes={"Organizer"} linkedInLink={''}/>
            <TeamCards img2={Team2} name2={"Riya Singh"} nameDes={"Asst. Co-Organizer"} linkedInLink={''}/>
            <TeamCards img2={Team3} name2={"Sai Kumar Swarnpudi"} nameDes={"Team Lead"} linkedInLink={''}/>
            <TeamCards img2={Team4} name2={"Avneet Kaur"} nameDes={"Co-Team Lead"} linkedInLink={''}/>
            <TeamCards img2={Team5} name2={"Tushar Shah"} nameDes={"Graphics Lead"} linkedInLink={''}/>
            <TeamCards img2={Team6} name2={"Vedant Nawlakhe"} nameDes={"Team Member"} linkedInLink={''}/>
            <TeamCards img2={Team7} name2={"Ashis Raj"} nameDes={"Team Member"} linkedInLink={''}/>
            <TeamCards img2={Team8} name2={"Raj Singh Chahar"} nameDes={"Team Member"} linkedInLink={''}/>
           </div>
           </div>
            <Footer />
        </div>
    );
};

export default Team;