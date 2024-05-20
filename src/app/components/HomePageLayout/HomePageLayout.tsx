import Navbar from '../Navbar/Navbar';
import Footer from '../version2/Footer';
export default function HomePageLayout({ children }) {
  return (
    <div
      id="home-page-layout"
      className="relative h-full w-[100vw] md:h-[100vh] box-border"
    >
      <Navbar />
      <div className="mt-[6rem] relative">{children}</div>
      <Footer />
    </div>
  );
}
