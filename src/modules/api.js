import {RSAA} from 'redux-api-middleware';

export const API_GET_REQUEST = 'api/get/REQUEST';
export const API_GET_SUCCESS = 'api/get/SUCCESS';
export const API_GET_FAILURE = 'api/get/FAILURE';
export const API_POST_REQUEST = 'api/post/REQUEST';
export const API_POST_SUCCESS = 'api/post/SUCCESS';
export const API_POST_FAILURE = 'api/post/FAILURE';
export const API_PUT_REQUEST = 'api/put/REQUEST';
export const API_PUT_SUCCESS = 'api/put/SUCCESS';
export const API_PUT_FAILURE = 'api/put/FAILURE';

const merge_endpoint = endpoint => 'http://localhost:8000'+endpoint;

export const get = ({
  endpoint='http://localhost:8000/',
  headers={}
}) => ({
  [RSAA]:{
    endpoint:merge_endpoint(endpoint),
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      ...headers
    },
    types:[
      API_GET_REQUEST,
      API_GET_SUCCESS,
      API_GET_FAILURE
    ]
  }
});

export const post = ({
  endpoint='http://localhost:8000/',
  body={},
  headers={}
}) => ({
  [RSAA]:{
    endpoint:merge_endpoint(endpoint),
    method: 'POST',
    body: body,
    headers:{
      'Content-Type': 'application/json',
      ...headers
    },
    types:[
      API_POST_REQUEST,
      API_POST_SUCCESS,
      API_POST_FAILURE
    ]
  }
});

export const put = ({
  endpoint='http://localhost:8000/',
  body={},
  headers={}
}) => ({
  [RSAA]:{
    endpoint: merge_endpoint(endpoint),
    method: 'PUT',
    body: body,
    headers:{
      'Content-Type': 'application/json',
      ...headers
    },
    types:[
      API_PUT_REQUEST,
      API_PUT_SUCCESS,
      API_PUT_FAILURE
    ]
  }
});
