import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ScrollToTop() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    navigate(pathname);
  }, [pathname, navigate]);

  return null;
}

export default ScrollToTop;
