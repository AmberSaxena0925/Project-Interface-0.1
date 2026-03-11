import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Results from "./components/Results";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";
import About from "./components/About";
import Contact from "./components/Contact";
import StarsCanvas from "./components/main/StarBackground";

function App() {
  return (
    <Router>
      {/* Star Background */}
      <div className="fixed inset-0 -z-10">
        <StarsCanvas />
      </div>

      {/* App Content */}
      <div className="min-h-screen bg-[#0a0a0a] text-white relative z-10">
        <Navigation />

        <main className="pt-20">
          <Routes>
           {/* Home Page  */}
            <Route
              path="/"
              element={
                <>
                  <section id="hero">
                    <Hero />
                  </section>

                  <section id="services">
                    <Services />
                  </section>

                  <section id="process">
                    <Process />
                  </section>

                  <section id="results">
                    <Results />
                  </section>

                  <section id="case-studies">
                    <CaseStudies />
                  </section>

                  <section id="pricing">
                    <Pricing />
                  </section>

                  <section id="testimonials">
                    <Testimonials />
                  </section>

                  <section id="faq">
                    <FAQ />
                  </section>

                  <section id="contact">
                    <Footer />
                  </section>
                </>
              }
            />

            {/* Login Page */}
            <Route path="/login" element={<Login />} />

            {/* Register Page */}
            <Route path="/register" element={<Register />} />

            {/* Dashboard Page */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Admin Panel */}
            <Route path="/admin" element={<AdminPanel />} />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
