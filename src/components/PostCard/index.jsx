import './styles.css'

export const PostCars = ({ title, cover, body, id }) => {
  return (
    <div key={id} className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title} {id}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};
