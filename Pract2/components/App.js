/*En el componente App.js poseo el siguiente arreglo de ingresos brutos por compañia:
const netIncomes = [{brand: ´McDonalds´, income: 1291283}, {brand: Burger King, income: 1927361}, {brand: ‘KFC’, income: 1098463}];
En el componente App:
Escribir un componente Table.js que arme una tabla de HTML donde las columnas sean el nombre de la marca y el ingreso neto.
Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas. Utilizar obligatoriamente la función reduce para calcular el promedio.*/
const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

const totalIncome = netIncomes.reduce((total, item) => total + item.income, 0);
const averageIncome = totalIncome / netIncomes.length;

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

const pElement = `<p>Promedio de ingreso neto: ${averageIncome}</p>`;

document.getElementById('root').innerHTML = `<div>${Table()}${pElement}</div>`;