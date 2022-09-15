import React from 'react'
import UserinputHook from './UserinputHook'
export const SimpleCustomHook = () => {
    const { value1: email, valueChangeHandler: emailchangehandler } = UserinputHook()
    const { value1: password, valueChangeHandler: passwordchangehandler } = UserinputHook()
    const { value1: gender, valueChangeHandler: genderchangehandler } = UserinputHook()
    const { value1: menu, valueChangeHandler: menuchangehandler } = UserinputHook()

    const submit = () => {

        alert(`Email: ${email} Password: ${password} Gender : ${gender} Menu:${menu}`)
    }
    return (
        <div className="App">

            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"

                        onChange={emailchangehandler}
                    />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    {email}
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={passwordchangehandler}
                    />
                    {password}
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="Male" onChange={genderchangehandler} />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="Female" onChange={genderchangehandler} />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div className = "form-group">
                <select class="form-select" aria-label="Default select example" onChange = {menuchangehandler}>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
