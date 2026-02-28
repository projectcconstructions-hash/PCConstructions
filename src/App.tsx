import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsListingPage from "./pages/ProjectsListingPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsListingPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
