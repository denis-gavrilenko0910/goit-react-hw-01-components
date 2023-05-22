import s from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <li key={id} className={s.item}>
            <span
              className={
                isOnline ? `${s.status__online}` : `${s.status__offline}`
              }
            ></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />

            <p className={s.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
