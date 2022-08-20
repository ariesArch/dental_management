import { Component } from 'react'

class Sidebar extends Component {
    render() {
        return (
            <div className="col-auto px-0">
                <div id="sidebar" className="collapse collapse-horizontal show border-end">
                    <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                            <i className="bi bi-bootstrap"></i> <span>Item</span> 
                        </a>
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                            <i className="bi bi-film"></i> <span>Item</span>
                        </a>
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                            <i className="bi bi-heart"></i> <span>Item</span>
                        </a>
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar">
                            <i className="bi bi-bricks"></i> <span>Item</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar;