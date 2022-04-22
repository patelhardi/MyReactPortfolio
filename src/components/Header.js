import React from 'react';
import axios from "axios";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
        };
    }
    
    componentDidMount() {
        axios.get('/data/headers.json'
        ).then((result) => {
            var res = result.data;
            var nameList = [];
            for(var i=0; i<res.length; i++){
                var names = res[i].title;
                nameList.push(names);
            }
            this.setState({
                name: nameList.map(function(n){
                    return <li>{n}</li>
                })
            });
        });
    }

    render() {
        const {name} = this.state;
        return(
            <header id="header">
                <h2 id="site-name">HP</h2>
                <div id="nav-menu">
                    <ul>
                        <li>{name}</li>
                    </ul>
                </div>
            </header>     
        );
    }
}
export default Header;