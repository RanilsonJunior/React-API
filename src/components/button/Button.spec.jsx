import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './index';

// O describe é para agrupar os testes e descrever o que está testando.
describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    // O método render() serve para renderizar o componente <Button />
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onclick={fn} />);
    // Tem que passar a propriedade do texto, para ee poder ler o texto e ver se está escrito.

    expect.assertions(1); /* Está falando que espera 1 a certo(que seria o expect). */

    // O screen serve para pegar o botão.
    // O query não levanta um erro caso ele não encontre esse elemento. Já no caso getBy se não achar, ele vai levantar o erro.
    // O get é quando só tem 1 elemento e o getAll é quando tem mais de 1 elemento.
    // O getByRole poder ter 2 parâmetros, o primeiro fala o nome da tag, que você quer pegar, e o segundo parâmetro fala que o botão tenha esse nome, load more.
    const button = screen.getByRole('button', { name: /load more/i });
    // Isso é uma expressão regular,está falando que mesmo se escrever com letras minusculas ele vai entender.
    expect(button).toBeInTheDocument();
    // E a afirmação que espera que esse botão esteja no documento.
  });

  it('should call function on button click', () => {
    const fn = jest.fn(); /* Está criando uma função. */
    render(
      <Button text="Load more" onclick={fn} />,
    ); /* Ele espera que essa função seja chamada. E está sendo pega na Home. */
    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button); /* Esta clicando no botão. */

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(
      <Button text="Load more" disabled={false} onclick={fn} />,
    ); /* Ele espera que essa função seja chamada. E está sendo pega na Home. */

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).not.toBeDisabled(); /* Espera que o botão esteja desativado. */
    // expect(button).not.toBeDisabled() Dessa forma você está dizendo que não esteja desativado.
  });

  // it("should match snapshot", () => {
  //   const fn = jest.fn();
  //   render(<Button text="Load more" disabled={false} onclick={fn} />))

  // })

  it('should be disabled when disabled is false', () => {
    const fn = jest.fn();
    render(
      <Button text="Load more" disabled={false} onclick={fn} />,
    ); /* Ele espera que essa função seja chamada. E está sendo pega na Home. */

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled(); /* Espera que o botão esteja desativado. */
    //   expect(button).toBeDisabled()
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onclick={fn} />);
    expect(container.firstChild).toMatchSnapshot(); /* Espera que o botão esteja desativado. */
    //   expect(button).toBeDisabled()
  });
});
