import type { Meta, StoryObj } from '@storybook/angular';
import { WordleLineComponent } from './wordle-line.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WordleLineComponent> = {
  component: WordleLineComponent,
};

export default meta;
type Story = StoryObj<WordleLineComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const EmptyLine: Story = {
  args: {
    lineLetters: [{ letter: '', validationState: 'empty' },
      { letter: '', validationState: 'empty' },
      { letter: '', validationState: 'empty' },
      { letter: '', validationState: 'empty' },
      { letter: '', validationState: 'empty' },
    ],
  },
};

export const FullLine: Story = {
  args: {
    lineLetters: [{ letter: 'A', validationState: 'bad-placed' },
      { letter: 'B', validationState: 'bad' },
      { letter: 'C', validationState: 'bad-placed' },
      { letter: 'D', validationState: 'good' },
      { letter: 'E', validationState: 'good' },
    ],
  },
};

