
const test_workflow = {
  name:'',
  states:{
    1:{ id: 1, component:'', transitions:[1]},
    2:{ id: 2, component:'', transitions:[2]}
  },
  transitions:{
    1:{ from: 1, to: 2, on: 'click'},
    2:{ from: 2, to: 1, on: 'click'}
  }
};

const state_schema = {
  id: 'number',
  component: 'element',
  transitions:[]
};

const component_schema = {
  id: 'number',
  from: 'state',
  to: 'state',
  on: 'event'
};

const is_in = (array, event){
  return this.events.indexOf(event) >= 0
}

class WorkflowManager{
  constructor(){
    this.workflow = null;
    this.events = [];
  }

  load_workflow(){
    this.workflow = test_workflow;
  }

  register_event(event){
    this.events.push(event);
  }

}

export default WorkflowManager;
