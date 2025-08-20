import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-play-black">
      <NavBar />
      <main className="flex-1"><Component {...pageProps} /></main>
      <Footer />
    </div>
  );
}
