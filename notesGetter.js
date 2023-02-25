function notesGetter(){
  let $titulos = [...document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-r4nke-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.r4nke-YPqjbf")].map(function(el){return el.innerText})
  let $texto = [...document.querySelectorAll("div.IZ65Hb-s2gQvd div.IZ65Hb-qJTHM-haAclf div.notranslate.IZ65Hb-YPqjbf.fmcmS-x3Eknd.h1U9Be-YPqjbf")].map(function(el){return el.innerText})
  for (let i = 1; i < $titulos.length; i++) {
    console.log($titulos[i] + "\n - \n" + $texto[i] )
    
  }
}