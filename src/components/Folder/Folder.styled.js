import styled from 'styled-components';
import addIcon from "../../assets/images/plus.svg";
import addIconWhite from "../../assets/images/plus-white.svg";

export const FolderToolBarWrap = styled.div`
  display: grid;
  grid-template-areas: 'folderList folderList addFolder' 'folderName option option';
  grid-row-gap: 2.4rem;
  grid-column-gap: 1.2rem;
  align-items: center;
  margin-bottom: 2.4rem;
  @media screen and (max-width: 767px) {
    grid-template-areas:
      'folderList'
      'folderName'
      'option';
  }
`;

export const FolderListWrapper = styled.div`
  display: flex;
  grid-area: folderList;
  column-gap: 0.8rem;
  flex-wrap: wrap;
  row-gap: 1.2rem;
`;

export const AddFolderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: transparent;
  height: 20px;
  color: var(--primary);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  grid-area: addFolder;
  & .icon {
    width: 16px;
    height: 16px;
    background-image: url(${addIcon});
  }
  @media screen and (max-width: 767px) {
    border-radius: 20px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
    padding: 8px 24px;
    height: 35px;
    color: #fff;
    z-index: 10;
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translate(-50%, 0);
    & .icon {
      background-image: url(${addIconWhite});
    }
  }
`;

export const FolderName = styled.h2`
  grid-area: folderName;
  margin: 0;
`;

export const OptionWrapper = styled.div`
  display: flex;
  grid-area: option;
  justify-self: flex-end;
  @media screen and (max-width: 767px) {
    justify-self: flex-start;
  }
`;

export const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: transparent;
`;
