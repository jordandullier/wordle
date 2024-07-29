import type { Meta, StoryObj } from '@storybook/angular';
import { WordleGameComponent } from './wordle-game.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<WordleGameComponent> = {
  component: WordleGameComponent,
};

export default meta;
type Story = StoryObj<WordleGameComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Game: Story = {
  args: {
    linesCount: 2,
    wordLength: 5,
  },
};
