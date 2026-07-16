# SendaDigital

App web (PWA) de apoyo a la recuperación, vinculada a **ARACA**. Este primer hito hace
una sola cosa bien: **el apoyo siempre accesible** y una pantalla de inicio que se
reordena según el horario del centro, siendo honesta sobre si hay moderación o no.

**No recoge ningún dato todavía.** El registro (tarjeta diaria) llega más adelante,
después del consentimiento.

---

## Los dos relojes

Es la idea que gobierna todo el diseño:

- **Reloj humano** (¿hay alguien detrás?) → el horario real del centro:
  lunes a jueves de 9:00 a 20:30, viernes de 9:00 a 13:30.
  Fuera de ahí no hay moderación, y **la app lo dice** en vez de fingir.
- **Reloj de la app** (24/7) → el bloque de apoyo y el autocuidado funcionan siempre,
  sin conexión y sin depender de nadie.

Por eso el fin de semana no es el hueco de la app: **es su turno.** Es cuando el centro
está cerrado y más falta hace.

## El bloque de apoyo

Es **idéntico a cualquier hora**. Nunca se bloquea. Lo único que cambia es el aviso de
"no esperes respuesta aquí" cuando no hay moderación.

No es un botón de alarma. Es una recomendación escalonada:

1. **Primero, tus recursos** — las habilidades, los ejercicios.
2. **Si no consigues ponerlos en marcha** → acudir a **urgencias**. Es el recurso que sí
   está abierto siempre.
3. **112** queda al pie, discreto, y solo para lo que es: peligro inmediato para la vida
   o la seguridad, o no poder desplazarse.

Deliberadamente **no hay botón de "llamar al referente"**: fuera del horario del centro
no respondería, y ofrecer una llamada que no se contesta es justo lo que este diseño
evita. El contacto con el referente pertenece al horario del centro, no a la app.

El 112 no sustituye a urgencias ni al revés: urgencias es "no puedo con esto, voy";
el 112 es "no puedo ir".

---

## Un momento difícil (tolerancia al malestar)

Cuatro ejercicios, accesibles siempre y sin conexión. **No guardan nada**: se usan y ya.

| Ejercicio | Qué hace |
|---|---|
| 🌊 **Surf del craving** | 15 min acompañando la ola, con frases que van cambiando. Se puede pausar. |
| 🫁 **Respiración 4-6-8** | Un círculo marca el ritmo: 4 coger aire, 6 mantener, 8 soltar. |
| 🧊 **Temperatura (TIP)** | Pasos + cronómetro de 30 seg. Lleva aviso médico. |
| ⚖️ **Pros y contras** | La balanza, para ganar tiempo antes de decidir. (TM Ficha 4) |

El bloque de apoyo (urgencias / 112) **sigue visible dentro de los ejercicios**: nunca se
tapa ni se bloquea. Los cronómetros se detienen al salir.

Los textos y las frases están en el bloque **CONFIGURACIÓN** de `index.html`.

## 📢 Publicar un aviso (terapeuta)

No hace falta ningún panel ni contraseña: **GitHub es el panel**. Los avisos están en el
archivo **`avisos.txt`** del repo.

**Cómo publicar:**

1. En GitHub, entra en `avisos.txt`.
2. Pulsa el **lápiz** (✏️, arriba a la derecha) para editar.
3. Escribe. Guarda con **Commit changes**.
4. En un par de minutos aparece en el móvil de todos.

**Cómo se escribe.** Cada aviso son tres cosas y se separan con `---`:

```
Comida de verano en El Pinar
cuándo: sábado 20 de julio, 14:00
Antes de comer hay reunión de encuadre a las 13:15.
La participación es voluntaria.

---

Reunión de procesamiento
cuándo: martes 23 de julio, 18:00
Ponemos en común cómo fue.
```

