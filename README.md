# Palindrome Checker

## Descripción
Este es un proyecto que verifica si una palabra o frase es un **palíndromo**, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda, ignorando mayúsculas, espacios y signos de puntuación.

## Enunciado
Un maestro necesita tu ayuda para construir un comprobador de palíndromos. Un palíndromo es una palabra o frase que se puede leer igual en ambas direcciones, ignorando signos de puntuación, espacios y diferencias entre mayúsculas y minúsculas.

### **Objetivo**
Construir una aplicación funcionalmente similar a [Palindrome Checker de freeCodeCamp](https://palindrome-checker.freecodecamp.rocks).

### **Historias de usuario**
1. Debe haber un campo de entrada con el `id="text-input"`.
2. Debe haber un botón con el `id="check-btn"`.
3. Debe haber un elemento `<div>`, `<span>` o `<p>` con el `id="result"`.
4. Si el campo de entrada está vacío y se presiona el botón, debe aparecer una alerta con el mensaje: **"Please input a value"**.
5. Si la entrada es un palíndromo, se debe mostrar el mensaje: **"X is a palindrome"**.
6. Si la entrada **no** es un palíndromo, se debe mostrar el mensaje: **"X is not a palindrome"**.
7. El programa debe eliminar caracteres no alfanuméricos y normalizar el texto para hacer la comparación correctamente.

## 🚀 Tecnologías utilizadas
- **HTML** para la estructura del formulario.
- **CSS** para el diseño y la presentación.
- **JavaScript** para la lógica de verificación de palíndromos.

## 📌 Instalación y ejecución
1. Clona este repositorio:
   ```sh
   git clone https://github.com/NormanMaciel/palindrome_checker.git
   ```
2. Abre el archivo `index.html` en tu navegador.

## 🎯 Uso
1. Ingresa una palabra o frase en el campo de texto.
2. Presiona el botón **"Check"**.
3. El resultado se mostrará debajo indicando si es un palíndromo o no.

## 📖 Ejemplo de funcionamiento
| Entrada | Salida |
|---------|--------|
| `racecar` | ✅ "racecar is a palindrome" |
| `A man, a plan, a canal. Panama` | ✅ "A man, a plan, a canal. Panama is a palindrome" |
| `hello` | ❌ "hello is not a palindrome" |
| `12321` | ✅ "12321 is a palindrome" |

## 🤝 Contribución
Si deseas mejorar este proyecto, siéntete libre de hacer un **fork** y enviar un **pull request**.


