import React, { useState, useEffect } from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(token)
  },[token])
  return (
    <div
      style={{
        position:"absolute",
        left:"50%",
        top:"50%",
        transform:"translate(-50%,-50%)",

      }}
    >
      {token ? (
        navigate("/home",{state:token} )
      ) : (
        <div>
          <SpotifyAuth
            redirectUri="http://localhost:3000/"
            clientID="0ffcec7caf3b459198766c0a334e7232"
            scopes={[Scopes.userReadPrivate, "user-read-email"]}
            onAccessToken={(token) => setToken(token)}
            
          />
        </div>
      )}
    </div>
  );
};

export default Index;
