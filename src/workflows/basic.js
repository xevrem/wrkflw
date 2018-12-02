import {Foo, Bar, FooBar} from 'components/states';

export const EVENTS = {
  NEXT: 'basic/NEXT',
  BACK: 'basic/BACK'
};

export const STATES = {
  FOO:'basic/FOO',
  BAR:'basic/BAR',
  FOOBAR:'basic/FOOBAR'
};

export const WORKFLOW = {
  name: 'basic',
  states:{
    [STATES.FOO]:{
      id: STATES.FOO,
      component:Foo,
      transitions: {
        [EVENTS.NEXT]:STATES.BAR,
        [EVENTS.BACK]:STATES.FOOBAR
      }
    },
    [STATES.BAR]:{
      id: STATES.BAR,
      component:Bar,
      transitions:{
        [EVENTS.NEXT]:STATES.FOOBAR,
        [EVENTS.BACK]:STATES.FOO
      }
    },
    [STATES.FOOBAR]:{
      id: STATES.FOOBAR,
      component:FooBar,
      transitions:{
        [EVENTS.NEXT]:STATES.FOO,
        [EVENTS.BACK]:STATES.BAR
      }
    }
  },
  initial_state: STATES.FOO,
};
