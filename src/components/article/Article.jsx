import './Article.css';

function Article(props) {
  const {
    id: id,
    link: link,
    date: date, 
    title: title, 
    description: description 
  } = props;
  return (
    <article className="bp__post_card" id={id}>
      <a href={link} className="pc__link" target="_blank">
        <div className="pc__meta">
          <time className="meta__date">{date}</time>
        </div>
        <h3 className="pc__title">{title}</h3>
        <p className="pc__description">{description}</p>
      </a>
    </article>
  );
}

export default Article;
