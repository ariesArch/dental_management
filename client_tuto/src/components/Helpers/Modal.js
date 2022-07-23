import React from "react";

class Modal extends React.Component{
    render() {
        return(
            <div className="modal-overlay">
                <div className="modal-container">{this.props.children}</div>
            </div>
        )
    }
}
export default Modal;