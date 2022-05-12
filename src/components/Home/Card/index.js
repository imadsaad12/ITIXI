import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
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
    position:"relative"
  },
  image: {
    width: "100%",
    height: "65%",
  },
  name: {
    color: "black",
    fontSize: "21px",
    marginTop: "5%",
    marginLeft: "5%",
    fontWeight: "400",
  },
  followers: {
    color: "gray",
    fontSize: "12px",
    marginLeft: "5%",
    fontWeight: "300",
  },
});
const Index = ({img,rate,name,followers,id,token}) => {
  const classes = useStyles();
  const navigate=useNavigate()
  const formatFollowers = (n) => {
    let nf = Intl.NumberFormat();
    return nf.format(n);
  };
  const handleClick=()=>{
    navigate(`/details`,{state:{token:token,id:id,name:name}})
  }
  return (
    <div className={classes.root} onClick={handleClick}>
      <img src={img.length>0?img[0].url:null} className={classes.image} />
      <Typography className={classes.name}>{name}</Typography>
      <Typography className={classes.followers}>
        {formatFollowers(followers)} followers
      </Typography>
      <Rating
        defaultValue={rate}
        disabled={true}
        style={{position:"absolute",bottom:6,left:10 }}
      />
    </div>
  );
};

export default Index;
