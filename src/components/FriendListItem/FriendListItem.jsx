import s from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      <span
        className={isOnline ? `${s.status__online}` : `${s.status__offline}`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />

      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
