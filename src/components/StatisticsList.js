// import PropTypes from 'prop-types';
import Statistics from './Statistics';

export default function StatisticsList({ items }) {
    return (
        <ul class="stat-list">
            {items.map(item => (
                <li key={item.id}>
                    <Statistics
                        label={item.label}
                        percentage={item.percentage}
                    />
                </li>
            ))}
        </ul>
    );
}

// ProfileList.propTypes = {
//     avatar: PropTypes.string,
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     statFollowers: PropTypes.number.isRequired,
//     statViews: PropTypes.number.isRequired,
//     statLikes: PropTypes.number.isRequired,
// }