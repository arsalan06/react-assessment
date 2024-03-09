// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MainCard from "../../components/cards/MainCard";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../components/TableComponent";
import {
  Autocomplete,
  Avatar,
  CircularProgress,
  Pagination,
  Stack,
  TablePagination,
  TextField,
  Typography,
} from "@mui/material";
import { StyledButton } from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserFilterContext } from "../../context/UserFilterProvider";
import useUserData from "../../hooks/useUserData";
const top100Films = ["female", "male"];
export default function CustomizedTables() {
  const navigate = useNavigate();
  // filter context API
  const filterContext = useContext(UserFilterContext);
  // custom Hook
  const {
    handleUserSearch,
    handleFilterChange,
    userArray,
    loading,
  } = useUserData();
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <MainCard>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography
          sx={{
            "&.MuiTypography-root": {
              fontSize: 22,
              fontWeight: 700,
              fontFamily: "Roboto",
            },
          }}
        >
          User List
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField
            type="text"
            label="Search User"
            sx={{ width: 250 }}
            onChange={(e) => handleUserSearch(e.target.value)}
          />
          <Autocomplete
            id="grouped-demo"
            options={top100Films}
            value={filterContext?.filterUserData}
            sx={{ width: 250 }}
            onChange={handleFilterChange}
            renderInput={(params) => (
              <TextField {...params} label="With categories" />
            )}
          />
        </Stack>
      </Stack>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell component="th" align="left">
                Photo
              </StyledTableCell>
              <StyledTableCell component="th" align="left">
                Name
              </StyledTableCell>
              <StyledTableCell component="th" align="left">
                Email
              </StyledTableCell>
              <StyledTableCell component="th" align="left">
                Gender
              </StyledTableCell>
              <StyledTableCell component="th" align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <StyledTableCell align="center" colSpan={4}>
                <CircularProgress />
              </StyledTableCell>
            ) : (
              userArray?.results?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                <StyledTableRow key={user?.login?.uuid}>
                  <StyledTableCell align="left">
                    <Avatar alt="Remy Sharp" src={user.picture.medium} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="user">
                    {user?.name.first ? user?.name.first : ""}{" "}
                    {user?.name.last ? user?.name.last : ""}
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.email}</StyledTableCell>
                  <StyledTableCell align="left">{user.gender}</StyledTableCell>
                  <StyledTableCell align="right">
                    <StyledButton
                      width="120px"
                      bg="#ff3f3f"
                      onClick={() =>
                        navigate(`/user-detail/${user?.login?.uuid}`, {
                          state: { userData: user },
                        })
                      }
                    >
                      Show Detail
                    </StyledButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          colSpan={3}
          count={userArray?.results?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          showFirstButton
          showLastButton
        />
      </TableContainer>
    </MainCard>
  );
}
