import * as S from './AddLink.styled';
import linkIcon from '../../assets/images/link.svg';
import GradientButton from '../Buttons/GradientButton';

function AddLink() {
  return (
    <S.AddLinkWrap>
      <S.AddLinkBackground>
        <LinkIcon src={linkIcon} alt="링크 아이콘" />
        <S.AddLinkInput placeholder="링크를 추가해 보세요" />
        <GradientButton size="small">추가하기</GradientButton>
      </S.AddLinkBackground>
    </S.AddLinkWrap>
  );
}

export default AddLink;
