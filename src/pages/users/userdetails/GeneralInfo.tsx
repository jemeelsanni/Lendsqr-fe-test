import React from "react";

interface UserDetails {
  profile: {
    firstName: string;
    lastName: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
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

interface Props {
  userDetails: UserDetails[];
}

const GeneralInfo: React.FC<Props> = ({ userDetails }) => {
  return (
    <div>
      <section className="detail-section personal">
        <h4 className="section-title">Personal Information</h4>

        <div className="detail-row">
          <div className="detail-field">
            <h6 className="field-title">Full Name</h6>
            <p>
              {userDetails[0]?.profile?.firstName}{" "}
              {userDetails[0]?.profile?.lastName}
            </p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Phone Number</h6>
            <p>{userDetails[0]?.phoneNumber}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Email Address</h6>
            <p>{userDetails[0]?.email}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">BVN</h6>
            <p>{userDetails[0]?.profile?.bvn}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Gender</h6>
            <p>{userDetails[0]?.profile?.gender}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Marital Status</h6>
            <p>{userDetails[0]?.profile?.maritalStatus}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Children</h6>
            <p>{userDetails[0]?.profile?.children}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Type of Residence</h6>
            <p>{userDetails[0]?.profile?.typeOfResidence}</p>
          </div>
        </div>
      </section>

      <section className="detail-section employment">
        <h4 className="section-title">Education and Employment</h4>

        <div className="detail-row">
          <div className="detail-field">
            <h6 className="field-title">Level of education</h6>
            <p>{userDetails[0]?.education?.level}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Employment Status</h6>
            <p>{userDetails[0]?.education?.employmentStatus}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Sector of Employment</h6>
            <p>{userDetails[0]?.education?.sector}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Employment Duration</h6>
            <p>{userDetails[0]?.education?.duration}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">office email</h6>
            <p>{userDetails[0]?.education?.officeEmail}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">monthly income</h6>
            <p>
              {userDetails[0]?.education?.monthlyIncome
                .map((amount: number) => {
                  return `\u20A6` + amount;
                })
                .join(" - ")}
            </p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Loan Repayment</h6>
            <p>{`\u20A6${userDetails[0]?.education?.loanRepayment}`}</p>
          </div>
        </div>
      </section>

      <section className="detail-section socials">
        <h4 className="section-title">Socials</h4>

        <div className="detail-row">
          <div className="detail-field">
            <h6 className="field-title">Twitter</h6>
            <p>{userDetails[0]?.socials?.twitter}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">facebook</h6>
            <p>{userDetails[0]?.socials?.facebook}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Insatgram</h6>
            <p>{userDetails[0]?.socials?.instagram}</p>
          </div>
        </div>
      </section>

      <section className="detail-section guarantor">
        <h4 className="section-title">Guarantor</h4>

        <div className="detail-row">
          <div className="detail-field">
            <h6 className="field-title">Full Name</h6>
            <p>
              {userDetails[0]?.guarantor?.firstName}{" "}
              {userDetails[0]?.profile?.lastName}
            </p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Phone Number</h6>
            <p>{userDetails[0]?.guarantor?.phoneNumber}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Email Address</h6>
            <p>{userDetails[0]?.email}</p>
          </div>

          <div className="detail-field">
            <h6 className="field-title">Relationship</h6>
            <p>{userDetails[0]?.guarantor?.relationship}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralInfo;
