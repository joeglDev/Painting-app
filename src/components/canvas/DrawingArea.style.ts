import { styled } from "styled-components";

export const CanvasWrapper = styled.div`
  position: relative;
  margin: 2.5rem auto;
  width: 100%;
  height: 95%;
  background: #fff;
  border-radius: 0.125rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0.625rem;
    width: 40%;
    height: 0.625rem;
    box-shadow: 0 0.3125rem 0.875rem rgba(0,0,0,.7);
    z-index: -1;
    transition: all .3s ease-in-out;
  }

  &::before {
    left: 0.9375rem;
    transform: skew(-5deg) rotate(-5deg);
  }

  &::after {
    right: 0.9375rem;
    transform: skew(5deg) rotate(5deg);
  }

  &:hover::before,
  &:hover::after {
    box-shadow: 0 0.125rem 0.875rem rgba(0,0,0,.4);
  }

  &:hover::before {
    left: 0.3125rem;
  }

  &:hover::after {
    right: 0.3125rem;
  }
`;