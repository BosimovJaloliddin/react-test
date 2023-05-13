import React from "react";
import "./test.css"
import {student} from "./mock"

class Test extends React.Component {
    constructor(){
        super()
        this.state = {
            data: student,
            select: "id",
            name: "",
            status: "",
            active: null,
        }
    }
    render(){
        const onSort = ({target:{value, name}}) =>{
            let res = student.filter((v)=> `${v[this.state.select]}`.toLowerCase().includes(`${value.toLowerCase()}`))
            this.setState({data:res})
        }
        const onSelect = ({target: {value}}) =>{
            this.setState({select:value})
        }
        const onChange = ({target:{value, name}}) =>{
            this.setState({[name]: value})
        }
        const onAdd = () =>{
            let user = {
                id: Date.now(),
                name: this.state.name,
                status:this.state.status
            }
            let res = [...this.state.data, user]
            this.setState({data:res , name: "", status: ""})
        }
        const onDalete = ({id}) =>{
            let res = this.state.data.filter(v => v.id !== id)
            this.setState({data:res})
        }
        const onEdit = ({id, name, status},isSave) =>{
            if(isSave){
                let res = this.state.data.map(v => v.id === id 
                    ? {...v, name: this.state.name, status:this.state.status} 
                    : v
                )
                this.setState({
                    active:null,
                    data:res
                })
            }else{
                this.setState({
                    name,
                    status,
                    active:{id, name, status}
                })
            }
        }
        return(
            <>
                <select onChange={onSelect} name="select" id="select">
                    <option value="id">ID</option>
                    <option value="name">name</option>
                    <option value="status">status</option>
                </select>
                <input onChange={onSort} type="text" placeholder="sort" /><br /> <hr/>
                <input value={this.state.name} name="name" onChange={onChange} type="text" placeholder="name" />
                <input value={this.state.status} name="status" onChange={onChange} type="text" placeholder="status2" />
                <button onClick={onAdd}>Add</button>
                {
                    this.state.data.map(({id, name, status}) => {
                        return(
                            <div>
                                <h4>
                                    {
                                        this.state.data.length-1 
                                        ? <div>
                                            <span>{id}</span>-
                                            <span>
                                               {this.state.active?.id === id ? <input name="name" onChange={onChange} value={this.state.name} type={"text"}/> : name} 
                                            </span>-
                                            <span>
                                               {this.state.active?.id === id ? <input name="status" onChange={onChange} value={this.state.status} type={"text"}/> : status} 
                                            </span>
                                            <br />
                                            <button onClick={()=>onDalete({id})}>delete</button>
                                            <button onClick={()=>onEdit({id,name,status},this.state.active?.id)}>
                                                {
                                                    this.state.active?.id === id 
                                                        ? "save"
                                                        : "edit"
                                                }
                                            </button>
                                            <hr />
                                        </div> 
                                        : <h1>No data</h1>
                                    }
                                </h4>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
export default Test