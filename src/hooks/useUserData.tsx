import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Result, UserApiResponse } from "../utils/userInterface";
import { UserFilterContext } from "../context/UserFilterProvider";
// custom hook
function useUserData() {
  const filterContext = useContext(UserFilterContext);
  const [userArray, setUserArray] = useState<UserApiResponse>();
  const [userData, setUserData] = useState<UserApiResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleApiCall(filterContext?.page, filterContext?.filterUserData);
  }, []);

  const handleApiCall = (
    pageNumber: number | undefined,
    genderValue: string | null | undefined
  ) => {
    setLoading(true);
    let url;
    // checking the user gender filter if have value then get data accordingly
    if (genderValue) {
      url = `https://randomuser.me/api/?page=${pageNumber}&results=10&gender=${genderValue}`;
    } else {
      url = `https://randomuser.me/api/?page=${pageNumber}&results=10`;
    }
    axios
      .get(url)
      .then((res) => {
        setUserArray(res.data);
        setUserData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // search user handler

  const handleUserSearch = (value: string) => {
    let searchedRecords: Result[] = [];
    userData?.results.map((user) => {
      const fname = user?.name.first?.toString().toLowerCase();
      const lname = user?.name.last?.toString().toLowerCase();
      const fullName =
        user?.name.first?.toString().toLowerCase() +
        " " +
        user?.name.last?.toString().toLowerCase();

      if (
        fname?.includes(value) ||
        lname?.includes(value) ||
        fullName?.includes(value)
      ) {
        searchedRecords?.push(user);
      }
      setUserArray({ results: searchedRecords });
    });
  };

  // get data page according to page
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    filterContext?.setPage(value);
    handleApiCall(value, filterContext?.filterUserData);
  };

  // filter user according to gender
  const handleFilterChange = (event: any, value: string | null) => {
    filterContext?.setFilterUserData(value);
    handleApiCall(filterContext?.page, value);
  };

  return {
    loading,
    userArray,
    handlePageChange,
    handleFilterChange,
    handleUserSearch,
  };
}

export default useUserData;
