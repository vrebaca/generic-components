import React, { JSX, useState } from "react";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    getExpandedRowModel,
    useReactTable,
    SortingState,
    ColumnFiltersState,
    VisibilityState,
    Row,
    ExpandedState,
} from "@tanstack/react-table";
import { ButtonIcon, DefaultIcon } from "../../icons/Icons";
import { BootstrapRow, Clearfix, ColMd3, ColMd4, ColMd9 } from "../../containers/BootstrapContainers";
import Search from "../../search/Search";
import { TanstackDropdown } from "./TanstackDropdown";
import { Check } from "../../checkbox/Check";
import NoSearchResults from "./NoSearchResults";
import ChevronIcon from "../../icons/ChevronIcon";
import { TableWrapper } from "../../containers/Containers";
import TanstackPagination from "./TanstackPagination";
import CSVExportButtonNew, { CSVColumn } from "../../buttons/CSVExportButtonNew";
import { useTranslation } from "react-i18next";
import { H3SemiBold, H4SemiBold, TextBodyMdRegular } from "../../text/Typography";
import { PrimaryButtonSmall, PrimaryOutlineButtonSmall } from "../../buttons/Buttons";
import { Option } from "../../combobox/ComboBox";
import { SpacingContainer } from "../../containers/Spacingcontainers";

export interface HeaderButton {
    Text: string;
    Type: "primary" | "secondary";
    onClick: () => void;
    LeftIcon?: string;
    RightIcon?: string;
}

export interface DropdownProps {
    options: Option[];
    columnName: string;
}

interface GenericTableProps<T> {
    data: T[];
    columns: ColumnDef<T, any>[];
    initialVisibility?: VisibilityState;
    csvColumns?: CSVColumn<T>[];
    csvFileName?: string;
    disableHoverEffect?: boolean;
    headerButtons?: HeaderButton[];
    headerTitle?: string;
    dropdownFilter?: DropdownProps;
    tableHeight?: string;
    pagesize?: number;
    onRowClick?: (row: Row<T>) => void;
    renderDetails?: (row: T) => JSX.Element | JSX.Element[];
    onCheckboxClick?: (row: T, checked: boolean) => void;
    onSelectAll?: (checked: boolean) => void;
}

export function TanstackTable<T>({
    data,
    columns,
    initialVisibility = {},
    disableHoverEffect = false,
    csvColumns,
    csvFileName,
    headerButtons,
    headerTitle,
    dropdownFilter,
    tableHeight,
    pagesize,
    onRowClick,
    renderDetails,
    onCheckboxClick,
    onSelectAll
}: GenericTableProps<T>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(initialVisibility);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: pagesize ?? 100,
    });
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const { t } = useTranslation();


    const isEmpty = data.length === 0;

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
            globalFilter,
            columnVisibility,
            pagination,
            expanded,
        },
        getRowCanExpand: () => renderDetails ? true : false, // Enable row expansion only if renderDetails is provided
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        onExpandedChange: setExpanded,
        debugTable: false,
        enableRowSelection: onCheckboxClick ? true : false, // or a function to enable per row
    });
    const filterColumnName = dropdownFilter ? table.getColumn(dropdownFilter.columnName) : null;

    return (
        <TableWrapper>
            <H3SemiBold>{t("Items")} ({data?.length ?? 0})</H3SemiBold>
            <TextBodyMdRegular>{headerTitle}</TextBodyMdRegular>
            {
                headerButtons && headerButtons.map((button, index) => (
                    button.Type === "primary" ?
                        <PrimaryButtonSmall
                            className="pull-right"
                            key={index}
                            onClick={() => button.onClick()}
                        >
                            {button.LeftIcon && <ButtonIcon className={button.LeftIcon} />}
                            &nbsp;
                            {button.Text}
                            &nbsp;
                            {button.RightIcon && <ButtonIcon className={button.RightIcon} />}

                        </PrimaryButtonSmall>
                        :
                        <PrimaryOutlineButtonSmall
                            className="pull-right"
                            key={index}
                            onClick={() => button.onClick()}
                        >
                            {button.LeftIcon && <ButtonIcon className={button.LeftIcon} />}
                            &nbsp;
                            {button.Text}
                            &nbsp;
                            {button.RightIcon && <ButtonIcon className={button.RightIcon} />}
                        </PrimaryOutlineButtonSmall>
                ))
            }
            <Clearfix />
            <SpacingContainer margin="20px 0px 0px 0px" />
            <div className="ft-table-content">
                <ColMd9>
                    <Search
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        onClearText={() => setGlobalFilter("")}
                        placeholder={t("Search...")}
                        value={globalFilter}
                    />
                </ColMd9>
                <ColMd3>
                    {dropdownFilter && <TanstackDropdown
                        column={filterColumnName}
                        options={dropdownFilter.options} />}
                </ColMd3>
                <Clearfix />

                {onSelectAll && <table>
                    <tbody>
                        {!renderDetails && <tr><td style={{ verticalAlign: "middle", paddingLeft: "7px" }}>
                            <Check
                                verticalAlign="middle"
                                checked={getIsAnySelected()}
                                onChange={(e) => {
                                    e.stopPropagation();
                                    const checked = e.currentTarget.checked;
                                    toggleSelected(checked);
                                    onSelectAll(checked);
                                }}
                            />
                            &nbsp;&nbsp;
                            <H4SemiBold IsInline style={{ verticalAlign: "middle" }}>{getSelectionText()}</H4SemiBold>
                        </td></tr>
                        }
                        {renderDetails && <tr>
                            <td style={{ width: "32px" }} />
                            <td style={{ verticalAlign: "middle", paddingLeft: "7px" }} >
                                <Check
                                    verticalAlign="middle"
                                    checked={getIsAnySelected()}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        const checked = e.currentTarget.checked;
                                        toggleSelected(checked);
                                        onSelectAll(checked);
                                    }}
                                />
                                &nbsp;&nbsp;
                                <H4SemiBold IsInline style={{ verticalAlign: "middle" }}>{getSelectionText()}</H4SemiBold>
                            </td>
                        </tr>
                        }

                    </tbody>
                </table>
                }
                {table.getFilteredRowModel().rows.length === 0 && globalFilter
                    ? <NoSearchResults searchTerm={globalFilter} height={tableHeight ? `calc(${tableHeight} + 35px)` : "calc(100vh - 360px)"} />
                    : <div className="table-responsive" style={{ height: tableHeight ?? "calc(100vh - 360px)", overflowY: "auto" }}>
                        <table
                            className={`table-striped ${disableHoverEffect ? "" : "table-hover"} toggle-arrow-tiny ${isEmpty ? "ft-table" : "table"}`}
                            style={{ cursor: renderDetails ? "pointer" : "default" }}>
                            <thead className="thead-light sticky-table-header">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {renderDetails && <th key="-99" />}
                                        {onCheckboxClick && <th key="-98" />}
                                        {headerGroup.headers.map(header => (
                                            <th
                                                key={header.id}
                                                colSpan={header.colSpan}
                                                onClick={header.column.getToggleSortingHandler()}
                                                style={{
                                                    maxWidth: `${header.getSize()}px`, minWidth: `${header.getSize()}px`,
                                                    cursor: header.column.getCanSort() ? "pointer" : "default",
                                                    userSelect: "none",
                                                }}
                                            >
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {renderSortableIcon(header.column)}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map(row => (
                                    <React.Fragment key={`${row.id}-table-row-fragment`}>
                                        <tr
                                            className="test-detail-row accordion-toggle row-clickable"
                                            onClick={() => {
                                                row.toggleExpanded();
                                                onRowClick?.(row);
                                            }}>
                                            {renderDetails && <td style={{ width: "32px", verticalAlign: "middle" }}>
                                                <ChevronIcon isOpen={row.getIsExpanded()} onClick={row.getToggleExpandedHandler()} />
                                            </td>
                                            }
                                            {onCheckboxClick && <td style={{ cursor: "pointer", width: "32px", verticalAlign: "middle" }}>
                                                <Check
                                                    checked={row.getIsSelected()}
                                                    onClick={(e) => { e.stopPropagation(); }}
                                                    onChange={(e) => {
                                                        row.toggleSelected(e.currentTarget.checked);
                                                        onCheckboxClick(row.original, e.currentTarget.checked);
                                                    }} />
                                            </td>}
                                            {row.getVisibleCells().map(cell => (
                                                <td key={cell.id} style={{ verticalAlign: "middle" }}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                        </tr>
                                        {row.getIsExpanded() && (
                                            <tr>
                                                {/* +2 for checkbox and expander */}
                                                <td colSpan={row.getVisibleCells().length + 2}>
                                                    {renderDetails ? renderDetails(row.original) : null}
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>}
                <Clearfix />
                <SpacingContainer margin="24px 0px 0px 0px">
                    <BootstrapRow>
                        <ColMd4>
                            {csvColumns && <CSVExportButtonNew
                                fileName={csvFileName ?? "export.csv"}
                                csvColumns={csvColumns ?? []}
                                data={table.getFilteredRowModel().rows.map(row => row.original)}
                                className="btn btn-primary btn-sm"
                                style={{ marginLeft: "20px" }}
                                hideIfEmpty={true}
                                displaySkeleton={true}
                            />}
                        </ColMd4>
                        <ColMd4>
                            {table.getFilteredRowModel().rows.length > 0 && <TanstackPagination pagination={pagination} table={table} />}
                        </ColMd4>
                    </BootstrapRow>
                </SpacingContainer>
            </div>
        </TableWrapper>
    );

    function toggleSelected(isChecked: boolean) {
        table.getPreFilteredRowModel().rows.forEach((row) => {
            row.getIsSelected() !== isChecked && row.toggleSelected(isChecked);
        });
    }

    function getSelectionText() {
        const selectedCount = table.getSelectedRowModel().rows.length;
        const totalCount = table.getPreFilteredRowModel().rows.length;
        let result = "";
        if (selectedCount === 0) {
            result = `Select All ${totalCount} items`;
        } else if (selectedCount === totalCount) {
            result = `All ${totalCount} items selected`;
        } else {
            result = `Selected ${selectedCount} of ${totalCount} items`;
        }
        if (globalFilter) {
            result += " · ";
            result += `Showing ${table.getFilteredRowModel().rows.length} results for "${globalFilter}"`;
        }
        return result;
    }

    function getIsAnySelected() {
        const preFilteredRows = table.getPreFilteredRowModel().rows;
        return preFilteredRows.length > 0 && preFilteredRows.some((row) => row.getIsSelected());
    }

    function renderSortableIcon(column: any) {
        if (!column.getCanSort()) return null;

        if (column.getIsSorted() === false) {
            return <>&nbsp;<DefaultIcon className="fa fa-sort" /></>
        }

        if (column.getIsSorted() === "asc") {
            return <>&nbsp;<DefaultIcon className="fa fa-sort-asc" /></>
        }
        if (column.getIsSorted() === "desc") {
            return <>&nbsp;<DefaultIcon className="fa fa-sort-desc" /></>
        }
        return <></>;
    }
}