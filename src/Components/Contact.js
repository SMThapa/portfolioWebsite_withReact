export const Contact = () => {
  return (
    <section id="contact">
        <div className="contact container">
          <div className="items">
            <h1>Lets have a chat.</h1>
            <div className="contact-info">
              <div className="form">
                <form action="https://formsubmit.co/siddharthmthapa@gmail.com" method="POST">
                  {/* Honeypot */}
                  <input type="text" name="_honey" style={{display:'none'}} />

                  {/* disables reCAPTICHA */}
                  <input type="hidden" name="_captcha" value="false" />

                  <input type="hidden" name="_next" value="http://localhost:9004/contact/success"></input>
                    <p>
                        <label for="name" >Name: <br /></label>
                        <input type="text" id="name" name="name" autoComplete="off" required />
                    </p>
                    <p>
                        <label for="email" >Email: <br /></label>
                        <input type="email" id="email" name="email" autoComplete="off" required />
                    </p>
                    <p>
                        <label for="query">Mention you query: <br /></label>
                        <textarea name="query" id="query" cols="30" rows="3"></textarea>
                    </p>
                    <button>Submit</button>
                </form>
              </div>

              <div className="info">
                <p>E-Mail: <a href="mailto:siddharthmthapa@gmail.com">siddharthmthapa@gmail.com</a></p>
                <p>Phone: <span>+91 6296781251</span></p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
