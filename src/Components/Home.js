import resume from '../doc/resume.pdf'

export const Home = () => {
  return (
    <section id="home">
        <div className="home container">
            <div className="slogan">
              <h1>Hello, I'm <br /><span className='name'>Siddharth Thapa</span>.</h1>
              {/* <br />
              <hr />
              <br /> */}
              <span className='slogan-end'>
                <h1>I'm a front-end Web Developer.</h1>
                <div className="slogan-btns">
                  <a target='_blank' rel='noreferrer' href={resume}>Resume</a>
                  <a href="#about">  about me</a>
                </div>
              </span>  
            </div>
            
        </div>
    </section>
  )
}
