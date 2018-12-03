import {Foo, Bar, FooBar} from 'components/states/advanced';

export const EVENTS = {
  NEXT: 'advanced/NEXT',
  BACK: 'advanced/BACK',
  BASIC: 'advanced/BASIC'
};

export const STATES = {
  FOO: 'advanced/FOO',
  BAR: 'advanced/BAR',
  FOOBAR: 'advanced/FOOBAR'
};

export const WORKFLOW = {
  name: 'advanced',
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
