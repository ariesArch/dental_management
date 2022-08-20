import React from "react";

class FormModal extends React.Component{
    render() {
        return(
            <div className="modal fade" id="formModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.dialogTitle}</h4>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
export default FormModal;