import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteLink,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router-dom";

const theme = createMuiTheme();

theme.typography.body1 = {
    fontSize: '3rem',
    '@media (min-width:600px)': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
};

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const history = useHistory();
  //email as username
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    contactNo: {
      error: false,
      label: "Contact Number",
      helperText: "",
      errorLabel: "",
      errorHelperText: "",
      value: undefined,
    },
    emailAsUsername: true,
    contactNoAsUsername: false,
    email: {
      error: false,
      label: "Email Address",
      helperText: "",
      errorLabel: "",
      errorHelperText: "",
      value: undefined,
    },

    message: "",
    firstName: "",
    lastName: "",
    emailAsUsername: false,
    contactNoAsUsername: true,
    role: false,
  });

  function handleEmailChange(event) {
    const email = event.target.value;
    console.log(email);
    setFormData((prevState) => {
      return {
        ...prevState,
        email: { ...prevState.email, value: email },
      };
    });
  }

  function handleMessageChange(event) {
    const message = event.target.value;
    console.log(message);
    setFormData((prevState) => {
      return {
        ...prevState,
        message: message,
      };
    });
  }

  function handleFirstNameChange(event) {
    const firstName = event.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        firstName: firstName,
      };
    });
  }

  function handleLastNameChange(event) {
    const lastName = event.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        lastName: lastName,
      };
    });
  }

  function handleContactNoChange(event) {
    const contactNo = event.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        contactNo: { ...prevState.contactNo, value: contactNo },
      };
    });
  }

  function prepareFormData() {
    // formData.username = formData.firstName+" "+formData.lastName;
    // if (formData.emailAsUsername) {
    //   formData.username = formData.email;
    // } else if (formData.contactNoAsUsername) {
    //   formData.username = formData.contactNo;
    // }

    return {
      ...formData,
      email: formData.email.value,
      contactNo: formData.contactNo.value,
      name: formData.firstName + " " + formData.lastName,
      message: formData.message,
    };
  }

  function contact() {
    const contactData = prepareFormData();

    axios
      .post("https://all-in-one-server.herokuapp.com" + "/portfolio/contact", contactData)
      .then((response) => {
        console.log("response from post /contact route" + response);
        console.log(
          "contact response:  " +
            require("util").inspect(response, {
              depth: null,
            })
        );
        if (response.data.code==200) {
          //user loggedIn, we can show them authorised content, for now pushing to home
          history.push({
            pathname: "/",
            // search: '?query=abc',
            state: {  },
          });
        } else {
            setFormData((prevFormData) => {
              return {
                ...prevFormData,
                contactNo: {
                  ...prevFormData.contactNo,
                  error: true,
                  errorLabel: "Contact Number",
                  errorHelperText: response.data.error.msg,
                },
                email: {
                  ...prevFormData.email,
                  error: true,
                  errorLabel: "Email Address",
                  errorHelperText: response.data.error.msg,
                },
              };
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleContact(event) {
    contact();
    event.preventDefault();
  }
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleContact} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="medium"
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleFirstNameChange}
              />{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                size="medium"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formData.lastName}
                onChange={handleLastNameChange}
              />{" "}
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                rows={3}
                multiline={true}
                variant="outlined"
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                autoComplete="off"
                value={formData.message}
                onChange={handleMessageChange}
              />{" "}
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label={
                  formData.email.error
                    ? formData.email.errorLabel
                    : formData.email.label
                }
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email.value || ""}
                error={formData.email.error}
                helperText={
                  formData.email.error
                    ? formData.email.errorHelperText
                    : formData.email.helperText
                }
                onChange={handleEmailChange}
              />{" "}
            </Grid>{" "}
            <Grid item xs={12}>
              
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="contactNo"
                label={
                  formData.contactNo.error
                    ? formData.contactNo.errorLabel
                    : formData.contactNo.label
                }
                type="tel"
                name="contactNo"
                autoComplete="tel-national"
                value={formData.contactNo.value || ""}
                error={formData.contactNo.error}
                helperText={
                  formData.contactNo.error
                    ? formData.contactNo.errorHelperText
                    : formData.contactNo.helperText
                }
                onChange={handleContactNoChange}
              />{" "}
              
            </Grid>{" "}
          </Grid>{" "}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Typography variant="h6">Send{" "}</Typography>
          </Button>{" "}
          <Grid container justify="flex-end">
            <Grid item>
              <Typography variant="h5">
                Change in mind ?{" "}
                <Link href="#top">
                  try something else.
                </Link>{" "}
              </Typography>
            </Grid>{" "}
          </Grid>{" "}
        </form>{" "}
      </div>{" "}
    </Container>
  );
}