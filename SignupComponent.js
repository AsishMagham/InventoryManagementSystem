import React from "react";
import UserService from "./UserService";
import { Navigate } from 'react-router-dom';
import User from "./User";
import '../Signup.css';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: null, msg: null, cu: false };
    }
    verifyUser = () => {
        if (!this.refs.txt1.value) {
            this.setState({ msg: "Please Enter a Username" })
        }
        else if (!this.refs.txt2.value) {
            this.setState({ msg: "Please Enter a Password" })
        }
        else if (!(this.refs.txt2.value === this.refs.txt3.value)) {
            this.setState({ msg: "Passwords not matching" })
        }
        else {
            this.setState({ msg: null, gth: false, cu: false });
            UserService.getOneUser(this.refs.txt1.value).then(response => {
                if (response) {
                    this.setState({ msg: "Username already taken" })
                }
            })

                .catch(error => {
                    let e = new User(this.refs.txt1.value, this.refs.txt2.value)
                    UserService.insertOneUser(e)
                        .then(response => {
                            if (response.ok) {
                                alert("error");
                                throw new Error('An error occurred while fetching data.');
                            }
                            else {
                                this.setState({ user: response.data })
                                this.setState({ msg: "Successfully Created User", cu: true });
                            }

                            // Process the successful response here...
                        })
                        .catch(error => {
                            this.setState({ msg: "Username Not Allowed" });
                        });
                });
        }

    }
    clear = () => {
        this.refs.txt1.value = this.refs.txt2.value = this.refs.txt3.value = null;
    }
    render() {
        const { msg } = this.state;
        const { cu } = this.state;
        if (cu) {
            return (
                <Navigate to="/login" />
            )
        }
        return (
            <>
                {msg && <p>{msg}</p>}
                <div id="container">
                    Username<input type="text" ref="txt1" id="t1" /><br /><br />
                    Password&nbsp;<input type="password" ref="txt2" id="t2" /><br /><br />
                    Re-enter Password<input type="password" ref="txt3" id="t3" /><br /><br />
                    <input type="button" value="Enter" onClick={this.verifyUser} id="btn1" />
                    <input type="button" value="Clear" onClick={this.clear} id="btn2" />
                </div>
            </>
        )
    }
}
export default LoginComponent;