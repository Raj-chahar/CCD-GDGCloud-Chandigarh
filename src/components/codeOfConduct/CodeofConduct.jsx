import Footer from '../home/Footer/Footer';
import './CodeofConduct.css'

function CodeofConduct(){
    return(
        <div>
            <div className='code'>
            <h1>Google Developers Event Code of Conduct</h1>
            <h2 id='codeH2'>Google Developers is dedicated to providing a harassment-free and inclusive event experience for everyone. We do not tolerate harassment of event participants in any form.</h2>
            <div><hr className='code_hr'/></div>
            <p>
            Google Developers is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. We do not tolerate harassment of event participants in any form. Google Developers takes violations of our policy seriously and will respond appropriately.
            </p>

            <h2>
            Be excellent to each other
            </h2>

            <p>We want the event to be an excellent experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. Treat everyone with respect. Participate while acknowledging that everyone deserves to be here -- and each of us has the right to enjoy our experience without fear of harassment, discrimination, or condescension, whether blatant or via micro-aggressions. Jokes shouldn’t demean others. Consider what you are saying and how it would feel if it were said to or about you.</p>

            <h2>Speak up if you see or hear something</h2>
            <p>Harassment is not tolerated, and you are empowered to politely engage when you or others are disrespected. The person making you feel uncomfortable may not be aware of what they are doing, and politely bringing their behavior to their attention is encouraged. If a participant engages in harassing or uncomfortable behavior, the event organizers may take any action they deem appropriate, including warning or expelling the offender from the event with no refund. If you are being harassed or feel uncomfortable, notice that someone else is being harassed, or have any other concerns, please contact a member of the event staff immediately.</p>
            
            <h2>Practice saying "Yes and" to each other</h2>
            <p>It’s a theatre improve technique to build on each other’s ideas. We all benefit when we create together.</p>
            </div>

            <Footer/>
        </div>
    );
}

export default CodeofConduct;