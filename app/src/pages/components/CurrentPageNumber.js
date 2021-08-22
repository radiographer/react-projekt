import React from "react";

import { FormLabel } from "@material-ui/core";

const CurrentPageInfo = ({ page }) => {
  return (
    <div>
      {" "}
      <FormLabel component="legend">current page is: {page}.</FormLabel>
    </div>
  );
};
export default CurrentPageInfo;
