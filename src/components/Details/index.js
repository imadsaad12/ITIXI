import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./Card/index";
const useStyles = makeStyles({
  title: {
    color: "black",
    fontSize: "21px",
    marginTop: "3%",
    marginLeft: "5%",
    fontWeight: "400",
    marginLeft: "10%",
  },
  name: {
    color: "gray",
    fontSize: "18px",
    marginLeft: "5%",
    fontWeight: "300",
    marginLeft: "10%",
  },
});
const Index = () => {
  const [arr, setarr] = useState([]);
  const classes = useStyles();
  const { state } = useLocation();
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/artists/${state.id}/albums`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((res) => {
        setarr(res.data.items);
        console.log(res.data.items);
        console.log(state);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ position: "absolute" }}>
      <Button
        color="secondary"
        variant="contained"
        style={{ position: "relative", top: 10, left: 160 }}
        onClick={()=>navigate("/home",{state:state.token})}
      >
        Back
      </Button>
      <Typography className={classes.title}>{state.name}</Typography>
      <Typography className={classes.name}>albums</Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={3} style={{ width: "80%", marginTop: "2%" }}>
          {arr.length > 0 &&
            arr.map((i, index) => {
              return (
                <Grid item md={3} sm={6} xs={12}>
                  <Card
                    url={i.external_urls}
                    img={i.images}
                    id={i.id}
                    token={state.token}
                    albumName={i.name}
                    numberOfTracks={i.total_tracks}
                    date={i.release_date}
                    artistName={state.name}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default Index;
