import React, { ReactNode, createContext, useState } from "react";
interface UserFilterContextType {
  filterUserData: string | null;
  setFilterUserData: React.Dispatch<React.SetStateAction<string | null>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searchValue: string | undefined;
  setSearchValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const UserFilterContext = createContext<
  UserFilterContextType | undefined
>(undefined);

export function UserFilterProvider({ children }: { children: ReactNode }) {
  const [filterUserData, setFilterUserData] = useState<string | null>("");
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState<string | undefined>("");
  const value: UserFilterContextType = {
    filterUserData,
    setFilterUserData,
    page,
    setPage,
    searchValue,
    setSearchValue,
  };
  return (
    <UserFilterContext.Provider value={value}>
      {children}
    </UserFilterContext.Provider>
  );
}
