import styled from "styled-components";

// Topbar.jsx
export const Div = styled.div`
    padding-inline-start: 80px;
    padding-inline-end: 80px;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #ffffff;
    border: 1px solid #ebebeb;
`;

export const Header = styled.header`
    height: 80px;
    width: 100%;
    z-index: 100;
    --header_brand-color: #ff385c;
    position: relative;
    margin-bottom: 1px;
    z-index: 10;
`;

export const Wrapper = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 1;
`;

export const LogoWrapper = styled.div`
    flex: 1 0 140px;
`;

export const SearchWrapper = styled.div`
    text-align: center;
    padding: 0 24px;
    flex: 0 1 auto;
    min-width: 348px;
`;

// Search.jsx

export const Search = styled.div`
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 40px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    transition: box-shadow 0.2s ease;
    align-items: center;
    color: #222222;
    display: inline-flex;
    max-width: 100%;
    vertical-align: middle;
`;

export const WhereBtn = styled.button`
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding-left: 8px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    background: transparent;
    cursor: pointer;
    padding: 0;
    text-align: inherit;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: -1px;
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

export const WhereSpan = styled.span`
    border: 0;
    padding: 0;

    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: clip;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const WhereText = styled.div`
    padding: 0 16px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    font-family: var(--font-medium);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    min-width: var(80px, 0);
`;

export const WhereWeek = styled.button`
    background: transparent;
    font-family: var(--font-medium);
    cursor: pointer;
    padding: 0;
    text-align: inherit;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: -1px;

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

export const WhereWeekText = styled.div`
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

export const AddGuest = styled.button`
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    font-family: var(--font-extralight);
    background: transparent;
    cursor: pointer;
    padding: 0;
    text-align: inherit;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: -1px;

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

export const AddGuestText = styled.div`
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

export const Icon = styled.div`
    background-color: #ff385c;
    margin: 7px 7px 7px 0;
    border-radius: 50%;
    padding: 10px;

    color: #ffffff;
    height: 12px;
    width: 12px;

    cursor: pointer;
`;

export const SpanBar = styled.span`
    background-color: #dddddd;

    flex: 0 0 1px;
    height: 24px;
    width: 1px;
`;

// TopbarRight.jsx
export const Wrappers = styled.div`
    flex: 1 0 140px;
`;

export const Nav = styled.nav`
    -webkit-box-pack: end !important;
    -webkit-box-align: center !important;
    position: relative !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    height: 80px !important;
`;

export const Link = styled.div`
    background: transparent;
    border: 0;
    cursor: pointer;
    margin: 0;
    text-align: inherit;
    padding: 12px;
    transition: color 250ms;
    appearance: none;
    /* color: inherit; */
    display: inline-block;
    /* font-family: inherit; */
    overflow: visible;
    text-decoration: none;
    user-select: auto;
    outline: none;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    position: relative;
    white-space: nowrap;
    z-index: 1;
`;

export const Text = styled.div`
    font-family: var(--font-medium);
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: #222222;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        color: #222222;
        text-decoration: none;
    }
`;

export const IconWrapper = styled.div`
    -webkit-box-align: center !important;
    align-items: center !important;
    display: flex !important;
    height: 18px !important;
    position: relative !important;
    z-index: 1 !important;
`;

export const IconBtn = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    margin: 0;
    margin-right: 8px;
    text-align: inherit;
    padding: 12px;
`;

// RoomType.jsx

export const RoomTypeContainer = styled.div`
    z-index: 10;
    position: sticky;
    text-align: center;
    top: 80px;
    height: 78px;
    background-color: #ffffff;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 30px;
    overflow: hidden;
`;

export const ThemeBtn = styled.button`
    width: 80px;
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
    background-color: unset;
    border: unset;
    padding: 4px 0 14px;
    margin: 12px 0 0;
    margin-right: 32px;
    transition: box-shadow 0.2s ease, color 0.2s ease;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 24px;
        height: 24px;
        margin-bottom: 8px;
    }
`;

export const ThemeName = styled.span`
    font-family: var(--font-medium);
    font-size: 15px;
`;

export const FilterSpan = styled.span`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 2px;
    display: grid;
    justify-items: center;
    grid-auto-flow: column;
    gap: 8px;
`;

export const FilterText = styled.span`
    transform: translateY(-1px);
    display: block;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    font-family: var(--font-regular);
`;

export const FilterDiv = styled.div`
    position: absolute;
    top: 50%;
    right: 80px;
    transform: translate(0%, -50%);
`;
export const FilterBtn = styled.button`
    border: 1px solid #dddddd;
    background-color: transparent;
    cursor: pointer;
    border-radius: 12px;
    margin: 0;
    padding: 7px 0;

    touch-action: manipulation;
    min-width: 48px;
    height: 48px;
    color: #222222;
`;

// RoomCard.jsx
export const RoomCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1278px;
    margin: auto;
`;

export const RoomCard = styled.div`
    width: 300px;
    height: 390px;
    padding: 8px;
    /* margin: ; */

    h3 {
        font-size: 15px;
        font-weight: bold;
    }
    p {
        color: #717171;
    }
`;

export const RoomsImage = styled.div`
    img {
        width: 100%;
        height: 286px;
        border-radius: 8px;
    }
    span {
        cursor: pointer;
        position: relative;
        bottom: 270px;
        left: 260px;
        transform: translate(50%, 50%);
        z-index: 1;
    }
`;
