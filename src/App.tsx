import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { Appointment } from './components/Appointment';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Appointment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
