import React, { Component } from 'react'

export default class LVH_Form2 extends Component {
    constructor(props){
        super(props);
        this.state ={
            KhoaHoc:"ReactJs"
        }
    }
    // hàm xử lý sự kiện
    handleChange=(ev)=>{
        this.setState({
            KhoaHoc:ev.target.value
        })
    }
    handleSubmit=(event)=>{
    event.preventDefault(); 
    alert(this.state.KhoaHoc)
    }
  render() {
    return (
      <div>
        <form>
            <label>Khóa Học</label>
            <select value ={this.state.KhoaHoc}name="KhoaHoc" onChange={this.handleChange}>
                <option value=" HTML">HTML</option>
                <option value=" CSS">CSS</option>
                <option value=" JS">JS</option>
                <option value=" ReactJs">ReactJs</option>
            </select>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