- **Primera línea** = el título.
- **`cuándo:`** = la fecha (se puede poner lo que sea: "todos los jueves", "el sábado por
  la tarde"). Es opcional: si no la pones, no sale.
- **El resto** = el texto, tantas líneas como quieras.
- El aviso de arriba es el que sale primero, y es el que se ve en la pantalla de inicio.

El formato perdona: mayúsculas, espacios de más, almohadillas delante del título, guiones
de más en el separador. Si el archivo se queda vacío, la app dice "no hay avisos" y no se
rompe.

**Es solo lectura.** Nadie puede escribir ni responder en los avisos: publicas tú, y ya.
Por eso no expone teléfonos de nadie ni necesita moderación fuera de tu horario. Es el
canal de anuncios que pide el documento del grupo, para reducir la exposición mutua de
datos.

## Tarjeta de hoy y progreso

Tres toques, quince segundos: **ánimo** (5 niveles), **habilidades practicadas** y una
**línea libre** opcional. No pregunta por las ganas de beber: preguntarlo cada día
mantiene la atención puesta ahí.

**Contador: días practicando habilidades, y es un TOTAL, no una racha.** Una racha se
rompe y castiga; un total solo sube. Un mal día no borra nada. Deliberadamente no hay
cuenta de días sin beber: convertiría la app en el sitio que te pone el marcador a cero.

**El progreso no es una nota.** Ni porcentajes, ni cumplimiento, ni comparaciones: una
tira de 30 días para ver la forma (cuándo cuesta más, qué se repite). Los huecos son
días sin rellenar y la app dice expresamente que no pasa nada.

**Si el ánimo está bajo**, la app ofrece sus propias habilidades y recuerda la vía de
apoyo. No interpreta, no diagnostica, no alarma: es un menú, no un veredicto. Los colores
del ánimo van de apagado a verde — **nunca rojo**: estar bajo no es un error.

## Los datos

Se guardan **solo en ese móvil** (`localStorage`). No hay servidor, ni envío, ni copia:
la única llamada de red de toda la app es leer `avisos.txt`. Ni la asociación ni el
terapeuta ven nada — si alguien quiere enseñar su progreso en sesión, lo enseña él.

- **Consentimiento primero:** hasta aceptarlo no se guarda absolutamente nada.
- **Borrado real** desde la pantalla de progreso, en cualquier momento.
- Son datos de salud (art. 9 RGPD). Cualquier cambio que los saque del móvil se decide
  antes, con base legal y consentimiento. No se hace "porque es cómodo".

⚠️ **Importante:** para que los datos no se pierdan, conviene **instalar la app en la
pantalla de inicio** del móvil. Si se usa solo como página web, iOS puede borrar lo
guardado tras unos días sin abrirla.

## Qué hay aquí

```
index.html          ← la app entera (diseño y lógica dentro)
avisos.txt          ← LOS AVISOS: esto es lo que edita el terapeuta
sw.js               ← hace que funcione sin conexión
manifest.json       ← para que se instale como app en el móvil
icono-192.png
icono-512.png
icono-maskable.png
```

Sin build, sin dependencias, sin instalar nada. Se sube tal cual.

## Cómo publicarlo

1. En GitHub: **+** → **New repository**.
2. En el repo vacío: **uploading an existing file** → arrastrar los 6 archivos → **Commit changes**.
3. **Settings** → **Pages** → *Branch*: **main** y **/(root)** → **Save**.

En un par de minutos está en `https://tu-usuario.github.io/tu-repo/`.

## Cómo cambiar algo

Abrir `index.html` y buscar el bloque **CONFIGURACIÓN** (arriba del `<script>`).
Ahí están los horarios, el teléfono y los textos. El resto no hace falta tocarlo.

Si cambias `index.html`, sube el número de `VERSION` en `sw.js` para que la nueva
versión llegue a los móviles que ya la tengan instalada.

## ⚠️ Antes de que lo use nadie

1. **Textos exactos** del bloque de apoyo, del aviso "sin moderación" y de la línea del
   112. Lo de ahora es andamiaje: la redacción clínica es de Jo.
2. **Confirmar con Jo** la decisión de retirar el botón del referente y de degradar el
   112 a una línea al pie. El encuadre dice que toda ruta de riesgo termina en 112 y
   profesional de referencia; esta versión mantiene el 112 accesible pero cambia su
   papel, y esa es una decisión clínica que conviene dejar por escrito.

3. **Revisar el aviso médico del ejercicio TIP.** El frío en la cara está contraindicado
   con problemas cardíacos, tensión baja o medicación cardíaca. La app lo advierte, pero
   la redacción y el alcance del aviso los debe validar Jo.

Ya no hace falta configurar ningún teléfono: el único número es el 112.

## Privacidad

Sin servidor. En este hito no se guarda nada. Cuando se añada el registro, serán
**datos de salud** y vivirán solo en el dispositivo. Cualquier salida de datos fuera
del móvil se decide antes, con base legal y consentimiento.

## Lo que esto no es

No sustituye al tratamiento, ni a la atención profesional, ni a las terapias, ni a las
reuniones. No es un servicio de urgencias ni de atención inmediata. Ante riesgo:
**112** y el profesional de referencia de ARACA.

---

ARACA · Asociación de Alcohólicos Rehabilitados Alameda Castellón
