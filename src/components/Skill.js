import React from "react";
import axios from "axios";

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        };
    }
    
    componentDidMount() {
        axios.get('/data/skills.json'
        ).then((result) => {
            var res = result.data;
            var titleList = [];
            for(var i=0; i<res.length; i++){
                var titles = res[i].title;
                titleList.push(titles);
            }
            this.setState({
                title: titleList.map(function(t){
                    return <li>{t}</li>
                })
            });
        });
    }

    render() {
        const {title} = this.state;
        return(
            <div>
                <h2 id="skill-h2">Skills</h2>
                <div id="skill-section">
                    <ul>
                        {title}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Skill;