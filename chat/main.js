import './style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupSocketIO } from './socket.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <ul id="messages"></ul>
    <div class="container">
      <form id="form" action="">
        <input type="text" id="input" placeholder="Type your message...">
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'));
setupSocketIO();
