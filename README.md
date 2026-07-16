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

## Qué hay aquí

```
index.html          ← la app entera (diseño y lógica dentro)
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
