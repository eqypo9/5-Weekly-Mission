import styled from 'styled-components';

/* Card 밑 스타일링 다 넣기 */
/* meta 태그도 넣기 */
 export const Card = css`
  position: relative;
  font-family: Pretendard;
  border: none;
  background-color: transparent;
  width: 340px;
  height: 335px;
  padding: 0;
  cursor: pointer;
`

export const CardList = css`
  display: grid;
  grid: auto-flow 1fr / repeat(3, 1fr);
  gap: 20px;
  padding: 0;
  justify-items: center;
  list-style-type: none;
`

.card .image-wrapper {
  width: 340px;
  height: 200px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
}

.card:hover .image-wrapper {
  background-size: 130%;
}

.card .imageNotFound {
  width: 340px;
  height: 200px;
  background-color: #dddfff;
}
.card .linkInfo {
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
.card .linkInfo p {
  margin: 0;
  line-height: 150%;
}
.card .linkInfo .times {
  color: #666;
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
}

.card .linkInfo .paragraph {
  height: 48px;
  font-size: 16px;
  text-align: left;
  overflow: hidden;
}
.card .linkInfo .createdAt {
  color: #333;
  font-size: 14px;
}
/* Tablet */
/* @media screen and (max-width: 1124px) {
  .cardList {
    grid: auto-flow 1fr / 1fr 1fr;
  }
} */
/* Mobile */
/* @media screen and (max-width: 767px) {
  .cardList {
    grid: auto-flow 1fr / 1fr;
  }
}  