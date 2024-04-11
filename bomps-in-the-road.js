function bump(x) {
  return x.split("").filter(v => v == 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
}

console.log((bump("n")))
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));