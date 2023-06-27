import "./styles.css";
import { useId } from "react";

export default function App() {
  const nome = useId();

  function formularioEnviado(e) {
    e.preventDefault();

    const formulario = e.target;
    const dadosForm = new FormData(formulario);
    const jsonFormulario = Object.fromEntries(dadosForm.entries());
    console.log(jsonFormulario.nome);
  }

  return (
    <div className="App">
      <form methood="post" onSubmit={formularioEnviado}>
        <label htmlFor={nome}>
          Nome: <input name="nome" id={nome} defaultValue="Nome do usuario" />
        </label>
        <hr />
        Listas: <br />
        <label>
          <input type="checkbox" name="lista1" defaultChecked={true} />
          Lista 1
        </label>
        <label>
          <input type="checkbox" name="lista2" />
          Lista 2
        </label>
        <label>
          <input type="checkbox" name="lista3" />
          Lista 3
        </label>
        <hr />
        Genero:
        <label>
          <input type="radio" name="genero" value="m" /> Masculino
        </label>
        <label>
          <input type="radio" name="genero" value="f" /> Feminino
        </label>
        <label>
          <input type="radio" name="genero" value="nb" /> Não binario
        </label>
        <br />
        <button type="reset">Limpar</button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
