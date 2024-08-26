import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "react-bootstrap/Button";
import "./loadingButton.css";

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        navigate("/data-source"); // Redirect to /datasource page after loading
      });
    }
  }, [isLoading, navigate]); // Add navigate to dependency array

  const handleClick = () => setLoading(true);

  return (
    <div className="form-buttons">
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "OK"}
      </Button>
    </div>
  );
}

export default LoadingButton;
