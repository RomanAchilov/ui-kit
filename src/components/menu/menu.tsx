import * as React from 'react';
import { BEM, div } from '@redneckz/react-bem-helper';
import VisibilitySensor from 'react-visibility-sensor';
import { nanoid } from 'nanoid';

import { Tooltip } from '../tooltip';
import { Icons } from '../icon';
import { useClickOutside } from '../../hooks';
import { MenuItem } from './menu-item/menu-item';

import styles from './menu.module.scss';

interface MenuItemType {
  label: string;
  icon: keyof typeof Icons;
  onClick: () => void;
  tooltipMessage?: React.ReactNode;
  disabled?: boolean;
}

interface Props {
  className?: string;
  items: MenuItemType[];
  bordered?: boolean;
  testContext?: string;
}

const menu = BEM(styles);

export const Menu = menu(({
  className, items, bordered, testContext = '',
}: Props) => {
  const [isListOpened, setIsListOpened] = React.useState(false);
  const [position, setPosition] = React.useState<'bottom' | 'top'>('bottom');
  const node = useClickOutside(() => setIsListOpened(false));

  return (
    <div className={className} ref={node}>
      <MenuIcon onClick={() => setIsListOpened(!isListOpened)} data-test={`menu:icon:${testContext}`}>
        {bordered ? <Icons.MoreOptionsWithBorder /> : <Icons.MoreOptions />}
        {isListOpened && (
          <VisibilitySensor
            onChange={(isVisible) => {
              !isVisible && setPosition('top');
            }}
          >
            <ItemsList position={position}>
              {items.map(({
                icon, label, onClick, disabled, tooltipMessage,
              }) => (
                <>
                  {tooltipMessage ? (
                    <Tooltip message={tooltipMessage} key={nanoid()}>
                      <MenuItem icon={icon} label={label} onClick={onClick} disabled={disabled} />
                    </Tooltip>
                  ) : <MenuItem key={nanoid()} icon={icon} label={label} onClick={onClick} disabled={disabled} />}
                </>
              ))}
            </ItemsList>
          </VisibilitySensor>
        )}
      </MenuIcon>
    </div>
  );
});

const MenuIcon = menu.menuIcon(div({ onClick: () => {}, 'data-test': '' } as { onClick?: () => void; 'data-test'?: string }));
const ItemsList = menu.itemsList(div({} as { position?: 'bottom' | 'top' }));
