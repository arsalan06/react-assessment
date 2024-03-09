import { useContext, useEffect, useState } from "react";
import { Result, UserApiResponse } from "../utils/userInterface";
import { UserFilterContext } from "../context/UserFilterProvider";
import { RootState, dispatch, useSelector } from "../redux/store";
import { getAllUserAction } from "../redux/userSlice";
// custom hook
function useUserData() {
  // const dispatch = useDispatch();
  const { userList } = useSelector((state: RootState) => state.userReducer);
  const filterContext = useContext(UserFilterContext);
  const [userArray, setUserArray] = useState<UserApiResponse>()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllUserAction());
  }, []);
  useEffect(() => {
    if (userList.results.length > 0) {
      setLoading(false);
      if (filterContext?.filterUserData) {
        const filterArray = userList.results?.filter(
          (item: Result) => item.gender === filterContext?.filterUserData
        );
        setUserArray({results:filterArray});
      } else {
        setUserArray(userList);
      }
    }
  }, [userList]);

  // search user handler

  const handleUserSearch = (value: string) => {
    let searchedRecords: Result[] = [];
    userList?.results.map((user: Result) => {
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

  // filter user according to gender
  const handleFilterChange = (event: any, value: string | null) => {
    filterContext?.setFilterUserData(value);
    console.log(value)
    const filterArray = userList.results?.filter(
      (item: Result) => item.gender.toString().toLowerCase() === value?.toString().toLowerCase()
    );
    setUserArray({results:filterArray});
  };

  return {
    loading,
    userArray,
    handleFilterChange,
    handleUserSearch,
  };
}

export default useUserData;
