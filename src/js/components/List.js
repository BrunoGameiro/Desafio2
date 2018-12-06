import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteArticle} from "../actions/index";
import {fetchArticles} from "../actions/index";

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles()),
    }
};

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedList extends Component {

    constructor() {
        super();
        this.clickAction = this.clickAction.bind(this);
    }

    clickAction(article) {
        this.props.deleteArticle(article);
    }

    componentDidMount() {
        this.props.fetchArticles({type: 'FETCH_ARTICLES'});
    }

    render() {
        const articles = this.props.articles;
        return (
            <ul className="list-group list-group-flush">
                {articles.map((el, index) => (
                    <li className="list-group-item" key={index} onClick={() => this.clickAction(el)}>
                        {el.title}
                        <button className="btn btn-danger btn-lg">DELETE</button>
                    </li>
                ))
                }
            </ul>
        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;