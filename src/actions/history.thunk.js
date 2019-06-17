/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as actions from './history.actions';
import axiosInstance from '../core/axios';

// var dataresponse = 0;

export const getHistoryList = () => {
    // eslint-disable-next-line no-console
    console.log('HistoryList thunk');
    return async (dispatch) => {
        try {
            dispatch(actions.historyDataRequest({}));
            axiosInstance.get('/api/history')
                .then((response) => {
                    dispatch(actions.historyDataSuccess({ response }));
                    console.log(response);
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                });
        } catch (err) {
            dispatch(actions.historyDataFailure({ err }));
        }
    };
};
