import styled, { css } from 'styled-components';

export const Card = css`
  position: relative;
  font-family: Pretendard;
  border: none;
  background-color: transparent;
  width: 340px;
  height: 335px;
  padding: 0;
  cursor: pointer;

  .image-wrapper {
    width: 340px;
    height: 200px;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
  }

  &:hover image-wrapper {
    background-size: 130%;
  }

  .imageNotFound {
    width: 340px;
    height: 200px;
    background-color: #dddfff;
  }

  .linkInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 340px;
    height: 135px;
    padding: 15px 20px;
    border-radius: 0 0 15px 15px;
    background-color: #fff;
  }

  .linkInfo > p {
    margin: 0;
    line-height: 150%;
  }

  .linkInfo > times {
    color: #666;
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
  }

  .linkInfo > paragraph {
    height: 48px;
    font-size: 16px;
    text-align: left;
    overflow: hidden;
  }

  .linkInfo > createdAt {
    color: #333;
    font-size: 14px;
  }
`;

export const LinkImage = styled.div`
  background-image: url(${(props) => props.img});
  position: relative;
  display: block;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  background-position: center;
  background-size: 100%;
  transition: background-size 0.3s ease-in-out;
`;

export const Icon = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  right: 15px;
  top: ${(props) => props.top}px;
  background-color: transparent;
  border: none;
  background-image: url(${(props) => props.img});
  cursor: pointer;
`;

export const CardList = css`
  display: grid;
  grid: auto-flow 1fr / repeat(3, 1fr);
  gap: 20px;
  padding: 0;
  justify-items: center;
  list-style-type: none;

  @media (max-width: 1124px) {
    grid: auto-flow 1fr / 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid: auto-flow 1fr / 1fr;
  }
`;
