import type { Meta, StoryObj } from '@storybook/angular';
import { WordleCaseComponent } from "./wordle-case.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WordleCaseComponent> = {
  component: WordleCaseComponent
};

export default meta;
type Story = StoryObj<WordleCaseComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Undefined: Story = {
  args: {
    letter: 'A',
    validationState: 'undefined'
  },
};

export const Bad: Story = {
  args: {
    letter: 'A',
    validationState: 'bad'
  },
};

export const BadPlaced: Story = {
  args: {
    letter: 'A',
    validationState: 'bad-placed'
  },
};

export const Good: Story = {
  args: {
    letter: 'A',
    validationState: 'good'
  },
};

