import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./_user-details.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Card from "../../../components/frequent/card/card";
import OutlinedButton from "../../../components/frequent/outline/OutlinedButton";
import StarRating from "../../../components/frequent/starRating/StarRating";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { ReactComponent as DefaultAvatar } from "../../../assets/icons/user.svg";
import BackButton from "../../../components/frequent/back-button/back-button";
import GeneralInfo from "./GeneralInfo";

interface User {
  id: string;
  profile: {
    avatar: string;
    firstName: string;
    lastName: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
  userName: string;
  uid: string;
  tier: number;
  accountBalance: number;
  accountNumber: string;
  bankName: string;
  status: string;
  phoneNumber: string;
  email: string;
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: number[];
    loanRepayment: number;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    firstName: string;
    phoneNumber: string;
    relationship: string;
  };
}

export default function UserDetails() {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams<{ id: string }>();
  const usersLists = useAppSelector((state) => state.userLists);
  const { users } = usersLists;
  const [user, setUser] = useState<User[]>(users);
  const userDetails = user.filter((x) => x.id === id);
  let index: number;
  for (let x = 0; x < user.length; x++) {
    if (user[x].id === id) {
      index = x;
      break;
    }
  }

  const blacklistHandler = () => {
    user[index] = { ...user[index], status: "blacklisted" };
    localStorage.setItem("usersdata", JSON.stringify(user));
  };

  const activateHandler = () => {
    user[index] = { ...user[index], status: "active" };
    localStorage.setItem("usersdata", JSON.stringify(user));
  };

  return (
    <div>
      <div className="user-details-page">
        <BackButton to="/users">Back to Users</BackButton>

        <div className="page-heading">
          <div>
            <h1 className="page-title">User Details</h1>
          </div>

          <div className="button-row">
            <OutlinedButton
              onClick={blacklistHandler}
              className="blacklist-btn"
            >
              Blacklist User
            </OutlinedButton>
            <OutlinedButton onClick={activateHandler}>
              Activate User
            </OutlinedButton>
          </div>
        </div>

        <Tabs>
          <Card className="basic-info-container">
            <div className="basic-info">
              <div className="user-info">
                <div className="avatar">
                  {userDetails[0]?.profile?.avatar ? (
                    <img src={userDetails[0]?.profile?.avatar} alt="avatar" />
                  ) : (
                    <DefaultAvatar />
                  )}
                </div>

                <div className="name">
                  <h2>{userDetails[0]?.userName}</h2>
                  <p>{userDetails[0]?.uid}</p>
                </div>
              </div>

              <div className="tier">
                <p>User’s Tier</p>
                <StarRating rating={userDetails[0]?.tier} />
              </div>

              <div className="financial-info">
                <h2>&#x20A6;{userDetails[0]?.accountBalance}</h2>
                <p>
                  {userDetails[0]?.accountNumber}/{userDetails[0]?.bankName}
                </p>
              </div>
            </div>

            <div className="tab-list-container">
              <TabList>
                <Tab>General Information</Tab>
                <Tab>Document</Tab>
                <Tab>Bank Details</Tab>
                <Tab>Loans</Tab>
                <Tab>Savings</Tab>
                <Tab>App and System</Tab>
              </TabList>
            </div>
          </Card>

          <Card className="full-details-container">
            <TabPanel>
              <GeneralInfo userDetails={userDetails} />
            </TabPanel>
            <TabPanel>Document</TabPanel>
            <TabPanel>Bank Details</TabPanel>
            <TabPanel>Loans</TabPanel>
            <TabPanel>Savings</TabPanel>
            <TabPanel>App and Systems</TabPanel>
          </Card>
        </Tabs>
      </div>
    </div>
  );
}
