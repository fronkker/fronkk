import {FkBtn} from '@fronkker/fronkk';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/FkBtn',
  component: FkBtn,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    // onClick: {},
  },
  args: {
    label: 'Button',
    outlined: false,
    dense: false,
  }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Dense = {
  args: {
    dense: true,
  },
};

export const Outlined = {
  args: {
    outlined: true,
  },
};
