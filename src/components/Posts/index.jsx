import './styles.css'

import { PostCars } from "../PostCard";

export const Posts = ({ posts }) =>  (
  <div className="posts">
    {posts.map((post) => (
      <PostCars
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);

// export const Posts = ({ posts }) => {
//   return(
//     <div className="posts">
//     {posts.map((post) => (
//       <PostCars
//         key={post.id}
//         title={post.title}
//         body={post.body}
//         id={post.id}
//         cover={post.cover}
//       />
//     ))}
//   </div>
//   )
// }