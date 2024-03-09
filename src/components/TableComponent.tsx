import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// custom table cell
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#303030",
    color: theme.palette.common.white,
    fontWeight:700,
    fontSize: 16,
    fontFamily:"Roboto",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight:500,
    fontFamily:"Roboto",
  },
}));
// custom table row
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
