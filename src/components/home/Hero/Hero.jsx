import gdgdev from '../../../assests/gdev.3483c773.svg';
import img1 from '../../../assests/apyhub.a45ccd6a.png';
import img2 from '../../../assests/dynopii.247e7757.png';
import img3 from '../../../assests/tg.dee73774.png';
import img4 from '../../../assests/wnb.204e4552.png';

import './Hero.css';

function Hero(){
    return (
        <div className='hero'>
            <div className='hero_text1'>
                <h1 id='Speakers' className='hero_text_h1'>Call for Speakers</h1>
                <p className='hero_text_p'>Each Google Cloud Community Day event presents an opportunity for you to showcase your expertise and share your valuable insights and unique perspectives with the audience.</p>
                <h2 className='hero_text_h2'>
                Join us as a Speaker to showcase your brilliance
                </h2>

                <h1 className='hero_text_h1'>Sponsors</h1>
                <p className='hero_text_p'>We extend our heartfelt gratitude to all our sponsors who are going to contribute to making CCD 2024 Kolkata an unforgettable experience and helping us create a remarkable footprint in the tech industry. If you're interested in becoming a sponsor, please reach out to us for more information.</p>
                <h1 style={{fontSize: '40px'}}>Title Sponsor</h1>
                <img src={gdgdev} alt='' className='gdgdev' />
                     <div className='pastSponsors'>
                <h1 className='hero_text_h1'>Past Sponsors</h1>
                        <div className='sp_grid'>
                            <img src={img1} alt='' />
                            <img src={img2} alt='' />
                            <img src={img3} alt='' />
                            <img src={img4} alt='' />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;