import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
    return (
      <Typography variant="h6" color="textSecondary" align="center">
        {" "}
        {"Copyright © "}{" "}
        <Link color="primary" href="/">
          Raj Kumar Panda{" "}
        </Link>{" "}
        {new Date().getFullYear()} {"."}{" "}
      </Typography>
    );
  }
  
