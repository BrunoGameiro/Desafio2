import React, {Component} from "react";
import axios from 'axios';

class Detail extends Component {

    state = {
        noticia: []
    };

    componentDidMount() {
        axios.get('http://localhost/api/news/'+this.props.match.params.id)
            .then(response => {
                this.setState({noticia: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        if(this.state.noticia.length === 0){
            return null;
        }
        else {
            return (
                <div>
                    <img src={this.state.noticia.img_url}/>
                    <h1> {this.state.noticia.title}</h1>
                    <p>{this.state.noticia.news}</p>
                </div>
            );
        }
    };
}

export default Detail;


