import React, { useEffect, useState,useLayoutEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Card from "./Card/index";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "2%",
  },
  searchContainer: {
    width: "35%",
    height: "45px",
    background: "white",
    border: "1px solid lightgray",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  search: {
    height: "45px",
    width: "75%",
    outline: "none",
    border: "none",
    textAlign: "center",
    fontSize: "22px",
    background: "transparent",
  },
});
const Index = (props) => {
  const classes = useStyle();
  const [arr, setarr] = useState([]);
  const [item,setItem]=useState("tom")
  const {state}=useLocation();
  useLayoutEffect(() => {
    axios.get(
      `https://api.spotify.com/v1/search?type=artist&q=${item}`,
      { headers: {Authorization:`Bearer ${state}`} }
    ).then(res=>{
        if(res.data.artists.items.length >0){
            setarr(res.data.artists.items)
        }
     console.log(res.data.artists.items)
    })
    .catch(err=>{
       console.log(err)
    })
  }, [item]);
  
  const handleonChange=(e)=>{
      setItem(e.target.value)
  }
  const calculateRate=(popularity)=>{
    const perc=popularity*5/100
    return perc;
  }
  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="search for an artist"
          className={classes.search}
          onChange={handleonChange}
        />
        <SearchIcon style={{ marginRight: "10px" }} />
      </div>
      <Grid container spacing={3} style={{ width: "80%", marginTop: "2%" }}>
        {arr.length>0 && arr.map((i, index) => {
          return (
              <Grid item md={3} sm={6} xs={12}>
                <Card
                  img={i.images}
                  id={i.id}
                  name={i.name}
                  followers={i.followers.total}
                  rate={calculateRate(i.popularity)}
                  token={state}
                />
              </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Index;
