import PropTypes from 'prop-types';
import Statistics from './Statistics';

export default function StatisticsList({ items }) {
    return (
        <ul class="stat-list">
            {items.map(item => (
                <li class="item" key={item.id}>
                    <Statistics
                        label={item.label}
                        percentage={item.percentage}
                    />
                </li>
            ))}
        </ul>
    );
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}
