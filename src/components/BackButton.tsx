import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="page-back-button"
      onClick={() => navigate(-1)}
      title="Back"
    >
      Back
    </button>
  );
}

export default BackButton;
