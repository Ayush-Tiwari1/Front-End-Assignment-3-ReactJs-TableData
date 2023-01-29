import React,{Component} from 'react'
import '../App.css'
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(
            (users) => {
                this.setState({ users: users });
            },
            (error) => {
                alert(error);
            }
        )
    }
 
    render() {
        return (
            <div className='main-cont'>
        <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
 
            <tbody>
                {this.state.users.map(user =>
                    <tr>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>);
    }
}

export default TableComponent;