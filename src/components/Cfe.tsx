import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cfe = () => {
  const navigate = useNavigate();

  const linkStyle = {
    width: "200px",
    height: "100px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    margin: "10px",
    textDecoration: "none",
    color: "inherit",
  };

  const handleClickCounter = () => {
    navigate("/counter");
  };

  const handleClickForm = () => {
    navigate("/form");
  };

  const handleClickEditor = () => {
    navigate("/editor");
  };

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        Welcome to CFE!
      </Typography>
      <Box display="flex" justifyContent="center">
        <Box style={linkStyle} onClick={() => handleClickCounter()}>
          <Typography variant="body1">Counter</Typography>
        </Box>
        <Box style={linkStyle} onClick={() => handleClickForm()}>
          <Typography variant="body1">Data Form</Typography>
        </Box>
        <Box style={linkStyle} onClick={() => handleClickEditor()}>
          <Typography variant="body1">TextEditor</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Cfe;
