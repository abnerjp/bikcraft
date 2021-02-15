if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote",
    auto: true,
    time: 5000,
  });

  new SimpleSlide({
    slide: "portifolio",
    auto: true,
    time: 7000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.SimpleForm) {
  new SimpleForm({
    form: ".form-php",
    button: "#enviar",
    erro: "<div id='form-erro'><h2>Erro no envio</h2><p>Um erro ocorreu, tente para o e-mail contato@bikcraft.com</p></div>",
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você</p></div>"
  });
}
