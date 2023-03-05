import PropTypes from 'prop-types';
import { Friends, FriendItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return <FriendItem key={id}>
                    <Status online={isOnline}></Status>
                    <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
                    <Name>{name}</Name>
                </FriendItem>
            })}
        </Friends>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}
