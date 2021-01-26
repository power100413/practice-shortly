// YOUR CODE HERE:

const app = {
  server: 'http://localhost:3000/links',
  init: () => {
    app.addEventHandlers();
    app.fetch(json => {
      json.forEach(app.renderMessage);
    });
  },
  fetchAndRender: () => {
    app.fetch(data => {
      data.forEach(app.renderMessage);
    });
  },
  addEventHandlers: () => {
    let submit = document.querySelector('#send .submit');
    if (submit) {
      submit.addEventListener('submit', app.handleSubmit);
    }
  },
  fetch: callback => {
    window
      .fetch(app.server)
      .then(resp => {
        return resp.json();
      })
      .then(callback);
  },
  send: (data, callback) => {
    window
      .fetch(app.server, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => {
        return resp.json();
      })
      .then(callback);
  },
  clearMessages: () => {
    document.querySelector('#chats').innerHTML = '';
  },
  clearForm: () => {
    document.querySelector('.inputUser').value = '';
    document.querySelector('.inputChat').value = '';
  },
  renderMessage: ({ url, title, userId, visits}) => {
    const tmpl = `<div class="chat">
    <div class="username"> 유저 넘버: ${userId}</div>
      <div class="username"> 방문: ${visits}</div>
      <div class="username"> 제목: ${title
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</div>
      <a href=${url}>${url
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</a>
    </div>`;

    document.querySelector('#chats').innerHTML =
      tmpl + document.querySelector('#chats').innerHTML;
  },
  handleSubmit: e => {
    e.preventDefault();
    app.clearMessages();
    app.send(
      {
        url: 
        document.querySelector('.inputChat').value.includes('http') ? 
        document.querySelector('.inputChat').value :
        `https://${document.querySelector('.inputChat').value}`,
        username: document.querySelector('.inputUser').value
      },
      () => {
        app.fetchAndRender();
        app.clearForm();
      }
    );
  }
};

app.init();
