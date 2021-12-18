import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';

export default function StatisticsList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
