import { Home } from "./pages/Home";
import { Toaster } from "@/components/ui/toaster";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Safe init: allows running without .env configured.
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (key) emailjs.init(key);
  }, []);

  return (
    <>
      <Toaster />
      <Home />
    </>
  );
}

export default App;
