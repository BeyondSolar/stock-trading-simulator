import React from "react";
import { Typography, Link } from "@material-ui/core/";

const Copyright = () => {
  return (
    <div>
      <br />
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/BeyondSolar/stock-trading-simulator">
          
          StockSim
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" align="center">
        This simulator is for entertainment & educational purposes only and uses
        fake money.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        The simulator is not representative of real-world trading conditions and
        the data is not guaranteed to be accurate.
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://github.com/BeyondSolar">
          Made by 'Abhishek Yadav, Abhikant Kumar' @ JUET, 2024
        </Link>{" "}
        
      </Typography>
    </div>
  );
};

export default Copyright;
