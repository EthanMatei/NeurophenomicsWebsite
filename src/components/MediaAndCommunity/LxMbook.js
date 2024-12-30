import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LxmRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // This opens the external link in a new tab
    window.open(
      "https://www.amazon.com/Life-Mind-Dr-ALEXANDER-NICULESCU/dp/B09GR9G7WL/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1604857364&sr=1-3",
      "_blank"
    );
    // Then navigate back (or to any route) in the current tab
    navigate("/");
  }, [navigate]);

  // You can show a "Loading..." or nothing at all
  return null;
}

export default LxmRedirect;
