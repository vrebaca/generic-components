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
    const debouncedEventHandler = useMemo(
        () => debounce(props.onChange, debounceTime),
        [props.onChange]
    );

    const inputRef = useRef<HTMLInputElement>(null);
    if(inputRef.current) {
        props.isclear && (inputRef.current.value = "");
    }

    useEffect(() => debouncedEventHandler.cancel(), []);

    return (
        <SearchInput inputRef={inputRef} ariaLable={props.aria}
            defaultValue={props.value}
            placeholder={props.placeholder}         
            onChange={debouncedEventHandler}
            onclearText={props.onClearText}>
        </SearchInput>
    );
};

export default Search;
