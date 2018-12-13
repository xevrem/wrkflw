import {Foo, Bar, FooBar} from 'components/states/basic';

export const EVENTS = {
  NEXT: 'events/basic/NEXT',
  BACK: 'events/basic/BACK'
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
