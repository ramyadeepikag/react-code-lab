import React from 'react'

export default function Friends(props) {
    return(
        <table>
            <thead>
                <tr>
<th>Name</th>
<th>Id</th>
                </tr>
            </thead>
            <tbody>
{
    props.data.map(row => (
        <tr>
            <td>{row.rank}</td>
        </tr>
    ))
}
       
    
       }     </tbody>
        </table>
    )
}