import { createColor } from 'components/Transactions/Transactions';
import s from './Statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
     return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stats__list}>
                 {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.stats}
              key={id}
              style={{ backgroundColor: createColor() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.array.isRequired,
};