import styled from 'styled-components';

export const AddLinkWrap = styled.div`
  display: flex;
  padding: 60px 32px 90px 32px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  background: var(--Linkbrary-bg, #f0f6ff);
`;

export const AddLinkBackground = styled.div`
  display: flex;
  width: 800px;
  padding: 16px 20px;
  align-items: center;
  gap: 12px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
`;

export const AddLinkInput = styled.input`
  color: var(--Linkbrary-gray60, #9fa6b2);
  border: none;
  flex-grow: 1;
`;

export const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
`;