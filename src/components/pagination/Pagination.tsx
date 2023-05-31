import React, { ReactElement } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import "./_paginate.scss";
//icons
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg";

interface PaginationProps {
  pageCount: number;
  changePage: (selectedItem: { selected: number }) => void;
}

export default function Pagination({
  pageCount,
  changePage,
}: PaginationProps): ReactElement {
  return (
    <div>
      <ReactPaginate
        marginPagesDisplayed={2}
        breakLabel="..."
        onPageChange={changePage}
        pageCount={pageCount}
        nextLabel={
          <button className="paginate-button next">
            <NextIcon />
          </button>
        }
        previousLabel={
          <button className="paginate-button previous">
            <NextIcon />
          </button>
        }
        // renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="paginate-item"
        activeClassName="active"
      />
    </div>
  );
}
