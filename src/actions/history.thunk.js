/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import * as actions from './history.actions';
import axiosInstance from '../core/axios';

// var dataresponse = 0;
// запрос на получение всех элементов истории
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

// запрос на получение одного элемента истории
export const getHistoryItem = (id) => {
    // eslint-disable-next-line no-console
    console.log('HistoryItem thunk');
    return async (dispatch) => {
        try {
            dispatch(actions.historyDataItemRequest({}));
            axiosInstance.get(`/api/history/${id}`)
                .then((response) => {
                    dispatch(actions.historyDataItemSuccess({ response }));
                    console.log(response);
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                });
        } catch (err) {
            dispatch(actions.historyDataItemFailure({ err }));
        }
    };
};
