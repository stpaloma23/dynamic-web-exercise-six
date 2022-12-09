import React from 'react';

function LoginForm({loginUser}) {
    return (
        <form className='form-element' onSubmit={(e) =>loginUser(e)}>
            <label for="email">User Name</label>
            <input type="text" name="email"/>

            <label for="password">Password</label>
            <input type="password" name="password"/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;