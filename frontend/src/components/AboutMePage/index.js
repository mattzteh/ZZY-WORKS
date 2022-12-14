import './AboutMe.css'

const AboutMe = () => {

    return (
       <>
       <div className='about-me-page'>
    
            <div className='about-me-header'>
                <h1>My Links</h1>
                <div className='my-links'>
                <a href='https://www.linkedin.com/in/mattzteh/' target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-linkedin"></i></a>

                <a href='https://www.github.com/mattzteh' target="_blank" rel='noreferrer'>
                    <i className="fa-brands fa-square-github"></i></a>
                </div>
                <a href='https://mattzteh.github.io/DinoTyper' target="_blank" rel='noreferrer'>Try out your new Keyboard!</a>
            </div>
       </div>
       </>
    )
}

export default AboutMe;