import { useState } from 'react';
import * as S from './Folder.styled';
import FolderButton from '../Buttons/FolderButton';
import shareIcon from '../../assets/images/share.svg';
import editIcon from '../../assets/images/pen.svg';
import deleteIcon from '../../assets/images/trash.svg';

function Folder({ folderList, setFolderId }) {
  const [selectedFolderName, setSelectedFolderName] = useState('전체');
  if (!folderList) return null;

  const handleOnClickTotal = () => {
    setFolderId(null);
    setSelectedFolderName('전체');
  };

  return (
    <S.FolderToolBarWrap>
      <S.FolderListWrapper>
        <FolderButton onClick={handleOnClickTotal}>전체</FolderButton>
        {Object.values(folderList).map((folder) => {
          return (
            <FolderButton
              key={folder.id}
              setFolderId={setFolderId}
              folderId={folder.id}
              folderName={folder.name}
              selected={setSelectedFolderName}
            >
              {folder.name}
            </FolderButton>
          );
        })}
      </S.FolderListWrapper>
      <S.AddFolderButton>
        <p>폴더 추가</p>
        <div className='icon'></div>
      </S.AddFolderButton>
      <S.FolderName>{selectedFolderName}</S.FolderName>
      {selectedFolderName === '전체' ? null : (
        <S.OptionWrapper>
          <S.OptionButton>
            <img className='icon' src={shareIcon} alt='아이콘' />
            공유
          </S.OptionButton>
          <S.OptionButton>
            <img className='icon' src={editIcon} alt='아이콘' />
            이름 변경
          </S.OptionButton>
          <S.OptionButton>
            <img className='icon' src={deleteIcon} alt='아이콘' />
            삭제
          </S.OptionButton>
        </S.OptionWrapper>
      )}
    </S.FolderToolBarWrap>
  );
}

export default Folder;
