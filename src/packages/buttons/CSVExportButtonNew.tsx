import { observer } from "mobx-react-lite";
import React from "react";
import { CSVLink } from "react-csv";
import Skeleton from "react-loading-skeleton";
import { CSVColumn } from "../tables/tanstacktable/TanstackTable";

interface ICSVExportButtonProps<T> {
    fileName: string;
    csvColumns: CSVColumn<T>[];
    data: T[];
    style?: React.CSSProperties;
    className?: string;
    hideIfEmpty?: boolean;
    displaySkeleton?: boolean;
    isLoading?: boolean;
}

function CSVExportButtonNew<T>(props: ICSVExportButtonProps<T>) {
    // const appInsights = useAppInsightsContext();
    // const currentMarket = 'de';
    const separator = ',';
    // const trackCsvDownload = useTrackEvent(appInsights, "csvDownload", {
    //     fileName: props.fileName,
    //     currentMarket,
    // });
    const csvHeader = props.csvColumns.map((x) => x.header);
    const csvData = props.data.map((x) =>
        props.csvColumns.map((e) => e.value(x))
    );

    if (props.displaySkeleton && props.isLoading)
        return (
            <div style={props.style} className={props.className}>
                <Skeleton width={60} height={33} />
            </div>
        );

    return (
        !(props.hideIfEmpty && props.data.length === 0) && (
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <CSVLink
                    separator={separator}
                    style={props.style}
                    data={csvData}
                    headers={csvHeader}
                    filename={props.fileName}
                    className={`btn btn-primary btn-sm import ${props.data.length === 0 && "disabled"
                        }`}
                >
                    <i
                        className="fa fa-download"
                    />&nbsp;&nbsp;{("Export as CSV")}
                </CSVLink>
            </div>
        )
    );
}
export default observer(CSVExportButtonNew);
