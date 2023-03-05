import PropTypes from 'prop-types';
import { StatSect, StatTitle, StatList } from './Statistics.styled';
import { StatElem } from './StatElem/StatElem';

export const Statistics = ({ title, stats }) => {
    return (
        <StatSect>
            {title && <StatTitle>{title}</StatTitle>}
            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return <StatElem key={id} label={label} percentage={percentage}></StatElem> 
                })}
            </StatList>    
        </StatSect>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}