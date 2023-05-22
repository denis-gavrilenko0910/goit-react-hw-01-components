import s from './TransactionHistory.module.css';
function TransactionHistory({ items }) {
  // console.log(transactions);
  return (
    <div>
      <table className={s.transactions__history}>
        <thead className={s.table__head}>
          <tr className={s.table__column}>
            <th>Type </th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={s.table__row}>
              <td className={s.table__cells}>{type}</td>
              <td className={s.table__cells}>{amount}</td>
              <td className={s.table__cells}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionHistory;
