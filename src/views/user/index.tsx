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
  TextField,
  Typography,
} from "@mui/material";
import { StyledButton } from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
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
    handlePageChange,
    userArray,
    loading,
  } = useUserData();
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
              userArray?.results?.map((user) => (
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
      </TableContainer>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Pagination
          count={100}
          page={filterContext?.page}
          onChange={handlePageChange}
        />
      </Stack>
    </MainCard>
  );
}
