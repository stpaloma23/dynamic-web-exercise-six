import React from 'react';

function CreateUserForm({signUpUser}) {
    return (
        <form className="form-element" onSubmit={(e) => signUpUser(e)}>
            <label htmlFor="email">Email</label>
            <input type="text" name="userName"/>
            <input htmlForm=""/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateUserForm;