import React from "react";
import axios from "axios";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    
    componentDidMount() {
        axios.get('/data/projects.json'
        ).then((result) => {
            var res = result.data;
            var projectList = [];
            for(var i=0; i<res.length; i++){
                var d = res[i];
                projectList.push(d);
            }
            this.setState({
                data: projectList.map(function(t) {
                    return <div id="project-section"><div><img src="/project.jpg" alt ="project image" id="project-image"/></div><div id="right"><h3>{t.title}</h3><p>{t.content}</p><p><label>Technology Used: </label>{t.technology}</p></div><hr/></div>
                })
            });
        });
    }

    render() {
        const {data} = this.state;
        return(
            <div>
                <h2 id="project-h2">Projects</h2>
                <div>
                    <div>
                        <img />
                    </div>
                    <div>
                        {data}
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;