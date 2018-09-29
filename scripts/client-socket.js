// HTML5 Native websocket
var sock = new WebSocket(`ws://${window.location.hostname}:5000`);

var log = $('#log');
var field = $('#text');
var name = undefined;

// set Url Path
function pathUrl(){
  window.open(`${window.location.href}`,'_blank');
}

// loading page
$(document).ready( () => {
  $('.modal').modal();
  $('.modal').modal('open');
});

// opening socket
sock.onopen = (event) => {
  console.log(`Socket connected Successfully`);
}

// reading socket
sock.onmessage = (event) => {
  var json = JSON.parse(event.data);
  let template = `<li class="collection-item avatar">
    <span class="title">Message from: ${json.name}</span>
    <p>Said: ${json.data} </p>
    <a href="#!" class="secondary-content"><i class="material-icons" style="color: grey !important">grade</i></a>
  </li>`;

  document.getElementById('log').innerHTML += template;
  field.val("");
}

// handling actions
$('#setUser').on('click', () => {
  name = $('#username').val();
  // sending first handshake
  sock.send(JSON.stringify({ type: 'name', data: name }))
  // closing modal
  $('.modal').modal('close');
});

$('#button').on('click', () => {
    var text = $('#text').val();
    sock.send(JSON.stringify({type: 'message', data: text}));
});
