import styled from 'styled-components';

export const Header = styled.header`
    height: 80px;
    width: 100%;
    z-index: 100;
    --header_brand-color: #ff385c;
    position: relative;
    /* max-width: 1760px; */
    border-bottom: 1px solid #ebebeb;
`;

export const Wrapper = styled.div`
    /* padding-inline-start: 80px; */
    padding-inline-end: 80px;
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
