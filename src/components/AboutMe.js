import React from 'react';
import axios from 'axios';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            cont1: null,
            cont2: null
        };
    }
    
    componentDidMount() {
        axios.get('/data/abouts.json'
        ).then((result) => {
            var res = result.data;
            this.setState({
                title: res[0].title,
                cont1: res[0].content1,
                cont2: res[0].content2
            });
        });
    }

    render() {
        const {title} = this.state;
        const {cont1} = this.state;
        const {cont2} = this.state;
        return(
            <div>
                <h2 id="about-h2">About Me</h2>
                <div id="about-section">
                    <img src="/about.png" alt="coding image" height="auto" width="100%" id="image-section"/>
                    <div id="right-section">
                        <p>{cont1}</p>
                        <h3>{title}</h3>
                        <p>{cont2}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;