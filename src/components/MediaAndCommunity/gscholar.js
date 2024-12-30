import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GScholarRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // This opens the external link in a new tab
    window.open(
      "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AJsN-F7gG6uySlkJaDkBTfHtnEw9ULWu7VxbuNQIoI58zHTRJVgZTRANlYrleO0VzShyIbkWekyMeNG29YgtS_fgRmubuO_hQw&user=Yjd_p1oAAAAJ",
      "_blank"
    );
    // Then navigate back (or to any route) in the current tab
    navigate("/");
  }, [navigate]);

  // You can show a "Loading..." or nothing at all
  return null;
}

export default GScholarRedirect;
