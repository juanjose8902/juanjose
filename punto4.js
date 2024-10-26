let frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"];

//Crea un nuevo array que contiene los elementos de frutas desde el índice inicio hasta (pero sin incluir) el índice fin. Imprime el subarray resultante.
const crearSubarray = (inicio, fin) => {
    console.log("Subarray:", frutas.slice(inicio, fin));
};

