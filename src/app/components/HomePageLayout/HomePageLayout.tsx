export default function HomePageLayout({ children }) {
  return (
    <div
      id="home-page-layout"
      className="relative h-full w-[100vw] md:h-[100vh] box-border"
    >
      {children}
    </div>
  );
}
