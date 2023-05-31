import React, { useEffect, useState } from "react";
import Card from "../../components/frequent/card/card";
import { useAppSelector } from "../../hooks/reduxHooks";
import { ReactComponent as UserIcon } from "../../assets/icons/user-card-illustration.svg";
import { ReactComponent as ActiveUserIcon } from "../../assets/icons/active-user.svg";
import { ReactComponent as UsersWithLoanIcon } from "../../assets/icons/user-with-loan.svg";
import { ReactComponent as UsersWithSavingsIcon } from "../../assets/icons/user-with-savings.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import { ReactComponent as BlacklistUserIcon } from "../../assets/icons/delete-friend.svg";
import { ReactComponent as ViewDetailsIcon } from "../../assets/icons/view.svg";
import { ReactComponent as ActivateUserIcon } from "../../assets/icons/activate-user.svg";
import "./_user.scss";
import Table from "../../components/table/Table";
import {
  TableBody,
  TableHead,
  TableRow,
} from "../../components/table/tableparts";
import DropDownMenu from "../../components/frequent/dropDownMenu/DropDownMenu";
import { Input } from "../../components/frequent/input/input";
import Select from "../../components/frequent/selec/select";
import FillButton from "../../components/frequent/fillbutton/FillButton";
import OutlinedButton from "../../components/frequent/outline/OutlinedButton";
import DropDwonOptoins from "../../components/frequent/dropDownMenu/DropDwonOptoins";
import { DropDown } from "../../utils/Dropdown";
import { useNavigate } from "react-router-dom";
import { convertToOptions } from "../../utils/forms";

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  orgName: string;
  status: string;
  createdAt: string;
}

