import React from "react";
import styled from "styled-components";
import "./SearchForm.css";
import { DefaultIcon } from "../common/icons/Icons";

const Searchbar = styled.div`
margin-bottom:5px;
height:34px;
    &:hover,
    &:focus-within {
        border-color: #30add1;       
    }
`;

export interface ISearchInputSettings {
    ariaLable?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onclearText?: () => void;
    value?: string;
    defaultValue?: string;
    inputRef?: React.RefObject<HTMLInputElement | null> | undefined;
}

const SearchInput: React.FC<ISearchInputSettings> = (props) => {

    return (<Searchbar className="search-bar white-search-bar search-pmb-0">
        <div className="search-bar--list">
            <span className="fa fa-search search-ml-7" />
            <input
                style={{color: "var(--darkgrey)"}}
                ref={props.inputRef}
                aria-label={props.ariaLable}
                type="search"
                defaultValue={props.defaultValue}
                value={props.value}
                autoComplete="off"
                placeholder={props.placeholder}
                className={"text-filterbaritem-input textfield-input flex-grow"}
                onChange={props.onChange}
            />
                   {props.onclearText && <DefaultIcon
                onClick={props.onclearText}
                fontsize={"16px"}
                marginright={"10px"}
                cursor={"pointer"}
                hover
                className="fa fa-times-circle float-right" />}
        </div>
    </Searchbar>);
}

export default SearchInput;