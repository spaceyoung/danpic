import TranslateButton from '../common/Button/TranslateButton';

function Article() {
  return (
    <article>
      <div>
        <span>기사 발행일</span>
        <p>기사 제목</p>
      </div>
      <div>
        <TranslateButton />
      </div>
    </article>
  );
}

export default Article;
