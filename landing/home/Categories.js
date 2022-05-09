import { Grid, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";

import { CATEGORIES } from "./constants";

const useStyles = makeStyles(() => ({
  container: {
    padding: "0px 20px",
  },
  //Todo: Make this a small component
  header: {
    color: "black",
    fontSize: 40,
    margin: 20,
  },
  category: {
    marginBottom: 30,
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  circle: {
    height: 200,
    width: 200,
    borderRadius: "50%",
    margin: "30px 30px 10px 30px",
    cursor: "pointer",
  },
}));

const Categories = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.container}
      >
        <Typography className={classes.header}>
          Que Te Gustaria Comer?
        </Typography>

        <Grid className={classes.category} container justifyContent="center">
          {CATEGORIES.map((item) => (
            <Link key={item.id} href={`/restaurants/${item.category}`}>
              <Grid className={classes.categoryContainer}>
                <Grid
                  container
                  className={classes.circle}
                  style={{ background: item.color }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src={item.imageUrl}
                    width={100}
                    height={100}
                    alt="icon"
                  />
                </Grid>
                <Typography>{item.category}</Typography>
              </Grid>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Categories;
