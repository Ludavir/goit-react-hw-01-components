import Transaction from '../json/transactions.json';
import { TableList, TableHead, TableBody} from './transactionStyles';

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
                {
                    Transaction.map((element) => {
                        return (
                        <tr key={element.id}>
                            <td>{element.type}</td>
                            <td>{element.amount}</td>
                            <td>{element.currency}</td>
                        </tr>
                        )
                    })
                }
            </TableBody>
        </TableList>
    )
};

export default TransactionHistory