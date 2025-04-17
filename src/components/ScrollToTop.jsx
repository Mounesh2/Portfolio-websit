import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-btn whitespace-nowrap text-sm font-semibold bg-white cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-11 w-11 fixed bottom-[84px] right-4 z-50 flex items-center justify-center rounded-full border border-white bg-backdrop p-3 shadow backdrop-blur-md transition-all hover:bg-bg-700 active:scale-90 sm:bottom-4 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTop;