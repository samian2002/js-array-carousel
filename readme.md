HTML:

Creerò un contenitore <div> con un identificativo unico che ospiterà l'immagine attiva del carosello.
All'interno di questo contenitore, inserirò un elemento <img> con una classe active per indicare che è l'elemento visualizzato all'avvio.
Aggiungerò due pulsanti che permetteranno agli utenti di scorrere avanti e indietro tra le immagini.

CSS:

Definirò le dimensioni e l'allineamento del contenitore delle immagini.
Nasconderò tutte le immagini di default utilizzando display: none; e mostrerò solo l'immagine con la classe active impostando display: block;.
Applicherò stili ai pulsanti per migliorarne l’estetica.

JavaScript:

Inizializzerò un array contenente i percorsi delle immagini che desidero mostrare nel carosello.
Definirò una variabile per tenere traccia dell'indice dell'immagine corrente, iniziando dalla prima immagine.
Implementerò una funzione cambiaImmagine che aggiorna l'indice dell'immagine corrente in base all'input dell'utente (avanti o indietro). La funzione gestirà anche il caso in cui l'indice superi i limiti dell'array, facendo "ricominciare" il carosello o tornando all'ultima immagine se si va indietro dalla prima.
Al caricamento della pagina, la funzione assicurerà che la prima immagine venga visualizzata impostando il src dell'elemento <img>.