import Transaction from '../json/transactions.json';
import { TableList, TableHead, TableBody} from './transactionStyles';

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
        <TableList className="transaction-history">
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>
            <TableBody>
                <TransactionItem/>
            </TableBody>
        </TableList>
    )
};

export default TransactionHistory