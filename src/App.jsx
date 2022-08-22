import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {
    axios.get('')
  })

  return (
    <div className="App">
      <header id="cabecalhopag"></header>

      <div class="descricao-e-inscricao">
        <div class="info-ajude-o-algoritmo">
          <h3> Ajude o algorítimo a ser mais certeiro </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend </p>
          <p> Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus. </p>
        </div>
        <div class="selecao-de-inscricao">
          <label htmlFor=""></label>
          <input type="Nome" />
          <label htmlFor=""></label>
          <input type="E-mail" />
          <label htmlFor=""></label>
          <input type="CPF" />
          <select> </select>
        </div>
      </div>

      <div class="page2-productselection">

      </div>

      <footer></footer>
    </div>
  )
}

export default App
