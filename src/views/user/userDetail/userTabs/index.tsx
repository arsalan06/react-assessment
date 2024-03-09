import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Stack, Tab, Typography } from "@mui/material";
import { detailText } from "../styles";
import { Result } from "../../../../utils/userInterface";
interface UserTabsProps {
  userData: Result;
}
function UserTabs({ userData }: UserTabsProps) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <TabPanel value="1">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography>Hi, My Name is</Typography>
            <Typography sx={detailText}>
              {userData.name.first} {userData.name.last}
            </Typography>
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography>My Email is</Typography>
            <Typography sx={detailText}>{userData.email}</Typography>
          </Stack>
        </TabPanel>
        <TabPanel value="3">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography>My Address is</Typography>
            <Typography sx={detailText}>
              {userData.location.street.number} {userData.location.street.name}{" "}
              {userData.location.city} {userData.location.state}{" "}
              {userData.location.country}
            </Typography>
          </Stack>
        </TabPanel>
        <TabPanel value="4">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography>My Address is</Typography>
            <Typography sx={detailText}>
              {userData.location.street.number}, {userData.location.street.name}
              , {userData.location.city}, {userData.location.state},{" "}
              {userData.location.country}
            </Typography>
          </Stack>
        </TabPanel>
        <TabPanel value="5">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography>My Phone Number is</Typography>
            <Typography sx={detailText}>
              {userData.phone}, {userData.cell}
            </Typography>
          </Stack>
        </TabPanel>
        <TabPanel value="6">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography>My Username is</Typography>
            <Typography sx={detailText}>{userData.login.username}</Typography>
          </Stack>
        </TabPanel>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab
            label={<PersonOutlineIcon sx={{ fontSize: "33px" }} />}
            value="1"
          />
          <Tab
            label={<EmailOutlinedIcon sx={{ fontSize: "33px" }} />}
            value="2"
          />
          <Tab
            label={<CalendarMonthOutlinedIcon sx={{ fontSize: "31px" }} />}
            value="3"
          />
          <Tab
            label={<LocationOnOutlinedIcon sx={{ fontSize: "31px" }} />}
            value="4"
          />
          <Tab
            label={<LocalPhoneOutlinedIcon sx={{ fontSize: "31px" }} />}
            value="5"
          />
          <Tab
            label={<LockOutlinedIcon sx={{ fontSize: "31px" }} />}
            value="6"
          />
        </TabList>
        {/* </Box> */}
      </Stack>
    </TabContext>
  );
}

export default UserTabs;
