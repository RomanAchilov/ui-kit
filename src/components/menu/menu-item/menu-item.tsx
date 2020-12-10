import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Icons } from '../../icon';
import { spacesToDashes } from '../spaces-to-dashes';

import styles from './menu-item.module.scss';

const menuItem = BEM(styles);

interface Props {
  className?: string;
  label: string;
  icon: keyof typeof Icons;
  disabled?: boolean;
  onClick: () => void;
}

export const MenuItem = menuItem(({
  className, label, disabled, icon, onClick,
}: Props) => {
  const ItemIcon = Icons[icon];

  return (
    <div className={className} onClick={onClick} data-test={`menu:item:${spacesToDashes(label)}`}>
      <Content disabled={disabled}>
        <ItemIcon width={16} height={16} />
        <ItemLabel>{label}</ItemLabel>
      </Content>
    </div>
  );
});

const Content = menuItem.content('div');
const ItemLabel = menuItem.itemLabel('span');
