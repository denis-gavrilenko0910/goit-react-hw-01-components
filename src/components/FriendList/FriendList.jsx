import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
