import { Header,About, Contact, Home, Projects, Footer } from './Components';

import './Style/App.css';

export default function App(){
  return(
    <main>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
