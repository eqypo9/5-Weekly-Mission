import * as S from './CardList.styled';
import noImageBackground from '../../assets/images/card-default.png';
import starIcon from '../../assets/images/star.svg';
import kebabIcon from '../../assets/images/kebab.svg';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}

function calculateTime(value) {
  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 31 * DAY;
  const YEAR = 12 * MONTH;

  const date = new Date() - new Date(value);

  const diffInMinites = parseInt(date / MINUTE);
  const diffInHours = parseInt(date / HOUR);
  if (diffInHours < 1) {
    if (diffInMinites === 1) {
      return '1 minutes ago';
    }
    return `${diffInMinites} minutes ago`;
  }

  const diffInDays = parseInt(date / DAY);
  if (diffInDays < 1) {
    if (diffInHours === 1) {
      return '1 hour ago';
    }
    return `${diffInHours} hours ago`;
  }

  const diffInMonths = parseInt(date / MONTH);
  if (diffInMonths < 1) {
    if (diffInDays === 1) {
      return '1 day ago';
    }
    return `${diffInDays} days ago`;
  }

  const diffinYears = parseInt(date / YEAR);
  if (diffinYears < 1) {
    if (diffInMonths === 1) {
      return '1 month ago';
    }
    return `${diffInMonths} months ago`;
  }

  if (diffinYears === 1) {
    return '1 year ago';
  }
  return `${diffinYears} years ago`;
}

function Card({ link, isFolderPage = false }) {
  const imgUrl = (link.imageSource || link.image_source) ?? noImageBackground;

  const handleClick = () => {
    window.open(link.url, '_blank', 'noopener, noreferrer');
  };

  return (
    <button className='card' onClick={handleClick}>
      <S.LinkImage className='image-wrapper' img={imgUrl}></S.LinkImage>
      <div className='linkInfo'>
        <p className='times'>
          {calculateTime(link.createdAt || link.created_at)}
        </p>
        <p className='paragraph'>{link.description}</p>
        <p className='createdAt'>
          {formatDate(link.createdAt || link.created_at)}
        </p>
      </div>
      {isFolderPage ? (
        <Icon width='34' height='34' top='15' img={starIcon} />
      ) : null}
      {isFolderPage ? (
        <Icon width='21' height='17' top='215' img={kebabIcon} />
      ) : null}
    </button>
  );
}

function CardList({ links, isFolderPage = false }) {
  if (!links) return;
  return (
    <ul className='cardList'>
      {Object.values(links).map((link) => {
        return (
          <li key={link.id}>
            <Card link={link} isFolderPage={isFolderPage} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
