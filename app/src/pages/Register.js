import React, { useState } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@material-ui/core";

export default class PersonList extends React.Component {
  state = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
    this.setState({ lastName: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(`http://localhost:3000/users`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label> */}
          {/* <button type="submit">Add</button> */}

          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: "100vh" }}
            spacing={5}
          >
            <Grid item style={{ border: "0.2px solid gray" }}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <label>
                  Name:
                  <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <label>
                  lastName:
                  <input
                    type="text"
                    lastName="lastName"
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  email
                  <input
                    type="text"
                    email="email"
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  password:
                  <input
                    type="text"
                    password="password"
                    onChange={this.handleChange}
                  />
                </label>

                {/* <TextField
                  variant="outlined"
                  label="First Name"
                  fullWidth
                  style={{ marginBottom: "2em" }}
                  onChange={this.handleChange}
                  // value={name}
                  // onChange={(event) => setName(event.target.value)}
                /> */}
                {/* <TextField
            type="email"
            variant="outlined"
            label="Last Name"
            fullWidth
            style={{ marginBottom: "2em" }}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            style={{ marginBottom: "2em" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            fullWidth
            style={{ marginBottom: "2em" }}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          /> */}

                <button type="submit">Add</button>
                {/* <Button
                  onClick={handleSubmit}
                  size="large"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Register
                </Button> */}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

// import React, { useState } from "react";
// import axios from "axios";
// import { Grid, TextField, Button } from "@material-ui/core";

// export default function App() {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [data, setData] = useState({});

//   const handleSubmit = () => {
//     data.push = {
//       name: name,
//       lastName: lastName,
//       email: email,
//       password: password,
//     };

//     axios
//       .post("http://localhost:3000/users", data)
//       .then((res) => {
//         setData(res.data);
//         setName("");
//         setLastName("");
//         setEmail("");
//         setPassword("");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <Grid
//       container
//       justify="center"
//       alignItems="center"
//       direction="column"
//       style={{ minHeight: "100vh" }}
//       spacing={5}
//     >
//       <Grid item style={{ border: "0.2px solid gray" }}>
//         <Grid container direction="column" alignItems="center" justify="center">
//           <TextField
//             variant="outlined"
//             label="First Name"
//             fullWidth
//             style={{ marginBottom: "2em" }}
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//           <TextField
//             type="email"
//             variant="outlined"
//             label="Last Name"
//             fullWidth
//             style={{ marginBottom: "2em" }}
//             value={lastName}
//             onChange={(event) => setLastName(event.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             label="Email"
//             fullWidth
//             style={{ marginBottom: "2em" }}
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           <TextField
//             type="password"
//             variant="outlined"
//             label="Password"
//             fullWidth
//             style={{ marginBottom: "2em" }}
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           <Button
//             onClick={handleSubmit}
//             size="large"
//             variant="contained"
//             color="primary"
//           >
//             Register
//           </Button>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
