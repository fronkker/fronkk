import {FkInput} from '@fronkker/fronkk';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/FkInput',
  component: FkInput,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Outlined = {
  args: {
    outlined: false,
    dense: false,
    label: 'Button',
    color: '#000000'
  },
};
