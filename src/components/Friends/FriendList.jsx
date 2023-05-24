import s from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {

  return (
    <div className={s.friends}>
      <ul className={s.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={s.friends__item} key={id}>
            <span className={`${s.friends__status} ${s[isOnline]}`}>
              {isOnline}
            </span>
            <img className={s.avatar} src={avatar} alt={name} />
            <p className={s.friends__name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};