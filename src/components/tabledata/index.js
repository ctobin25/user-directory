import React from 'react'

export default function TableData(props) {

    console.log('props', props)
    return (
        <div>

        <table className="table">


            <tbody>

                {/* Map Works */}
                {/* Moment works */}

                {props.employees.map((employee) => (
                    
                    < tr >
                        <th scope="row"></th>

                        <td>
                            <img
                                src={employee.picture.medium}
                                alt='employee'
                            />
                        </td>


                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>

                    </tr>

                ))}


            </tbody>
        </table>
    </div >
    )
}
