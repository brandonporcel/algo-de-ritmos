# Palindromos

Un palindromo es una palabra, frase, número o secuencia de caracteres que se lee igual al derecho o al reves.

Ejemplo:

```
232
110011
54322345
```

Escribir una función que verifique si un números puede ser reordenado para formar un palíndromo.

Nota: Los valores siempre serán numéricos y positivos.

Ejemplo:

```
5        =>  true
2121     =>  true
1331     =>  true
3357665  =>  true
1294     =>  false
```

33 57 66 5
3->2
5->2
6->2
7->1

12 94
1->1
2->1
9->1
4->1

13 31
1->2
3->2

21 21
2->2
2->2

3357665
3 3 5 7 6 6 5

{
impar:number
}

if(item.impar%2!==0) false
