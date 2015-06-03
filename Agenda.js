function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
    titulo: function() { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre] = tf; },
    tf:     function(nombre) { return _contenido[nombre]; },
    borrar: function(nombre) { delete _contenido[nombre]; },
    toJSON: function() { return JSON.stringify(_contenido); },
    listar: function() {
              var msj = "";
              for (var i in _contenido) {
                msj = msj + i + ": " + _contenido[i] + "\n";
              }
              return msj;
            }
  }
}
var amigos = agenda ("Amigos", { 
	Pepe: 113278561,
  José: 157845123,
  Jesús: 178512355
});
console.log(amigos.listar());
