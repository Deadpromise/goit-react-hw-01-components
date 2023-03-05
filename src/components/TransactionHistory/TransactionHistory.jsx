import PropTypes, { arrayOf } from 'prop-types';
import { HistoryTable, TableHead, HeadRow, HeadDate, TableBody, BodyRow, BodyDate } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <HistoryTable>
            <TableHead>
                <HeadRow>
                    <HeadDate>Type</HeadDate>
                    <HeadDate>Amount</HeadDate>
                    <HeadDate>Currency</HeadDate>
                </HeadRow> 
            </TableHead>
            <TableBody>
                {items.map(({ id, type, amount, currency }) => {
                    const newType = type.charAt(0).toUpperCase() + type.slice(1);
                    return <BodyRow key={id}>
                        <BodyDate>{newType}</BodyDate>
                        <BodyDate>{amount}</BodyDate>
                        <BodyDate>{currency}</BodyDate>
                    </BodyRow>
                })}
            </TableBody>
        </HistoryTable>
    )
};

TransactionHistory.propTypes = {
    items: arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};