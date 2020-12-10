import React from 'react';
import { storiesOf } from '@storybook/react';

import { Menu } from './menu';

storiesOf('Menu', module).add('Menu', () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Menu
      items={[
        {
          label: 'Rename',
          icon: 'Edit',
          onClick: () => {},
        },
        {
          label: 'Settings',
          icon: 'Settings',
          onClick: () => {},
        },
        {
          label: 'Agents list',
          icon: 'Agents',
          onClick: () => {},
        },
        {
          label: 'Logs',
          icon: 'Logs',
          onClick: () => {},
        },
      ]}
    />
  </div>
)).add('Menu with border', () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Menu
      bordered
      items={[
        {
          label: 'Rename',
          icon: 'Edit',
          onClick: () => {},
        },
        {
          label: 'Settings',
          icon: 'Settings',
          onClick: () => {},
        },
        {
          label: 'Agents list',
          icon: 'Agents',
          onClick: () => {},
        },
        {
          label: 'Logs',
          icon: 'Logs',
          onClick: () => {},
        },
      ]}
    />
  </div>
)).add('Menu with tooltip', () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Menu
      items={[
        {
          label: 'Rename',
          icon: 'Edit',
          onClick: () => {},
          disabled: true,
          tooltipMessage: <div>tooltip message</div>,
        },
        {
          label: 'Settings',
          icon: 'Settings',
          onClick: () => {},
        },
        {
          label: 'Agents list',
          icon: 'Agents',
          onClick: () => {},
          disabled: true,
          tooltipMessage: <div>tooltip message</div>,
        },
        {
          label: 'Logs',
          icon: 'Logs',
          onClick: () => {},
        },
      ]}
    />
  </div>
));
