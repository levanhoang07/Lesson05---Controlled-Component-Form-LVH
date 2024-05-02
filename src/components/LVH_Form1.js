import React, { Component } from 'react';

class LVH_Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "Lê Văn Hoàng"
        };
    }

    // Hàm xử lý sự kiện
    handleChange = (ev) => {
        // lấy giá trị thay đổi trên form 
        let ten = ev.target.name;
        let gtri = ev.target.value; 

        // cập nhật state
        this.setState({
            [ten]: gtri
        });
    }

    handleSubmit = (ev) => {
        ev.preventDefault(); 
        //lấy giá  trị mới trong state
        alert(this.state.studentName)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Họ và tên</label>
                        <input 
                            name='studentName' 
                            value={this.state.studentName} 
                            onChange={this.handleChange} 
                        /> 
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default LVH_Form1;
