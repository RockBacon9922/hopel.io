import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* Below gives a gap so that the footer doesn't end up moshed into the navbar👍 */}
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <div className="w-full h-30"></div>
        <div className="w-full h-14" />
        {children}
      </main>
    </>
  );
}
