import type { Meta, StoryObj } from '@storybook/react';
import Divider from '@/components/Divider';

const meta = {
  title: 'Common/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    backgrounds: {
      // 배경을 dark로 설정
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    length: {
      control: {
        type: 'text',
      },
      description: 'rem, %등으로 입력하세요',
    },
    thickness: {
      control: {
        type: 'text',
      },
      description: 'rem등으로 입력하세요',
    },
  },
  args: {
    direction: 'horizontal',
    color: 'primary',
    length: '800px',
    thickness: '0.1rem',
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    color: 'primary',
    length: '500px',
    thickness: '0.4rem',
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    color: 'secondary',
    length: '100px',
  },
};