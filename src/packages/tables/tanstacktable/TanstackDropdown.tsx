import { Column } from "@tanstack/react-table";
import { ComboBox, Option } from "../../combobox/ComboBox";
import { useState } from "react";

export interface TanstackDropdownProps<T> {
    column: Column<T> | null | undefined;
    options: Array<Option>;
}

export function TanstackDropdown<T>({
    column,
    options,
}: TanstackDropdownProps<T>) {
    const [selectedValue, setSelected] = useState<string>(column?.getFilterValue() !== undefined ? (column.getFilterValue() as string) : "");
    return (
        <ComboBox
            options={options}
            selectedValue={selectedValue}
            onChange={(value: string) => {
                setSelected(value);
                column?.setFilterValue(value);
            }}
        />
    );
}