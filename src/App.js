import MainSection from "./sections/main/MainSection";
import AboutSection from "./sections/about/AboutSection";
import FormSection from "./sections/form/FormSection";
import ContactSection from "./sections/contact/ContactSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        NAVIGATION
      </header>
      <MainSection />
      <AboutSection />
      <FormSection />
      <ContactSection />
    </div>
  );
}

export default App;
