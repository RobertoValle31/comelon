/* eslint-disable @next/next/no-img-element */
import { Grid, Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";

import ControlledInput from "./ControlledInput";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#363d3a",
    padding: "0px 20px",
  },
  icon: {
    fontSize: "40px",
  },
  //Todo: Make this a small component
  header: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
  },
  inputField: {
    background: "white",
    margin: theme.spacing(3),
  },
  button: {
    background: "#f6c762",
    width: 100,
    textTransform: "capitalize",
    marginBottom: theme.spacing(3),
  },
}));

// Todo: Add response message when submiting the form and clear fields

const ContactUs = () => {
  const classes = useStyles();

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ file: ContactUs.js ~ line 39 ~ onSubmit ~ data", data);
  };

  return (
    <Grid
      container
      wrap="nowrap"
      direction="column"
      className={classes.container}
    >
      <Container maxWidth="xl">
        <h3 className={classes.header}>Quieres Anunciarte?</h3>
        <Grid container>
          <Grid container direction="column" item md={6}>
            <ControlledInput
              type="text"
              name="name"
              placeholder="Nombre"
              control={control}
              defaultControllValue={""}
            />
            <ControlledInput
              type="text"
              name="email"
              placeholder="Email"
              control={control}
              defaultControllValue={""}
            />
            <ControlledInput
              type="text"
              name="phone"
              placeholder="Telefono"
              control={control}
              defaultControllValue={""}
            />
          </Grid>
          <Grid container direction="column" item md={6}>
            <ControlledInput
              type="text"
              name="description"
              placeholder="Escriba su mensaje"
              control={control}
              multiline
              rows={5}
              defaultControllValue={""}
            />

            <Grid container justifyContent="center">
              <Button
                className={classes.button}
                variant="contained"
                onClick={handleSubmit(onSubmit)}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default ContactUs;
