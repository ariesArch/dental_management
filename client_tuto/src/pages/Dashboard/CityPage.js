import axios from 'axios';
import React from 'react'
import FormModal from '../../components/Helpers/FormModal';
import DeleteModal from "../../components/Helpers/DeleteModal";

class CityPage extends React.Component{
    constructor() {
        super();
        this.state = {
            cities:[],
            open_form_dialog:false,
            name:'',
            _id:'',
            dialog_title:''
        }
        this.handleDialog = this.handleDialog.bind(this)
        this.onChangeInput = this.onChangeInput.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    fetchCities() {
        axios.get('http://localhost:8000/cities').then(response=>{
            console.log(response);
            this.setState({cities:response.data})
        }).catch(err=>{
            console.log(err)
        })
    }
    handleDialog() {
        this.setState({ dialog_title:'Create City'})
    }
    onChangeInput(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    handleEdit(city) {
        this.setState({ _id: city._id, name: city.name, dialog_title: `Edit City - ${city.name}` })
    }
    submitForm(e) {
        e.preventDefault();
        const { name } = { ...this.state }
        let payload = { name }
        if(this.state._id) {
            axios.put(`http://localhost:8000/cities/${this.state._id}`, payload).then(response => {
                payload = { _id: response.data.insertedId, ...payload }
                // this.setState(prev => ({ cities: [...this.state.cities, payload] }))
                // this.handleDialog()
            })
        }else{
            axios.post('http://localhost:8000/cities', payload).then(response => {
                payload = { _id: response.data.insertedId, ...payload }
                console.log(payload)
                this.setState(prev => ({ cities: [...this.state.cities, payload] }))
            })
        }
    }
    clearForm() {
        this.setState({name:''})
    }
    componentDidMount() {
        this.fetchCities();
    }
    render() {
        return (<div className='col-md-12'>
            <div className="d-flex justify-content-between mb-2">
                <h4 className="float-left">Dashboard</h4>
                <button onClick={this.handleDialog.bind(this)} className="btn btn-primary float-right" data-bs-target="#formModal" data-bs-toggle="modal">Create</button>
            </div>
            <table className='table table-info table-striped table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.cities.map((city, index) => (
                    <tr key={index}>
                        <td>{city.name}</td>
                        <td>
                            <button className="btn btn-sm btn-info" data-bs-target="#formModal" data-bs-toggle="modal" onClick={this.handleEdit.bind(this,city)}>Edit</button>
                            <button onClick={() => this.handleDelete(city)} className="btn btn-sm btn-danger" data-bs-target="#deleteModal" data-bs-toggle="modal">Delete</button>

                        </td>
                    </tr>
                ))
                    }
                </tbody>
            </table>
            <FormModal dialogTitle={this.state.dialog_title}>
                <form onSubmit={this.submitForm}>
                    <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <div className="input-group">
                            <span className="input-group-text" id="addon-name">@</span>
                            <input name='name' type="text" value={this.state.name} id="name" className="form-control" aria-describedby="addon-name" onChange={this.onChangeInput} />
                            {/* <span className="text-danger">{this.state.errors.name}</span> */}
                        </div>
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
export default CityPage;