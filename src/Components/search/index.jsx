import React from 'react';

const Search = (props) => {
    return (
        <div className="input-group mb-3">

            <input type="text" className="form-control" placeholder="Name" value={props.term} onChange={e=>props.setter(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    )
}

export default Search