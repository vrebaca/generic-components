import React, { useEffect, useMemo, useRef } from "react";
import debounce from "lodash.debounce";
import SearchInput from "./SearchInput";

interface ISearchProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClearText?: () => void;
    placeholder: string;
    value?: string;
    debounceTime?: number;
    aria?: string;
    isclear?: boolean;
}


const Search: React.FC<ISearchProps> = (props) => {
    const debounceTime = props.debounceTime ?? 300;
const [internalValue, setInternalValue] = React.useState(props.value ?? "");
const inputRef = useRef<HTMLInputElement>(null);

// Keep internalValue in sync with props.value
useEffect(() => {
    setInternalValue(props.value ?? "");
}, [props.value]);

const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e);
    }, debounceTime),
    [props.onChange]
);

useEffect(() => debouncedOnChange.cancel(), []);

return (
    <SearchInput
        inputRef={inputRef}
        ariaLable={props.aria}
        value={internalValue}
        placeholder={props.placeholder}
        onChange={e => {
            setInternalValue(e.target.value);
            debouncedOnChange(e);
        }}
        onclearText={props.onClearText}
    />
);
};

export default Search;
