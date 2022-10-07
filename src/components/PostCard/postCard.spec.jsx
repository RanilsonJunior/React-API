import { render, screen } from '@testing-library/react';
import { PostCard } from './';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    // const {debug} = render(<PostCard {...props} />)/* Basicamente está fazendo um console log para ver as tags html. */
    render(<PostCard {...props} />);
    // debug();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      'img/img.png',
    ); /* Ele quer a tag que tem o img. E com o segundo parâmetro e mais especifico ainda, ele quer a tag img, que tenha o título especificado. */
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <PostCard {...props} />,
    ); /* Está pegando o componente e jogando dentro do container. */
    expect(
      container.firstChild,
    ).toMatchSnapshot(); /* Ele espera em pegar o primeiro filho do container e tirar uma foto dele(criando uma pasta chamada __snapshots__ e com a foto tirada dentro dele, que seria um arquivo) */
  });
});

// toBeInTheDocument(); -> Esteja no documento.
// toHaveAttribute("src", props.cover); -> Espera que tenha um atributo.
// getByText('body 1'); -> Para pegar na tag <p></p>.
// expect(container.firstChild).toMatchSnapshot();
// firstChild -> Primeiro filho.
// toMatchSnapshot() -> Tira uma foto.

// Pense apenas no que o usuário está VENDO na tela... Por exemplo:

// <h1 class="a b c" id="d" onClick={handleClick}>Olá mundo</h1>
// Disso tudo acima, o que o usuário vê na tela?

// Olá mundo

// Isso é o name para tudo o que você for buscar, a, button, heading, img, etc...
