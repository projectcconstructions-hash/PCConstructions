import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAVBAR_HEIGHT = 80;
const MAX_RETRY_ATTEMPTS = 20;
const RETRY_INTERVAL = 100;

interface ScrollTarget {
  path?: string;
  hash?: string;
  route?: string;
}

export function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHash = useCallback((hash: string) => {
    const el = document.getElementById(hash);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const waitAndScroll = useCallback(
    (hash: string) => {
      const waitForElement = (attempts = 0) => {
        const el = document.getElementById(hash);
        if (el) {
          scrollToHash(hash);
        } else if (attempts < MAX_RETRY_ATTEMPTS) {
          setTimeout(() => waitForElement(attempts + 1), RETRY_INTERVAL);
        }
      };
      setTimeout(() => waitForElement(), RETRY_INTERVAL);
    },
    [scrollToHash],
  );

  const scrollToSection = useCallback(
    (target: ScrollTarget) => {
      const path = target.path ?? target.route ?? "/";
      const hash = target.hash ?? "";

      if (path !== "/") {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (!hash) {
        if (location.pathname !== "/") {
          navigate("/");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (location.pathname !== "/") {
        navigate("/");
        waitAndScroll(hash);
      } else {
        scrollToHash(hash);
      }
    },
    [navigate, location.pathname, scrollToHash, waitAndScroll],
  );

  return scrollToSection;
}
