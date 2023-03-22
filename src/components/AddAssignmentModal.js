import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Cookies from 'js-cookie';
import {SERVER_URL} from '../constants.js';
import { ToastContainer, toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const AddAssignmentModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [assignmentName, setAssignmentName] = React.useState("");
  const [courseID, setCourseID] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {    
      fetch(`${SERVER_URL}/assignments/new?name=${assignmentName}&due=${dueDate}&id=${courseID}`, 
        {  
          method: 'POST', 
        } )

        .then(res => {
            if (res.ok) {
            toast.success("Assignment successfully added", {
            position: toast.POSITION.BOTTOM_LEFT
            });
            this.fetchGrades();
            } 
            else {
            toast.error("Assigment failed to add", {
            position: toast.POSITION.BOTTOM_LEFT
            });
        }})

    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleOpen}
        className={classes.button}
      >
        Add Assignment
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h2 id="add-assignment-title">Add Assignment</h2>
          <TextField
            id="assignment-name"
            label="Assignment Name"
            fullWidth
            className={classes.textField}
            value={assignmentName}
            onChange={(event) => setAssignmentName(event.target.value)}
          />
          <TextField
            id="course-id"
            label="Course ID"
            fullWidth
            className={classes.textField}
            value={courseID}
            onChange={(event) => setCourseID(event.target.value)}
          />
          <TextField
            id="due-date"
            label="Due Date"
            fullWidth
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.button}
          >
            Save
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            className={classes.button}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <ToastContainer autoClose={1500} />   
    </div>
  );
};

export default AddAssignmentModal;
