
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import CompanyDescription from "./components/CompanyDescription";

function App() {
  return (
      <>
        <Header />
          <CompanyDescription />
          <ProjectsSection />
        <Footer />
      </>
  );
}

export default App;
