import './styles.css';
const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

const Table = () => {
  const tableRows = netIncomes.map((item, index) => (
    `<tr key=${index}>
       <td>${item.brand}</td>
       <td>${item.income}</td>
     </tr>`
  )).join('');

  return `
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
};

export default Table;