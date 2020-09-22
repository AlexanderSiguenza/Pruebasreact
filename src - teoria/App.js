import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.presion = this.presion.bind(this);
    this.generarAleatorio = this.generarAleatorio.bind(this);
    this.state = { numero: 0 }
    this.state1 = {
      articulos: [
        { codigo: 1, descripcion: 'papas', precio: 12.52 },
        { codigo: 2, descripcion: 'naranjas', precio: 21 },
        { codigo: 3, descripcion: 'peras', precio: 18.20 }]
    }
    this.eliminarUltimaFila = this.eliminarUltimaFila.bind(this);
    this.borrar = this.borrar.bind(this);
  }

  render() {
    const siglo = 21;
    const persona = { nombre: 'Juan', edad: 34 }
    const buscadores = ['http://www.google.com', 'http://www.bing.com', 'http://www.yahoo.com'];

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hola Mundo</h1>
          </header>
        </div>

        <h1>Título nivel 1</h1>
        <hr /> <p>Estamos en el siglo {siglo}</p>

        <h3>Acceso a un objeto</h3>
        <p>{persona.nombre} tiene {persona.edad} años</p>

        <h3>Llamada a un método</h3>
        <p>Un valor aleatorio llamando a un método.</p> {
          this.retornarAleatorio()
        }

        <h3>Calculo inmediato de expresiones</h3> 3 + 3 = {3 + 3} <br></br>

        <br></br>

        <div>
          <a href={buscadores[0]}>Google</a><br></br>
          <a href={buscadores[1]}>Bing</a><br></br>
          <a href={buscadores[2]}>Yahoo</a><br></br>
        </div>

        <br></br>
        <div> <h1>Titulo 1</h1> </div> <div> <h1>Titulo 2</h1> </div>
        <br></br>

        <div>
          <form onSubmit={this.presion}>
            <p>Ingrese primer valor: <input type="number" name="valor1" /> </p>
            <p>Ingrese segundo valor: <input type="number" name="valor2" /> </p>
            <p> <input type="submit" value="Sumar" /> </p>
          </form>
        </div>

        <br></br>
        <br></br>

        <div>
          <p>Número aleatorio: {this.state.numero}</p>
          <button onClick={this.generarAleatorio}>Generar número aleatorio</button>
        </div>

        <br></br>
        <br></br>

        <div>
          <table border="1">
            <thead><tr><th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Borra?</th>
            </tr></thead>
            <tbody>
              {
                this.state1.articulos.map(elemento => {
                  return (
                    <tr key={elemento.codigo}>
                      <td> {elemento.codigo} </td>
                      <td> {elemento.descripcion} </td>
                      <td> {elemento.precio} </td>
                      <td><button onClick={() => this.borrar(elemento.codigo)}>Borrar</button> </td>
                    </tr>)
                })
              }
            </tbody>
          </table>
          <br></br>
          <button onClick={this.eliminarUltimaFila}>Eliminar última fila</button>
          <br></br>
        </div>
        <br></br>

      </div>

    );
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 10);
  }

  presion(e) {
    e.preventDefault();
    const v1 = parseInt(e.target.valor1.value, 10);
    const v2 = parseInt(e.target.valor2.value, 10);
    const suma = v1 + v2;
    alert('La suma es:' + suma);
  }

  generarAleatorio() {
    const v = Math.trunc(Math.random() * 100);
    this.setState({ numero: v })
  }

  eliminarUltimaFila() {
    if (this.state1.articulos.length > 0) {
      var temp = this.state1.articulos;
      temp.pop(); // eliminamos el último elemento
      this.setState({ articulos: temp }) // finalmente actualizamos el atributo 'this.state' con el nuevo vector:
      console.log(temp);
    }
  }

  borrar(cod) {
    var str1 = "Codigo : ".concat(cod);
    console.log(str1);
    var temp1 = this.state1.articulos.filter((el) => el.codigo !== cod);
    console.log(temp1);
    this.setState({ articulos: temp1 })
  }

}
export default App;