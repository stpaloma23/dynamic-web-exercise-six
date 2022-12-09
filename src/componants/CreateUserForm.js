import React from 'react';

function CreateUserForm({signUpUser}) {
    return (
        <form className="form-element" onSubmit={(e) => signUpUser(e)}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
            
            <label htmlFor="displayName">User Name</label>
            <input type="text" name="displayName"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password"/>
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateUserForm;