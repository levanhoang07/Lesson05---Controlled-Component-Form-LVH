import React, { Component } from 'react';

class LVH_Form3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: 'Lê Hoàng',
            age: 20,
            course: 'ReactJs' 
        };
    }

    handleChange = (ev) => {
        const name = ev.target.name;
        const val = ev.target.value;
        this.setState({
            [name]: val 
        });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        alert(JSON.stringify(this.state)); 
    }

    render() {
        return (
            <div>
                <form name="lvh-form" onSubmit={this.handleSubmit}> 
                    <div>
                        <label>Họ và tên</label>
                        <input
                            name='studentName'
                            value={this.state.studentName}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Tuổi</label>
                        <input
                            name='age'
                            value={this.state.age}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Khóa Học</label>
                        <select
                            name="course" 
                            value={this.state.course}
                            onChange={this.handleChange}>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JS">JS</option>
                            <option value="ReactJs">ReactJs</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button> 
                </form>
            </div>
        );
    }
}

export default LVH_Form3;
