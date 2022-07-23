import React from "react";
import axios from 'axios'
import Modal from "../../components/Helpers/Modal";
class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            open_form_dialog:false,
            name:'',
            email:'',
            city:'',
            township:'',
            phone:'',
            _id:'',
            open_confirm_dialog:false
        }
    }
    fetchUser() {
        axios.get('http://localhost:8000/users').then((response)=> {
            this.setState({users:response.data})
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleFormDialog() {
        this.setState({open_form_dialog:!this.state.open_form_dialog})
    }
    handleConfirmDialog() {
        this.setState({ open_confirm_dialog: !this.state.open_confirm_dialog })
    }
    handleName(e) {
        this.setState({name:e.target.value});
    }
    handleEmail(e) {
        this.setState({ email: e.target.value });
    }
    handlePhone(e) {
        this.setState({ phone: e.target.value });
    }
    handleCity(e) {
        this.setState({ city: e.target.value });
    }
    handleTownship(e) {
        this.setState({ township: e.target.value });
    }
    clearForm() {
        this.setState({ name: '' })
        this.setState({ email: '' })
        this.setState({ phone: '' })
        this.setState({ city: '' })
        this.setState({ township: '' })
        this.setState({ _id: '' })
        this.handleFormDialog()
    }
    submitForm(evt) {
        evt.preventDefault();
        // let payload = Object.assign({}, { name: this.state.name })
        // payload = Object.assign(payload,{email:this.state.email})
        const payload = (({name,email,phone,city,township})=>({name,email,phone,city,township}))(this.state)
        if(this.state._id) {
            console.log(payload)
            axios.post(`http://localhost:8000/users/${this.state._id}`, payload).then((response) => {
                let foundIndex = this.state.users.findIndex(user => user._id === this.state._id)
                payload._id = this.state._id
                this.state.users.splice(foundIndex,1,payload);
                console.log(this.state.users)
                this.clearForm()
            }).catch(err => {
                console.log(err)
            })
        }else{
            axios.post('http://localhost:8000/users/add', payload).then((response) => {
                payload._id = response.data.insertedId
                this.clearForm()
                this.setState(prev => ({ users: [...prev.users, payload] }))

            }).catch(err => {
                console.log(err)
            })
        }
    }
    handleEdit(obj) {
        this.setState({ name: obj.name })
        this.setState({ email: obj.email })
        this.setState({ phone: obj.phone })
        this.setState({ city: obj.city })
        this.setState({ township: obj.township })
        this.setState({ _id: obj._id })
        this.handleFormDialog()
    } 
    handleDelete(obj) {
        this.setState({_id:obj._id})
        console.log(obj)
        this.handleConfirmDialog()
    }
    submitDelete() {
        axios.delete(`http://localhost:8000/users/${this.state._id}`).then((response)=> {
            const foundIndex = this.state.users.findIndex(usr=>usr._id === this.state._id)
            console.log(foundIndex)
            this.state.users.splice(foundIndex,1)
            this.handleConfirmDialog()
        }).catch(err=>{
            console.log(err)
        })
    }
    componentDidMount() {
        this.fetchUser();
    }
    render() {
        return(
        <div className="page-container">
            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                    <h3>Dashboard Page</h3>
                    <button onClick={this.handleFormDialog.bind(this)}>Create</button>
            </div>
            <table border="2" width="90%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Township</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user,index)=>
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.city}</td>
                                <td>{user.township}</td>
                                <td>
                                    <button onClick={this.handleEdit.bind(this,user)}>Edit</button>
                                    <button onClick={this.handleDelete.bind(this,user)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                this.state.open_form_dialog && (
                        <Modal>
                            <form onSubmit={this.submitForm.bind(this)}>
                                {this.state._id}
                                <input required placeholder="your name" value={this.state.name} type="text" onChange={this.handleName.bind(this)}/>
                                <input required placeholder="@gmail.com" value={this.state.email} type="email" onChange={this.handleEmail.bind(this)}/>
                                <input required placeholder="phone" value={this.state.phone} type="text" onChange={this.handlePhone.bind(this)}/>
                                <input required placeholder="your city" value={this.state.city} type="text" onChange={this.handleCity.bind(this)}/>
                                <input required placeholder="your township" value={this.state.township} type="text" onChange={this.handleTownship.bind(this)}/>
                                <div className="btn-container">
                                    <button type="button" onClick={this.clearForm.bind(this)}>Cancel</button>
                                    <button>Save</button>
                                </div>
                            </form>
                        </Modal>
                )
            }
            {
                    this.state.open_confirm_dialog&&(
                        <Modal>
                            <div className="btn-container">
                                Are you sure to delete!
                                <button onClick={this.submitDelete.bind(this)}>Confirm</button>
                            </div>
                        </Modal>
                    )
            }
        </div>)
    }
}
export default Dashboard;