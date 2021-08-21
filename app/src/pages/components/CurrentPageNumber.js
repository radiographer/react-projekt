import React from "react";

import { FormLabel } from "@material-ui/core";

const CurrentPageInfo = ({ page }) => {
  return (
    <div>
      {" "}
      <FormLabel component="legend">current page</FormLabel>
      {page}
    </div>
  );
};
export default CurrentPageInfo;
