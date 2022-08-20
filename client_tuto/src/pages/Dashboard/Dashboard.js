import React from "react";
import axios from 'axios'
import FormModal from "../../components/Helpers/FormModal";
import DeleteModal from "../../components/Helpers/DeleteModal";
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
            open_confirm_dialog:false,
            dialog_title:'Create User'
        }
        this.onChangeInput = this.onChangeInput.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.submitDelete = this.submitDelete.bind(this)
    }
    fetchUser() {
        axios.get('http://localhost:8000/users').then((response)=> {
            this.setState({users:response.data})
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleConfirmDialog() {
        this.setState({ open_confirm_dialog: !this.state.open_confirm_dialog })
    }
    onChangeInput(e) {
        this.setState(()=> {
            let input_name = e.target.name;
            return {
                [input_name] : e.target.value
            }
        });
        // this.setState({ [e.target.name]:e.target.value});
    }
    clearForm() {
        this.setState({ name: '', email: '', phone: '', city: '', township: '', _id: '' })
    }
    submitForm(evt) {
        evt.preventDefault();
        const payload = (({name,email,phone,city,township})=>({name,email,phone,city,township}))(this.state)
        if(this.state._id) {
            axios.put(`http://localhost:8000/users/${this.state._id}`, payload).then((response) => {
                let foundIndex = this.state.users.findIndex(user => user._id === this.state._id)
                payload._id = this.state._id
                this.state.users.splice(foundIndex,1,payload);
            }).catch(err => {
                console.log(err)
            })
            this.clearForm()
        }else{
            axios.post('http://localhost:8000/users', payload).then((response) => {
                payload._id = response.data.insertedId
                this.setState(prev => ({ users: [...prev.users, payload] }))
            }).catch(err => {
                console.log(err)
            })
            this.clearForm()
        }
    }
    handleEdit(obj) {
        this.setState({ name: obj.name, email: obj.email, phone: obj.phone, city: obj.city, township: obj.township, _id: obj._id, dialog_title: `Edit User - ${obj.name}` })
    } 
    handleDelete(obj) {
        this.setState({_id:obj._id,name:obj.name,dialog_title:'Delete User'})
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
    handleDialog() {
        this.setState({dialog_title:'Create User'})
    }
    componentDidMount() {
        this.fetchUser();
    }
    render() {
        return(
        <div className="col-md-12">
            <div className="d-flex justify-content-between mb-2">
                    <h4 className="float-left">Dashboard</h4>
                    <button onClick={this.handleDialog.bind(this)} className="btn btn-primary float-right" data-bs-target="#formModal" data-bs-toggle="modal">Create</button>
            </div>
            <table className="table table-info table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                        <th scope="col">Township</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user,index)=>
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.city}</td>
                                <td>{user.township}</td>
                                <td>
                                    <button onClick={()=>this.handleEdit(user)} className="btn btn-sm btn-info" data-bs-target="#formModal" data-bs-toggle="modal">Edit</button>
                                    <button onClick={() => this.handleDelete(user)} className="btn btn-sm btn-danger" data-bs-target="#deleteModal" data-bs-toggle="modal">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
                <FormModal dialogTitle={this.state.dialog_title}>
                <form onSubmit={this.submitForm.bind(this)}>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <div className="input-group">
                                <span className="input-group-text" id="addon-name">@</span>
                                    <input name="name" type="text" value={this.state.name} id="name" className="form-control" aria-describedby="addon-name" onChange={this.onChangeInput} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className="input-group">
                                    <input name="email" type="email" value={this.state.email} id="email" className="form-control" aria-describedby="addon-email" onChange={this.onChangeInput} />
                                <span id="addon-email" className="input-group-text">@gmail.com</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <div className="input-group">
                                <span className="input-group-text">+95</span>
                                    <input name="phone" type="number" value={this.state.phone} id="phone" className="form-control" onChange={this.onChangeInput} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                                <input name="city" type="text" value={this.state.city} id="city" className="form-control" onChange={this.onChangeInput} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="township" className="form-label">Township</label>
                                <input name="township" type="text" value={this.state.township} id="township" className="form-control" onChange={this.onChangeInput} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                    </div>
                </form>
                </FormModal>
                <DeleteModal dialogTitle={this.state.dialog_title} >
                    <p className="text-danger text-center">Are you soure to delete User - {this.state.name}?</p>
                    <div className="modal-footer">
                        <button className="btn btn-info" onClick={this.submitDelete} data-bs-dismiss="modal">Confirm</button>

                    </div>
                </DeleteModal>       
        </div>)
    }
}
export default Dashboard;