import React, { useState } from 'react'
import './RewardsTable.css';
function RewardsTable({ transactions, month }) {

    const customers = Object.keys(transactions)
    let tableHeaders


    return (
        <div  >
            
                <h1>Month: {month}</h1>
            <div className='month'>
                {customers.map(customer => {
                    tableHeaders = Object.keys(transactions[customer].records[0]) // Set table Headers for each table 
                    return (
                        <div className='customers' key={customer}>
                            <h3>Customer Id: {customer}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        {tableHeaders.map(tableHeader => (<th key={tableHeader}>{tableHeader}</th>))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions[customer].records.map(record => {
                                        console.log(record)
                                        return (<tr key={record.transactionId}>
                                            {tableHeaders.map(tableHeader => {
                                                return (
                                                    <td>{record[tableHeader]}</td>
                                                )
                                            })}
                                        </tr>)
                                    })
                                    }
                                    <tr>
                                        <td colSpan="5">total Points:</td>
                                        <td>{transactions[customer].totalPoints}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default RewardsTable