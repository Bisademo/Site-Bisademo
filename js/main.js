// Bisademo — script principal do site

document.addEventListener('DOMContentLoaded', function () {
  // Ano automático no rodapé
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu móvel
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('navLinks');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('is-open'); });
    });
  }

  // Formulário de contacto -> abre o cliente de email com a mensagem preenchida
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nome = form.nome.value.trim();
      var email = form.email.value.trim();
      var telefone = form.telefone.value.trim();
      var assunto = form.assunto.value;
      var mensagem = form.mensagem.value.trim();
      var status = document.getElementById('form-status');

      if (!nome || !email || !mensagem) {
        status.textContent = 'Por favor preencha os campos obrigatórios.';
        status.className = 'is-error';
        return;
      }

      var corpo = 'Nome: ' + nome + '\n' +
                  'Email: ' + email + '\n' +
                  (telefone ? 'Telefone: ' + telefone + '\n' : '') +
                  '\n' + mensagem;

      var mailto = 'mailto:geral@bisademo.com' +
                   '?subject=' + encodeURIComponent('[Site] ' + assunto) +
                   '&body=' + encodeURIComponent(corpo);

      window.location.href = mailto;

      status.textContent = 'A abrir o seu cliente de email…';
      status.className = 'is-success';
    });
  }
});
