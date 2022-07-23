import React from "react";

export default class LoginForm extends React.Component {
render() {
    const formStyle = {
        margin: '0px auto',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        maxWidth:'400px',
        padding:'30px',
        borderRadius: '20px',
        transition: 'box - shadow 1s',
        boxShadow:'0'
    }
    const inputStyle = {
        padding:'12px',
        margin:'2px 0',
        width: '90%',
        borderRadius: '20px',
    }
    const btnStyle = {
        padding:'12px',
        width:'40%',
        borderRadius: '30px',
        backgroundColor:'#fee',
        cursor:'pointer'
    }
    return (
        <div>
            <form style={formStyle}>
                <input type="text" style={inputStyle} />
                <input type="text" style={inputStyle} />
                <button style={btnStyle}>Login</button>
            </form>
        </div>
    )
}
}