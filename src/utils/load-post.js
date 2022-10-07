export const loadPost = async () => {
  const postResponse = fetch(
    'https://jsonplaceholder.typicode.com/posts',
  ); /* Está jogando o fetch dentro do postResponse */
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([
    postResponse,
    photosResponse,
  ]); /* está jogando a response no posts que fica dentro do  state e fazendo a promise com o const postResponse. */

  const postsJson = await posts.json(); /* está jogando a response já convertida para o postsJson */
  const photosJson = await photos.json();

  /* Isso é um zipper, ele está unindo os dois arrays, unir pelo menor array. */
  const postsAndPhotos = postsJson.map((post, index) => {
    return {
      ...post,
      cover: photosJson[index].url,
    }; /* O post está no formato de objeto, então estamos jogando todos os posts dentro do objeto. O photosJson e um array e ele está pegando pelo índice (significa que vai pegar 1 índice por post), com isso você tem acesso ao novo elemento cover */
  });

  return postsAndPhotos;
};
