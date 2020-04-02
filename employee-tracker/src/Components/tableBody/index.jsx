import React from 'react'



export default (props) => {
    return (
        <>
            {props.users.map(user => (
                <tr>

                    <td><img src={user.picture.thumbnail} alt=""/></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            ))
            }
        </>
    )

}