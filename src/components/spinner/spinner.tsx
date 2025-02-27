import styled from 'styled-components';

import { COLORS } from '../../theme';

interface Props {
  className?: string;
  disabled?: boolean;
}

export const Spinner = ({
  className,
  disabled,
}: Props) => (
  <Wrapper className={className} disabled={disabled}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </Wrapper>
);

const Wrapper = styled.div<{ disabled?: boolean }>`
  color: ${COLORS.MONOCHROME.DEFAULT};
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;

  div {
    transform-origin: 10px 10px;
    animation: lds-spinner 1.2s linear infinite;

    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 1px;
      left: 9px;
      width: 2px;
      height: 5px;
      border-radius: 20%;
      background: ${COLORS.MONOCHROME.DARK_TINT};
      
      ${({ disabled }) => disabled && `background: ${COLORS.MONOCHROME.WHITE}`}
    }
  }


  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }

  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }

  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }

  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }

  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }

  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }

  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }

  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }

  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }

  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
