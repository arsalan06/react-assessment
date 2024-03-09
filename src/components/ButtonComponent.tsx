import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
interface buttonInterface {
  bg: string;
  width: string;
}
// Custom MUI Button
export const StyledButton = styled(Button)(
  ({ bg, width }: buttonInterface) => ({
    "&.MuiButton-root": {
      cursor: "pointer",
      fontFamily:"Roboto",
      fontWeight: 500,
      fontSize: "12px",
      backgroundColor: bg,
      color: "white",
      border: "1px solid lightgray",
      borderRadius: "6px",
      width: width ? width : "120px",
      marginRight:"10px",
    },
  })
);
