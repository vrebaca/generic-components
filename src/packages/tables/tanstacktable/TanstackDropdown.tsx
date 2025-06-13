import { Column } from "@tanstack/react-table";

export interface TanstackDropdownProps<T> {
    column: Column<T> | null | undefined;
    options: Array<{ value: string; label: string }>;
    allLabel?: string;
}

export function TanstackDropdown<T>({
    column,
    options,
    allLabel = "All",
}: TanstackDropdownProps<T>) {
    var selectedValue = null;
    if (column?.getFilterValue() !== undefined) {
        selectedValue = column.getFilterValue() as string;
    }
    return (
        <select
            className="form-control"
            value={selectedValue ?? ""}
            onChange={(e) => {
                column?.setFilterValue(e.target.value);
            }}
        >
            <option value="">{allLabel}</option>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}