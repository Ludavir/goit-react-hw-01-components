import Transaction from '../json/transactions.json';
import PropTypes from "prop-types";

const TransactionItem = () => {
    
    return (
        Transaction.map((element) => {
            return (
            <tr key={element.id}>
                <td>{element.type}</td>
                <td>{element.amount}</td>
                <td>{element.currency}</td>
            </tr>

            )
        })
    )
};

const TransactionHistory = () => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            <TransactionItem/>
            </tbody>
        </table>
    )
};

export default TransactionHistory