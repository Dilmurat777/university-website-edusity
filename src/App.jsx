import { useState } from 'react';
import About from './components/About/About';
import Compus from './components/Compus/Compus';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials';
import Title from './components/Title/Title';
import VideoPlay from './components/VideoPlay/VideoPlay';

const App = () => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <Title subTitle="ABOUT UNIVERSITY" title="Nurturing Tomorrow's Leaders Today" />
        <About setShowVideo={setShowVideo} />
        <Title subTitle="Gallery" title="Compus Photos" />
        <Compus />
        <Title subTitle="TESTIMONIALS" title="What Students Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get and Touch with Us" />
        <Contact />
        <Footer/>
      </div>
      <VideoPlay showVideo={showVideo} setShowVideo={setShowVideo} />
    </div>
  );
};

export default App;
