import styled from '@emotion/styled';

export const HistoryTable = styled.table`
    margin-left: 30px;
    border: 1px solid black;
    border-bottom-width: 0px;
    border-spacing: 0;
    text-align: center;
`;
export const TableHead = styled.thead`
    font-size: 30px;
    
`;
export const HeadRow = styled.tr`

`;
export const HeadDate = styled.th`
    border: 1px solid black;
    padding: 5px 10px;
    border-top-width: 0;
    border-left-width: 0;
    &:last-child {
        border-right-width: 0;  
    }
    background-color: lightblue;
`;
export const TableBody = styled.tbody`
    font-size: 20px;
`;
export const BodyRow = styled.tr`
    &:last-child {
        border-bottom-width: 0;
    }
    &:nth-of-type(even) {
        background-color: lightgray;
    }
`;
export const BodyDate = styled.td`
    border: 1px solid black;
    padding: 5px 10px;
    border-top-width: 0;
    border-left-width: 0;
    &:last-child {
        border-right-width: 0;  
    }
`;