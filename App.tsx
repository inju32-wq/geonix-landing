
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Operations } from './components/Operations';
import { Sustainability } from './components/Sustainability';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <LanguageProvider>
      {/* 1. 여기에 발급받은 사이트 키(6L로 시작)를 따옴표 안에 넣어주세요 */}
      <GoogleReCaptchaProvider reCaptchaKey="6Le4WYQsAAAAAMBOULn-D87Lf1HYhxT1su-pno22"></GoogleReCaptchaProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <Operations />
          <Sustainability />
          <Contact />
        </main>
        <Footer />
      </div>
      </GoogleReCaptchaProvider>
    </LanguageProvider>
  );
}

export default App;
