import React, { ReactNode } from "react";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { DropDown } from "../../utils/Dropdown";

interface TableHeadProps {
  headings: string[];
  cellClass?: string;
  [key: string]: any;
}

const TableHead: React.FC<TableHeadProps> = ({
  headings,
  cellClass,
  ...rest
}) => {
  return (
    <thead {...rest}>
      <tr>
        {headings.map((title, idx) => {
          return (
            <th
              key={idx}
              className={`table-heading ${cellClass ? cellClass : ""}`}
            >
              <div>
                {title}{" "}
                <span
                  className="filter-icon"
                  onClick={() => {
                    DropDown(".filter-dropdown");
                  }}
                >
                  <FilterIcon />
                </span>
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

interface TableBodyProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

const TableBody: React.FC<TableBodyProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <tbody className={`table-body ${className ? className : ""}`} {...rest}>
      {children}
    </tbody>
  );
};

interface TableRowProps {
  children: ReactNode;
  className?: string;
  padding?: string;
  [key: string]: any;
}

const TableRow: React.FC<TableRowProps> = ({
  children,
  className,
  padding,
  ...rest
}) => {
  return (
    <tr className={`table-row ${className ? className : ""}`} {...rest}>
      {children}
    </tr>
  );
};

export { TableHead, TableBody, TableRow };
