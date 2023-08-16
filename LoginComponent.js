import React from "react";
import UserService from "./UserService";
import { Navigate } from 'react-router-dom';
import '../Login.css';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: null, msg: null, cu: false };
    }
    verifyUser = () => {
        if (!this.refs.txt1.value) {
            this.setState({ msg: "Please Enter a Username" })
        }
        else {
            this.setState({ msg: null, gth: false, cu: false });
            UserService.getOneUser(this.refs.txt1.value)
                .then(response => {
                    if (response.ok) {
                        alert("error");
                        throw new Error('An error occurred while fetching data.');
                    }
                    else {
                        this.setState({ user: response.data })
                        if (this.state.user.password == this.refs.txt2.value) {
                            this.setState({ msg: "Successfully Logged in", cu: true });

                        }
                        else {
                            this.setState({ msg: "Username or Password are incorrect" });
                        }
                    }

                    // Process the successful response here...
                })
                .catch(error => {
                    this.setState({ msg: "No such Username exists" });
                });

        }

    }
    clear = () => {
        this.refs.txt1.value = this.refs.txt2.value = null;
    }
    render() {
        const { msg } = this.state;
        const { cu } = this.state;
        if (cu) {
            return (
                <Navigate to="/home8235@" />
            )
        }
        return (
            <>
                {msg && <p>{msg}</p>}
                <div id="container">
                    Username<input type="text" ref="txt1" /><br /><br />
                    Password&nbsp;<input type="password" ref="txt2" /><br /><br />
                    <input type="button" value="Enter" onClick={this.verifyUser} id="btn1" />
                    <input type="button" value="Clear" onClick={this.clear} id="btn2" />
                </div>
            </>
        )
    }
}
export default LoginComponent;