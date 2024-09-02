import './Home.css'
import Main from './Main/Main';
import './Main/Main.css'
import Hello from './Hello/Hello';
import './Hello/Hello.css'
import Hero from './Hero/Hero'
import './Hero/Hero.css'
import Parterners from './Community/Parterners';
import './Community/Parterners.css'
import Footer from './Footer/Footer';
import './Footer/Footer'

function Home(){
    return(
        <div className='home'>
            <Main/>
            <Hello/>
            <Hero/>
            <Parterners/>
            <Footer/>
        </div>
    )
}

export default Home;