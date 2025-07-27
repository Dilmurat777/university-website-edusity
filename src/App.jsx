import About from './components/About/About';
import Compus from './components/Compus/Compus';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials';
import Title from './components/Title/Title';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Compus Photos" />
        <Compus />
        <Title subTitle="TESTIMONIALS" title="What Students Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get and Touch with Us" />
        <Contact/>
      </div>
    </div>
  );
};

export default App;
