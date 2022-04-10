# Descrizione algoritmo hash sorting

Questo algoritmo (molto semplice per la verità) la l'obiettivo di realizzare un sorting non basato su confronto.

L'idea di fondo è molto semplice. Scorriamo l'array con tutti gli elementi e inseriamo delle chiavi in una mappa. Se ad esempio l'array è [0,10,7,3,15] avremo in output una mappa del tipo {0:true, 10:true, 7:true, 3:true, 15:true}.

Si salvano il minimo e il massimo e si cicla partendo dal minimo fino al massimo. In tutto il ciclo si controlla se l'elemento i-esimo esiste nella mappa. Se l'elemento esiste lo si aggiunge in un nuovo array. 

Al termine otteniamo un array ordinato.

## Complessità 

La complessità dell'algoritmo è O(n+(max-min)) in tutti i casi. La complessità spaziale invece è O(2n) = O(n).


## Possibili ottimizzazioni per migliorare il caso medio

Poniamo il seguente caso: [0, 10000]. Con questo caso molto semplice, l'algoritmo dovrebbe fare 10000 cicli inutilmente. 

Possiamo utilizzare un meccanismo di paginazione per cui, dato un pagesize (ad esempio 100), creo m pagine. In questo caso dovremmo creare ad esempio 100 pagine. Scorrendo il primo ciclo, ogni volta che viene valutato un numero, si trova la pagina corrispondente e si inserisce "true". Si da quindi al sistema l'indicazione che quella pagina va analizzata.

Con questo nuovo algoritmo abbiamo 2 pagine che hanno valore true: la pagina 0 e la pagina 99. Il numero di cicli in questo caso sono 100 (per valutare tutte le pagine) + (numero di pagine true * page size). 

Il caso pessimo rimarrà lo stesso (anzi, tendenzialmente potrebbe addirittura peggiorare dovendo fare un altro numero di cicli per scorrere tutte le pagine). 

Il caso medio migliora a patto di scegliere bene il page size.


## Limiti attuali

Il limite di questo algoritmo per ora è che può funzionare solo su array contententi interi positivi. Possiamo estendere l'algoritmo per lavorare bene anche con valori negativi.


## Benchmark con il mergesort 

Il file [testOutput](https://docs.google.com/spreadsheets/d/1zNIMpAWfSi4uXDLb7Eq1nRmsRD1yg_-FA6FXX7AhlY8/edit?usp=sharing) contiene un benchmark di esecuzione.

La complessità di tempo del MergeSort è esattamente O(n*log(n)) mentre quella dell' hash sort è O(n+(max-min))

Quando usare questo algoritmo? Questo algoritmo è utile quando la densità di input (max-min)/n è minore di una certa soglia x. Nella cartella test si trovano dei benchmark dove max-min è 10, 100, 1000, 10000 volte la grandezza dell'input.