export default function Users() {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  const productList = useAppSelector((state) => state.userLists);
  const { loading } = productList;

  const states = localStorage.getItem("usersdata");
  const users: User[] = states ? JSON.parse(states) : [];

  const gotoUserDetails = (user: string, index: number) => {
    navigate(`/dashboard/users/${user}`);
  };

  const [pageNumber, setPageNumber] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const pagesVisited = pageNumber * productsPerPage;
  const displayUsers = users.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );
  const pageCount = Math.ceil(users.length / productsPerPage);
  const changePage = ({ selected }: any) => {
    const changePage = ({ selected }: { selected: number }) => {
      setPageNumber(selected);
    };
  };

  interface FilterState {
    status: string;
    userName: string;
    email: string;
    phoneNumber: string;
    orgName: string;
    createdAt: string;
  }

  const initialFilterState: FilterState = {
    status: "",
    userName: "",
    email: "",
    phoneNumber: "",
    orgName: "",
    createdAt: "",
  };

  const [filter, setFilter] = useState<FilterState>(initialFilterState);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter(initialFilterState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const allOrg = displayUsers?.map((user: User) => user?.orgName);
  const allOrgName = Array.from(new Set(allOrg));

  const handleSelect = (name: string, val: any) => {
    if (val) {
      setFilter((prevState) => ({
        ...prevState,
        [name]: val.value,
      }));
    }
  };

  const activateHandler = (index: number) => {
    users[index] = { ...users[index], status: "active" };
    localStorage.setItem("usersdata", JSON.stringify(users));
    navigate("/dashboard/users");
  };

  const blacklistHandler = (index: number) => {
    users[index] = { ...users[index], status: "blacklisted" };
    localStorage.setItem("usersdata", JSON.stringify(users));
    navigate("/dashboard/users");
  };

  return (
    <div className="page-content user-page">
      <div className="page-heading">
        <h1 className="page-title">Users</h1>
      </div>
      <div>
        {loading ? (
          <>Loading</>
        ) : (
          <div>
            <div className="analytics-card-row">
              {[
                { icon: <UserIcon />, label: "users", value: "2,453" },
                {
                  icon: <ActiveUserIcon />,
                  label: "Active Users",
                  value: "2,453",
                },
                {
                  icon: <UsersWithLoanIcon />,
                  label: "Users With Loans",
                  value: "12,453",
                },
                {
                  icon: <UsersWithSavingsIcon />,
                  label: "Users With Savings",
                  value: "102,453",
                },
              ].map((card, idx) => {
                return (
                  <Card className="analytics-card" key={idx}>
                    {card?.icon}
                    <div className="label">{card?.label}</div>
                    <div className="value">{card?.value}</div>
                  </Card>
                );
              })}
            </div>
            <Table
              tableProps={{
                pageCount,
                setProductsPerPage,
                changePage,
                users,
              }}
              className="users-table"
            >
              <TableHead
                headings={[
                  "Organizations",
                  "UserName",
                  "Email",
                  "Phone Number",
                  "Date Joined",
                  "Status",
                ]}
              />
              <DropDownMenu className="filter-dropdown">
                <form>
                  <Select
                    onChange={(val: any) => {
                      handleSelect("orgName", val);
                    }}
                    label="Organizations"
                    name="orgName"
                    options={convertToOptions(allOrgName)}
                  />
                  <Input
                    onChange={(e: any) => {
                      handleChange(e);
                    }}
                    label="UserName"
                    name="userName"
                  />
                  <Input
                    onChange={(e: any) => {
                      handleChange(e);
                    }}
                    label="Email"
                    name="email"
                  />
                  <Input
                    onChange={(e: any) => {
                      handleChange(e);
                    }}
                    label="Date Joined"
                    name="createdAt"
                  />
                  <Input
                    onChange={(e: any) => {
                      handleChange(e);
                    }}
                    label="Phone Number"
                    name="phoneNumber"
                  />
                  <Select
                    onChange={(val: any) => {
                      handleSelect("status", val);
                    }}
                    label="Status"
                    name="status"
                    options={convertToOptions([
                      "inactive",
                      "blacklisted",
                      "active",
                      "pending",
                    ])}
                  />
                  <div className="button-row">
                    <OutlinedButton
                      onClick={(e: any) => {
                        handleReset(e);
                      }}
                    >
                      Reset
                    </OutlinedButton>
                    <FillButton type="submit">Filter</FillButton>
                  </div>
                </form>
              </DropDownMenu>
              <TableBody>
                {displayUsers.map((user: any, index: any) => {
                  return (
                    <TableRow key={user?.id}>
                      <td className="org-col">{user?.orgName}</td>
                      <td className="name-col">{user?.userName}</td>
                      <td className="email-col">{user?.email}</td>
                      <td className="phone-col">{user?.phoneNumber}</td>
                      <td className="created-col">{user?.createdAt}</td>
                      <td className="status-col">
                        <span
                          className={`status-label ${
                            user?.status === "active"
                              ? "active"
                              : user?.status === "inactive"
                              ? "inactive"
                              : user?.status === "blacklisted"
                              ? "blacklisted"
                              : user?.status === undefined
                              ? "pending"
                              : ``
                          }`}
                        >
                          {user?.status ? user?.status : "pending"}
                        </span>
                      </td>
                      <td className="actions-col">
                        <button
                          onClick={() => {
                            DropDown(`.more-option-menu-${user?.id}`);
                          }}
                        >
                          <MoreIcon />
                        </button>
                        <DropDownMenu
                          className={`more-option-menu-${user?.id}`}
                        >
                          <DropDwonOptoins
                            onClick={() => {
                              gotoUserDetails(user?.id, index);
                            }}
                          >
                            <span className="icon">
                              <ViewDetailsIcon />
                            </span>
                            View Details
                          </DropDwonOptoins>
                          <DropDwonOptoins
                            onClick={() => {
                              blacklistHandler(index);
                            }}
                          >
                            <span className="icon">
                              <BlacklistUserIcon />
                            </span>{" "}
                            Blacklist User
                          </DropDwonOptoins>
                          <DropDwonOptoins
                            onClick={() => activateHandler(index)}
                          >
                            <span className="icon">
                              <ActivateUserIcon />
                            </span>
                            Activate User
                          </DropDwonOptoins>
                        </DropDownMenu>
                      </td>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
