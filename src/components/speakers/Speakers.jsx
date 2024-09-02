import './Speakers.css'
import SpeakerCard from './SpeakerCard';
import Footer from '../home/Footer/Footer';
import speaker1 from '../../assests/speakerImg/Pranav Kumar.47c04665c528ad7e3a7a.jpeg';
import speaker2 from '../../assests/speakerImg/Aditya Thakur.e9148b8c3d347f4f754a.jpeg';
import speaker3 from '../../assests/speakerImg/Akash Chandra.b6910de118b72e3bd97e.png'
import speaker4 from '../../assests/speakerImg/nirav kothari.c27914ffb58cba8098c6.jpg'
import speaker5 from '../../assests/speakerImg/gaurav madaan.c88192884af6f4dda453.jpeg'
function Speakers(){
    return(
        <div>
            <div className='Speaker'>
            <h1>Our Speakers</h1>
            <SpeakerCard img1={speaker1} name1={"Pranav Kumar"} nameDes={"Innovative IT professional with a proven track record of over 7 years in the industry, fueling business success through cutting-edge solutions. My expertise lies in Microsoft technologies, including MVC, .NET Core, and Azure, coupled with a solid grasp of frontend technologies like Angular and React."} linkedInLink={'https://www.linkedin.com/in/pranav-kumar-verma/'} twitterLink={'https://x.com/'}/></div>
            <div className='Speaker Speaker2'>
            <SpeakerCard img1={speaker2} name1={"Aditya Thakur"} nameDes={"Aditya Thakur is a passionate developer and designer with a background working on developer tools and advocating for live audio-video SDKs. He is a Google Developer Expert for Flutter and Dart and a content creator with 11K+ YouTube subscribers."} linkedInLink={"https://www.linkedin.com/in/adityathakurxd/"} twitterLink={'https://x.com/'}/></div>
            <div className='Speaker Speaker2'>
            <SpeakerCard img1={speaker3} name1={"Akash Chandra"} nameDes={"Akash Chandra, the Founder of InsightAI, where I lead the charge in business development, innovation, and sales. With a fervent focus on AI and generative AI-based deep research and solutions, my mission is to bring about transformative change in the realms of FinTech and Retail."} linkedInLink={'https://www.linkedin.com/in/akashchandra049/'} twitterLink={'https://x.com/'}/></div>
            <div className='Speaker Speaker2'>
            <SpeakerCard img1={speaker4} name1={"Nirav Kothari"} nameDes={"A passionate technologist with 19+ years of experience in building software, data and analytics applications, having strong hold on solutioning and application designing, customer and account management exhibited during association with clients across the globe"} linkedInLink={'https://www.linkedin.com/in/iniravkothari/'} twitterLink={'https://x.com/'}/></div>
            <div className='Speaker Speaker2'>
            <SpeakerCard img1={speaker5} name1={"Gaurav Madaan"} nameDes={"With 10+ years of experience, Gaurav is responsible for implementing client software solutions with the highest degree of quality and consistency. He has substantial experience in solving client problems by developing high-performance, maintainable, and reliable solutions and has got the opportunity to develop solutions for the Telecom, Medical, and Insurance industries."} linkedInLink={'https://www.linkedin.com/in/codestellar/'} twitterLink={'https://x.com/'}/></div>
            
            <Footer/>



        </div>
    );
};

export default Speakers;