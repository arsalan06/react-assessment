import { useLocation, useNavigate } from "react-router-dom";
import MainCard from "../../../components/cards/MainCard";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UserTabs from "./userTabs";
import GoogleMap from "./googleMap";
// @ts-ignore
import { countries } from "country-flags-svg";
import { useEffect, useState } from "react";
interface Country {
  name: string;
  demonym: string;
  flag: string;
  iso2: string;
  iso3: string;
}
function UserDetail() {
  const [countryFlag, setCountryFlage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state;
  useEffect(() => {
    const flag = countries.filter(
      (item: Country) =>
        item.name.toString().toLowerCase() ===
        userData?.location?.country.toString().toLowerCase()
    );
    setCountryFlage(flag[0].flag);
  }, [userData]);

  return (
    <div>
      <MainCard>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer" }}
          />
          <Typography
            sx={{
              "&.MuiTypography-root": {
                fontSize: 22,
                fontWeight: 700,
                fontFamily: "Roboto",
              },
            }}
          >
            User Detail
          </Typography>
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Avatar
            sx={{
              width: "160px !important",
              height: "160px !important",
              objectFit: "cover",
            }}
            src={userData.picture.large}
          />
          {/* country flag */}
          <Box
            component="img"
            src={countryFlag}
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
          {/* user info  */}
          <UserTabs userData={userData} />
        </Stack>
        {/* Google map */}
        <GoogleMap />
      </MainCard>
    </div>
  );
}

export default UserDetail;
