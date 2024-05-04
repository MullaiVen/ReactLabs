import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setUnsavedChanges(true);
  };

  const generateUserID = () => {
    const id = Math.floor(Math.random() * 90000000) + 10000000;
    setFormData({ ...formData, id: id.toString() });
    setUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateUserID();
    saveToLocalStorage(formData);
    setOpenDialog(true);
    setUnsavedChanges(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      id: "",
      name: "",
      address: "",
      email: "",
      phone: "",
    });
  };

  const saveToLocalStorage = (data) => {
    if (typeof Storage !== "undefined") {
      const existingData = JSON.parse(localStorage.getItem("userData")) || [];
      const newData = [...existingData, data];
      localStorage.setItem("userData", JSON.stringify(newData));
    } else {
      console.log("Local storage is not available.");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (unsavedChanges) {
        const confirmationMessage =
          "You have unsaved changes. Are you sure you want to leave?";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">User Data Form</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>User Data</DialogTitle>
        <DialogContent>
          <Typography>ID: {formData.id}</Typography>
          <Typography>Name: {formData.name}</Typography>
          <Typography>Address: {formData.address}</Typography>
          <Typography>Email: {formData.email}</Typography>
          <Typography>Phone: {formData.phone}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserDataForm;
