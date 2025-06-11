import React from 'react';
import './TanstackPagination.css'

type Props = {
    pagination: {
        pageIndex: number;
        pageSize: number;
    };
    table: {
        firstPage: () => void;
        previousPage: () => void;
        nextPage: () => void;
        lastPage: () => void;
        getPageCount: () => number;
    };
}

const TanstackPagination: React.FC<Props> = ({ pagination, table }) => {
    return (
        <ul className="page-selector">
            <li className="first-page">
                <button
                    disabled={pagination.pageIndex + 1 === 1}
                    className="btn btn-link"
                    onClick={table.firstPage}
                >
                    {("First page")}
                </button>
            </li>
            <li className="previous-page">
                <button
                    disabled={pagination.pageIndex + 1 === 1}
                    className="btn btn-link"
                    onClick={table.previousPage}
                >
                    &#8249;
                </button>
            </li>
            <li className="page">
                <span>
                    {" "}
                    {pagination.pageIndex + 1} / {table.getPageCount()}{" "}
                </span>
            </li>
            <li className="next-page">
                <button
                    disabled={pagination.pageIndex + 1 === table.getPageCount() || table.getPageCount() === 0}
                    className="btn btn-link "
                    onClick={table.nextPage}
                >
                    {" "}
                    &#8250;
                </button>
            </li>
            <li className="last-page">
                <button
                    disabled={pagination.pageIndex + 1 === table.getPageCount()}
                    className="btn btn-link"
                    onClick={table.lastPage}
                >
                    {("Last page")}
                </button>
            </li>
        </ul>
    );
};

export default TanstackPagination;