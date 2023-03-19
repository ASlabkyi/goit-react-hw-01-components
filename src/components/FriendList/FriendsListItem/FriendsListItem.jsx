import PropTypes from 'prop-types';
import { Item } from '../FriendList.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item isOnline={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
