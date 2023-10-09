import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
