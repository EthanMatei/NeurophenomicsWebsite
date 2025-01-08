import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GScholarRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // This opens the external link in a new tab
    window.open(
      "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AFix5MbPpRpWl9AYiP-zXk0jtf6G59y4EmYRLiGGUkEarJ2pJtJm1yc1uoC-nsh-ZRDhDTkMX-R3sD7rDkpN7w&user=BSBOjV8AAAAJ",
      "_blank"
    );
    // Then navigate back (or to any route) in the current tab
    navigate("/");
  }, [navigate]);

  // You can show a "Loading..." or nothing at all
  return null;
}

export default GScholarRedirect;
