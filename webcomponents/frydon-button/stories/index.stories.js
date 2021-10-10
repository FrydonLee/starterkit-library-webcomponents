import { html } from 'lit';
import '../frydon-button.js';

export default {
  title: 'FrydonButton',
  component: 'frydon-button',
  argTypes: {
    text: { control: 'text' },
    // counter: { control: 'number' },
    // textColor: { control: 'color' },
  },
};

function Template({ text = 'Hello world', counter = 5, textColor, slot }) {
  return html`
    <frydon-button
      style="--frydon-button-text-color: ${textColor || 'black'}"
      .text=${text}
      .counter=${counter}
    >
      ${slot}
    </frydon-button>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  text: 'Testo',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
