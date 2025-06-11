import { ColumnDef } from "@tanstack/react-table";
import { App, mockApps } from "./Models/App";
import { CenterContentContainer } from "../common/Containers/BootstrapContainers";
import { ButtonIcon, DefaultIcon } from "../common/icons/Icons";
import { CSVColumn, HeaderButton, TanstackDropdownProps, TanstackTable } from "./TanstackTable";
import { PrimaryButtonSmall } from "../buttons/Buttons";
import { TextBodyMdRegular } from "../common/textformats/PageHeadings";
import PopOverModal from "../modal/PopOverModal";
import { Wrapper } from "../common/Containers";

const TanstackTableDemoPage: React.FC = () => {

    const tableId = "testTable";

    const columns: ColumnDef<App>[] = [
        {
            accessorKey: "Name",
            header: "Name",
            cell: info => info.getValue(),
        },
        {
            accessorKey: "Description",
            header: "Description",
            cell: info => info.getValue(),
        },
        {
            accessorKey: "Enabled",
            header: "Status",
            cell: info => renderStatus(info.getValue() as boolean),
            filterFn: (row, columnId, filterValue) => {
                if (filterValue === "") return true; // Show all
                return row.getValue(columnId) === (filterValue === "true");
            }
        },
        {
            accessorKey: "Icons",
            header: () => <CenterContentContainer>{("Icons")}</CenterContentContainer>,
            enableSorting: false,
            cell: () => <CenterContentContainer><DefaultIcon className="fa fa-address-book-o" fontsize="24px" /></CenterContentContainer>,
        },
        {
            id: "buttons",
            enableSorting: false,
            header: () => <CenterContentContainer>{("buttons")}</CenterContentContainer>,
            size: 60,
            cell: () => renderButtons(),
        },
        {
            id: "actions",
            enableSorting: false,
            header: () => <CenterContentContainer>{("actions")}</CenterContentContainer>,
            size: 60,
            cell: ({ row }) => <CenterContentContainer>
                <PopOverModal id={row.original.AppId}>
                    {getActions(row.original)}
                </PopOverModal>
            </CenterContentContainer>,
        },
    ];
    const headerButtons: HeaderButton[] = [{
        Text: ("Create App"),
        Type: "primary",
        onClick() { },
        RightIcon: "fa fa-plus-square-o",
        LeftIcon: "fa fa-plus-square-o",
    },
    {
        Text: ("Create App"),
        Type: "secondary",
        onClick() { },
        RightIcon: "fa fa-plus-square-o",
        LeftIcon: "fa fa-plus-square-o",
    }];

    const dropdownFilter: TanstackDropdownProps = {
        columnName: "Enabled",
        options: [
            {
                value: "true",
                label: ("Enabled"),
            },
            {
                value: "false",
                label: ("Disabled"),
            },
        ],
    }

    return (
        <Wrapper>
            <TanstackTable
                key={tableId}
                columns={columns}
                data={mockApps}
                pagesize={50}
                tableHeight='calc(100vh - 350px)'
                headerTitle={("List of your Apps")}
                csvFileName="apps.csv"
                csvColumns={getcsvColumns()}
                renderDetails={renderDetails}
                onCheckboxClick={onAppClicked}
                onSelectAll={() => { }}
                headerButtons={headerButtons}
                dropdownFilter={dropdownFilter}
            />
        </Wrapper>
    );


    function getActions(app: App) {
        const result = (
            <>
                {
                    <div className="option" onClick={() => { }}>
                        <span>{("Do some action")}</span>
                    </div>
                }
                {
                    app.Enabled &&
                    <div className="option" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <span>{("Disable App")}</span>
                    </div>
                }
                {
                    !app.Enabled &&
                    <div className="option" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <span>{("Enable App")}</span>
                    </div>
                }
            </>
        );

        console.log(result);
        return result;
    }

    function renderButtons() {
        return (
            <CenterContentContainer>
                <PrimaryButtonSmall><ButtonIcon className="fa fa-bars"></ButtonIcon></PrimaryButtonSmall>
                <PrimaryButtonSmall><ButtonIcon className="fa fa-user"></ButtonIcon></PrimaryButtonSmall>
                <PrimaryButtonSmall><ButtonIcon className="fa fa-plus-square-o"></ButtonIcon></PrimaryButtonSmall>
                <PrimaryButtonSmall><ButtonIcon className="fa fa-users"></ButtonIcon></PrimaryButtonSmall>
            </CenterContentContainer>
        );
    }

    function renderStatus(isEnabled: boolean) {
        if (isEnabled) {
            return <span style={{ color: "var(--green)" }}>
                {("Enabled")}
            </span>
        }
        return <span style={{ color: "var(--red)" }}>
            {("Disabled")}
        </span>
    }

    function renderDetails(item: App) {
        return <TextBodyMdRegular>{item.Description}</TextBodyMdRegular>
    }

    function onAppClicked(app: App, checked: boolean) {
        console.log("App clicked:", app, "Checked:", checked);
    }

    function getcsvColumns(): CSVColumn<App>[] {
        const row: CSVColumn<App>[] = [
            { header: ("AppId"), value: (item) => item.AppId },
            { header: ("Name"), value: (item) => item.Name },
            { header: ("Description"), value: (item) => item.Description },
            { header: ("Status"), value: (item) => item.Enabled ? ("Enabled") : ("Disabled") },
        ];
        return row;
    }
}

export default TanstackTableDemoPage;
