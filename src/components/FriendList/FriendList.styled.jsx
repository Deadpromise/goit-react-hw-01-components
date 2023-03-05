import styled from '@emotion/styled';

export const Friends = styled.ul`
    margin-left: 30px;
`;
export const FriendItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    &:not(:first-of-type) {
        margin-top: 10px;
    }
`;
export const Status = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    background-color: ${({ online }) => {
        if (online) {
            return "green";
        }
        return "red";
    }};
    border-radius: 50%;
`;
export const Avatar = styled.img`
    margin-left: 10px;
    margin-right: 10px;
`;
export const Name = styled.p`
 
`;