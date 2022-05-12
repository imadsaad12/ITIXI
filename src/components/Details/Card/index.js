import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    width: "250px",
    height: "350px",
    background: "transparent",
    border: "1px solid black",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  name: {
    color: "black",
    fontSize: "18px",
    marginTop: "5%",
    marginLeft: "5%",
    fontWeight: "400",
  },
  artistname: {
    color: "gray",
    fontSize: "12px",
    marginLeft: "5%",
    fontWeight: "300",
  },
});
const Index = ({
  img,
  albumName,
  numberOfTracks,
  artistName,
  date,
  id,
  token,
  url,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {};
  return (
    <div className={classes.root}>
      <img src={img.length > 0 ? img[0].url : null} className={classes.image} />
      <Typography className={classes.name}>{albumName}</Typography>
      <Typography className={classes.artistname}>{artistName}</Typography>
      <Typography className={classes.artistname}>{date}</Typography>
      <Typography className={classes.artistname}>
        {numberOfTracks} tracks
      </Typography>
      <Button
        style={{
          backgroundColor: "lightgray",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
          <a href={url.spotify} style={{textDecoration:"none",color:"gray"}}>    Preview on Spotify</a>
      </Button>
    </div>
  );
};

export default Index;
