import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 0,
    });

    // Refresh AOS on route changes
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);
};