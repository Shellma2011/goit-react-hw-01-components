import PropTypes from 'prop-types';

export default function Statistics({
    label,
    percentage}) {
  
  return   <ul class="stat-list">
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  </ul>
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}