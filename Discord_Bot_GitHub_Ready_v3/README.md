# Discord Bot 🤖

Este proyecto es un bot de Discord desarrollado con **Node.js** y la librería **discord.js**.

---

## 🚀 Requisitos

- Node.js (versión 16.9.0 o superior recomendado)
- npm (gestor de paquetes de Node.js)
- Una cuenta de desarrollador de Discord y el token de tu bot

---

## ⚙️ Instalación

1️⃣ Clona el repositorio o descarga los archivos.

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2️⃣ Instala las dependencias:

```bash
npm install
```

3️⃣ Crea un archivo `.env` basado en el archivo de ejemplo:

```bash
cp .env.example .env
```

4️⃣ Abre el archivo `.env` y coloca el token de tu bot:

```bash
DISCORD_TOKEN=tu_token_aqui
```

---

## ▶️ Ejecución

Para iniciar el bot, simplemente ejecuta:

```bash
node index.js
```

---

## 🛠️ Comandos de ejemplo

Actualmente el bot responde al comando:

```
!ping
```

Y responderá con:

```
Pong!
```

Puedes expandir los comandos editando el archivo `index.js`.

---

## 📝 Notas

- Asegúrate de tener habilitados los *Privileged Gateway Intents* en el portal de desarrolladores de Discord si tu bot requiere acceso a mensajes.

- Nunca compartas tu token en público.

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Puedes modificarlo y adaptarlo a tus necesidades.

---

_Disfruta programando tu bot de Discord 🚀_
