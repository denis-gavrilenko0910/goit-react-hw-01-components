import s from './Profile.module.css';
import PropTypes from 'prop-types';
import defaultPic from './defaultPicture.jpg';

function Profile({ user }) {
  const { name, tag, avatar, location, stats } = user;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar || defaultPic} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.stats__list}>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.stats__list}>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{stats.views} </span>
        </li>
        <li className={s.stats__list}>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{stats.likes} </span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
