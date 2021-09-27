import * as React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { ButtonBase as Button } from "../Button";
import { ChevronRight } from "../Icon/ChevronRight";
import { ChevronLeft } from "../Icon/ChevronLeft";
import range from "lodash.range";

function mkHref(pageParameterName, pageNumber) {
  const params = new URLSearchParams(window.location.search);
  params.set(pageParameterName, pageNumber);
  return "?" + params;
}

export const Pagination = (props) => {
  const {
    currentPageNumber,
    itemNumberPerPage,
    totalItemCount,
    pageParameterName,
    pageRange,
  } = props;

  const nbPages = getNbPages(totalItemCount, itemNumberPerPage);

  if (nbPages === 1) {
    return null;
  }

  const pageNumbers = getPageNumbers(nbPages, pageRange, currentPageNumber);

  return (
    <div className="flex flex-row justify-center items-center space-x-2 ">
      {currentPageNumber > 1 ? (
        <Button
          variant="outline"
          color="secondary"
          href={mkHref(pageParameterName, currentPageNumber - 1)}
        >
          <ChevronLeft
            className={cx(
              {
                "text-red": currentPageNumber === 1,
                "text-grey": currentPageNumber !== 1,
              },
              "w-2"
            )}
          />
        </Button>
      ) : null}

      {pageNumbers.map((pageNumber, index) => {
        const previousPageNumber = pageNumbers[index - 1];
        const showSeparator =
          previousPageNumber !== undefined &&
          previousPageNumber !== pageNumber - 1;

        return (
          <React.Fragment key={pageNumber}>
            {showSeparator ? <div>...</div> : null}
            <PaginationItem
              current={pageNumber === currentPageNumber}
              number={pageNumber}
              pageParameterName={pageParameterName}
            >
              {pageNumber}
            </PaginationItem>
          </React.Fragment>
        );
      })}

      {currentPageNumber < nbPages ? (
        <Button
          variant="primary"
          href={mkHref(pageParameterName, currentPageNumber + 1)}
        >
          <ChevronRight
            className={cx(
              {
                "text-primary-light": currentPageNumber === nbPages,
                "text-primary-dark": currentPageNumber !== nbPages,
              },
              "w-2"
            )}
          />
        </Button>
      ) : null}
    </div>
  );
};

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  itemNumberPerPage: PropTypes.number.isRequired,
  totalItemCount: PropTypes.number.isRequired,
  pageParameterName: PropTypes.string,
  pageRange: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  pageParameterName: "page",
};

const getNbPages = (totalItemCount, itemNumberPerPage) => {
  return Math.max(Math.ceil(totalItemCount / itemNumberPerPage), 1);
};

const getPageNumbers = (nbPages, pageRange, currentPageNumber) => {
  let pageNumbers;

  if (pageRange) {
    const minPageInRange = Math.max(currentPageNumber - pageRange, 1);
    const maxPageInRange = Math.min(currentPageNumber + pageRange + 1, nbPages);

    pageNumbers = [
      minPageInRange === 1 ? null : 1,
      ...range(minPageInRange, maxPageInRange),
      nbPages,
    ].filter(Boolean);
  } else {
    pageNumbers = range(1, nbPages + 1);
  }

  return pageNumbers;
};

function PaginationItem(props) {
  const { children, current, number, pageParameterName, ...rest } = props;

  return (
    <Button
      variant={current ? "primary" : "secondary"}
      href={!current ? mkHref(pageParameterName, number) : undefined}
      {...rest}
    >
      {children}
    </Button>
  );
}

PaginationItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  current: PropTypes.bool,
  number: PropTypes.number.isRequired,
  pageParameterName: PropTypes.string.isRequired,
};

PaginationItem.defaultProps = {
  current: false,
};
