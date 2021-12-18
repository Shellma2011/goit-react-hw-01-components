import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  statFollowers,
  statViews,
  statLikes,
}) {
  return (
    <>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{'@' + tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.stats__item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{statFollowers}</span>
        </li>
        <li className={s.stats__item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{statViews}</span>
        </li>
        <li className={s.stats__item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{statLikes}</span>
        </li>
      </ul>
    </>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statFollowers: PropTypes.number.isRequired,
  statViews: PropTypes.number.isRequired,
  statLikes: PropTypes.number.isRequired,
};
