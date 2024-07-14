import './style.css'
import OctieLogo from '/octie.jpg'
import { setupSocketIO } from './socket.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${OctieLogo}" class="logo" alt="Octie Logo" />
    </a>
    <h3>Start Chatting</h3>
    <ul id="messages"></ul>
    <div class="container">
      <form id="form" action="">
        <input type="text" id="input" placeholder="Type your message...">
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
`
setupSocketIO();
