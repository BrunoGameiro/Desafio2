import {ADD_ARTICLE} from "../constants/action-types";
import {DELETE_ARTICLE} from "../constants/action-types";
import {ARTICLES_FETCH_SUCCEEDED } from "../constants/action-types";


const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            console.log('add', action.payload);
            return { ...state, articles: [...state.articles, action.payload] };
        case DELETE_ARTICLE:
            console.log('add', action.payload);
            return { ...state, articles: [...state.articles.filter((x) => x !== action.payload)] };
        case ARTICLES_FETCH_SUCCEEDED:
            console.log('success: ', action.payload);
            return { ...state, articles: [...state.articles, ...action.payload.data] };
        default:
            return state;
    }
};

export default rootReducer;