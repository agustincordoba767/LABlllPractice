import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

const Tabla = ({ incomes }) => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Marcas</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {incomes.map((brand, i) => (
                        <tr key={i}>
                            <td>{brand.brand}</td>
                            <td>{brand.income}</td>
                        </tr>
                    ))}
                    <tr>
                        <p>Promedio Neto ${incomes.reduce((total, brand) => total + brand.income, 0) / incomes.length}</p>
                    </tr>

                </tbody>
            </Table>

        </div>
    )
}

export default Tabla

Table.PropTypes = {
    incomes: PropTypes.object
}