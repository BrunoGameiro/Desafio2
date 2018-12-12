import React, {Component} from "react";
import axios from 'axios';

class Detail extends Component {

    state = {
        noticia: []
    };

    componentDidMount() {
        axios.get('http://localhost/api/news/' + this.props.match.params.id)
            .then(response => {
                this.setState({noticia: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        if (this.state.noticia.length === 0) {
            return null;
        }
        else {
            return (

                <div>

                    <div className="col-md-8">
                        <img className="img-fluid" src={this.state.noticia.img_url} alt=""/>
                    </div>

                    <div className="col-md-4">
                        <h3 className="my-3">{this.state.noticia.title}</h3>
                        <p>{this.state.noticia.news}</p>
                    </div>
                </div>
            );
        }
    };
}

export default Detail;


