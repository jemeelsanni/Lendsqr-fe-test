import React, { ReactNode } from "react";
import { convertToOptions } from "../../utils/forms";
import Card from "../frequent/card/card";
import Select from "../frequent/selec/select";
import Pagination from "../pagination/Pagination";
import "./_table.scss";

interface TableProps {
  pageCount: number;
  changePage: (selectedItem: { selected: number }) => void;
  setProductsPerPage: (perPage: number) => void;
  users: any[];
}

interface TableContainerProps {
  children: ReactNode;
  tableProps: TableProps | undefined;
  [key: string]: any;
}

export default function Table({
  children,
  tableProps,
  ...rest
}: TableContainerProps) {
  const {
    pageCount = 0,
    changePage = () => {},
    setProductsPerPage = () => {},
    users = [],
  } = tableProps || {};
  const totalNo = users.length;

  const handlePerPageChange = (val: any) => {
    if (val) {
      setProductsPerPage(val.value);
    }
  };

  return (
    <div className="table-container">
      <Card>
        <table {...rest}>{children}</table>
      </Card>
      <div className="table-selection-details">
        <div className="pageination-container">
          <Pagination pageCount={pageCount} changePage={changePage} />
        </div>

        <div className="current-count">
          Showing
          <span>
            <Select
              options={convertToOptions([10, 25, 50])}
              defaultValue={convertToOptions([10])}
              onChange={(val: any) => {
                handlePerPageChange(val);
              }}
            />
          </span>{" "}
          out of {totalNo}
        </div>
      </div>
    </div>
  );
}
