import React from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';

function SearchAdd() {
    return (
        <StSearch>
            <StWhereWeek>
                <StWhereWeekText>검색 시작하기</StWhereWeekText>
            </StWhereWeek>
            <StIcon>
                <SearchIcon />
            </StIcon>
        </StSearch>
    );
}

const StSearch = styled.div`
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 40px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    transition: box-shadow 0.2s ease;
    align-items: center;
    color: #222222;
    display: inline-flex;
    max-width: 100%;
    width: 300px;
    vertical-align: middle;
`;

const StWhereWeek = styled.button`
    background: transparent;
    cursor: pointer;
    padding-right: 120px;
    text-align: inherit;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: -1px;

    /* color: inherit;
  font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit; */

    appearance: none;
    overflow: visible;
    text-decoration: none;
    user-select: auto;
    outline: none;
    align-items: center;
    display: flex;
    flex: 0 1 auto;
    height: 48px;
    min-width: 0;
    position: relative;
    z-index: 1;
`;

const StWhereWeekText = styled.div`
    font-family: var(--font-semibold);
    padding: 0 16px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    min-width: var(80px, 0);
`;

const StIcon = styled.div`
    background-color: #ff385c;
    margin: 7px 7px 7px 0;
    border-radius: 50%;
    padding: 10px;

    color: #ffffff;
    height: 12px;
    width: 12px;

    cursor: pointer;
`;

export default SearchAdd;
