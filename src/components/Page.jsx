import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import VideoConference from "./VideoConference";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 140,
  },

  paper: {
    padding: 5,
    textAlign: "center",
    color: lightBlue,
  },
});

export default function Page() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container fluid>
        <h1> Some Navbar </h1>
        <VideoConference style="width: 200px, height: 200px" />;
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.imgur.com/cNvMRSy.jpg"
              title="An evening with Alan Smithee"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                An Evening
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                with Alan Smithee
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              View Recording
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
