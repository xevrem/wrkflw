
export const WORKFLOW_GET = 'workflow/GET';

export const getWorkflow = () => ({
  task: WORKFLOW_GET
});

const initialState = {
  workflow: 'foo'
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case WORKFLOW_GET:
      break;
    default:
      break;
  }
  return {...state};
};

export default reducer;
