import { useEffect, useState, useCallback } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPost } from '../../utils/load-post';
import { Button } from '../../components/button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePost = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPost = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPost();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPost(0, postsPerPage);
  }, [handleLoadPost, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="searchContainer">
        {!!searchValue && <h1>Search Value:{searchValue}</h1>}
        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Não exist Posts!</p>}

      <div className="button-container">
        {!searchValue && <Button onclick={loadMorePosts} text="load more posts" disabled={noMorePost} />}
      </div>
    </section>
  );
};

// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 2,
//     searchValue: "",
//   };

//   async componentDidMount() {
//     await this.loadPost();
//   }

//   loadPost = async () => {
//     const { page, postsPerPage } = this.state;
//     const postsAndPhotos = await loadPost();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const { posts, allPosts, page, postsPerPage } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//     console.log("clique");
//   };

//   handleChange = (event) => {
//     const { value } = event.target;
//     this.setState({ searchValue: value });
//   };

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

//     const noMorePost = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchValue
//       ? allPosts.filter((post) => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//       : posts;

//     return (
//       <section className="container">
//         <div className="searchContainer">
//           {!!searchValue && <h1>Search Value:{searchValue}</h1>}
//           <TextInput
//             searchValue={searchValue}
//             handleChange={this.handleChange}
//           />
//         </div>

//         {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

//         {filteredPosts.length === 0 && <p>Não exist Posts!</p>}

//         <div className="button-container">
//           {!searchValue && (
//             <Button
//               onclick={this.loadMorePosts}
//               text="load more posts"
//               disabled={noMorePost}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }
