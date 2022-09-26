import React from 'react';

export default function InputField({ labelText, id_name, typeInput }) {
    return (
        <div>
            <label htmlFor={id_name} className="form-label text-black">{labelText}</label>
            <input type={typeInput} className="form-control" id={id_name} />
        </div>
    );
}
