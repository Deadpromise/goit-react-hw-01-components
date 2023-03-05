import PropTypes from 'prop-types';
import { StatItem, StatLabel, StatPercent } from "./StatElem.styled"


export const StatElem = ({ label, percentage}) => {
    return (
        <StatItem>
            <StatLabel>{ label }</StatLabel>
            <StatPercent>{ percentage }%</StatPercent>
        </StatItem>
    )
}

StatElem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}