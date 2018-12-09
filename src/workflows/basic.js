import {Foo, Bar, FooBar} from 'components/states/basic';

export const EVENTS = {
  NEXT: 'events/basic/NEXT',
  BACK: 'events/basic/BACK'
};

export const STATES = {
  FOO:'states/basic/FOO',
  BAR:'states/basic/BAR',
  FOOBAR:'states/basic/FOOBAR'
};

export const COMPONENTS = {
  FOO:'components/basic/FOO',
  BAR:'components/basic/BAR',
  FOOBAR:'components/basic/FOOBAR'
};

export const COMPONENT_MAPPING = {
  [COMPONENTS.FOO]:Foo,
  [COMPONENTS.BAR]:Bar,
  [COMPONENTS.FOOBAR]: FooBar
};

export const WORKFLOW = {
  name: 'basic',
  states:{
    [STATES.FOO]:{
      id: STATES.FOO,
      component:COMPONENTS.FOO,
      transitions: {
        [EVENTS.NEXT]:STATES.BAR,
        [EVENTS.BACK]:STATES.FOOBAR
      }
    },
    [STATES.BAR]:{
      id: STATES.BAR,
      component:COMPONENTS.BAR,
      transitions:{
        [EVENTS.NEXT]:STATES.FOOBAR,
        [EVENTS.BACK]:STATES.FOO
      }
    },
    [STATES.FOOBAR]:{
      id: STATES.FOOBAR,
      component:COMPONENTS.FOOBAR,
      transitions:{
        [EVENTS.NEXT]:STATES.FOO,
        [EVENTS.BACK]:STATES.BAR
      }
    }
  },
  initial_state: STATES.FOO,
};
