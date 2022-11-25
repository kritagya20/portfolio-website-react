import './Article.css';


function Article(props) {
  return (
    <article className="bp__post_card" id={props.id}>
      <a href={props.link} className="pc__link" target="_blank">
        <div className="pc__meta">
        <time className="meta__date">{props.date}</time>
        </div>
        <h2 className="pc__title">{props.title}</h2>
        <p className="pc__description">{props.description}</p>
      </a>
    </article>
  )
}

export default Article;
