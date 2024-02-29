let listaExibicao = "Lista de Compras:\n\n";
listaExibicao += "Frutas:\n";
listaExibicao += frutas.join(", ") + "\n\n";

listaExibicao += "Laticínios:\n";
listaExibicao += laticínios.join(", ") + "\n\n";

listaExibicao += "Doces:\n";
listaExibicao += doces.join(", ") + "\n\n";

listaExibicao += "Congelados:\n";
listaExibicao += congelados.join(", ") + "\n\n";

listaExibicao += "Padaria:\n";
listaExibicao += padaria.join(", ") + "\n\n";

listaExibicao += "Outros: \n";
listaExibicao += outros.join(",") + "\n\n";

// Exibindo a lista de compras em um alerta
alert(listaExibicao);
