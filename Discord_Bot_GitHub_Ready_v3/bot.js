//requierimientos
const mensajesCommands = require('./mensajesbot.js');
const Discord = require('discord.js');
const axios = require('axios'); //por el gif
const figlet = require('figlet');
// def cli
const client = new Discord.Client({
    intents: 3276799
});

//cont
client.on('ready', () => {
  console.log('Estoy 1000% listo');
  client.user.setActivity({
    
    name : "Say b!help",
    
    
    
  }
  );
});
client.on('messageCreate', async messagee => {
    
  if (messagee.content.toLowerCase().includes("b!say"))  {
    // Obtiene el mensaje después del comando
    const messageToRepeat = messagee.content.slice('b!say'.length).trim();
    
    // messagee.delete().catch(error => {
    //   console.error('Error al intentar eliminar el mensaje:', error);
    // });


    // Responde con el mensaje repetido
    messagee.channel.send(`${messageToRepeat}`);
  }
});

client.on('guildCreate', guild => {
  console.log(`¡Me han añadido a un nuevo servidor! Nombre del servidor: ${guild.name}`);
  // Puedes realizar acciones adicionales aquí si lo deseas.
});

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase().includes('b!boom')) {
    mensajesCommands.boomCommand(message);
  } else if (message.content.toLowerCase().includes('b!fbi')) {
    mensajesCommands.fbiCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!slap')) {
    mensajesCommands.slapCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('uwu')) {
    mensajesCommands.uwuCommand(message);
  // } else if (message.content.toLocaleLowerCase().includes('b!say')) {
  //   mensajesCommands.sayCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!addcoloroles')) {
    mensajesCommands.addcolorolesCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!kick')) {
    mensajesCommands.kickCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!warn')) {
    mensajesCommands.warnCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!unwarn')) {
    mensajesCommands.unwarnCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!ban')) {
    mensajesCommands.banCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!unban')) {
    mensajesCommands.unbanCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!8ball')) {
    mensajesCommands.eballCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!achievement')) {
    mensajesCommands.achievementCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!ascii')) {
    mensajesCommands.asciiCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!cat')) {
    mensajesCommands.catCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!angry')){
    mensajesCommands.angryCommand(message);
  } else if (message.content.toLocaleLowerCase().includes('b!kill')){
    mensajesCommands.killCommand(message);
  }
})

client.on('messageCreate', async message => {
  // Verifica si el mensaje comienza con el comando "b!help"
  if (message.content.toLowerCase() === 'b!help') {
    // Envia un mensaje privado al autor del mensaje original
    try {
      const helpMessage = " ```Mis comandos por ahora son: boom, kiss, slap, fbi y say. El bot sigue en construcción, si tienes alguna sugerencia para agregar al bot, feliz de incorporar las buenas :) <3 ```";
      
      await message.author.send(helpMessage);
      console.log(`Mensaje de ayuda enviado a ${message.author.tag}`);
    } catch (error) {
      console.error(`Error al enviar mensaje privado a ${message.author.tag}: ${error.message}`);
    }
  }
});





const GIPHY_API_KEY = '******'; // Obtén tu clave de API de Giphy




//conexion con el token
client.login('**************************')

//conexion con el token




// Comando b!myinfo
// static void UpdatePresence()
//  {
//      DiscordRichPresence discordPresence;
//      memset(&discordPresence, 0, sizeof(discordPresence));
//      discordPresence.state = "Juegando Solo";
//      discordPresence.details = "Ryioitenkai";
//      discordPresence.startTimestamp = 1507665886;
//      discordPresence.endTimestamp = 1507665886;
//      discordPresence.largeImageText = "Numbani";
//      discordPresence.smallImageText = "Rogue - Level 100";
//      discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
//      discordPresence.partySize = 1;
//      discordPresence.partyMax = 5;
//      discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
//      Discord_UpdatePresence(&discordPresence);
//  }



// Aqui quiero poner las respuesta de los gifs de FBI como chocolat



/*aqui msjs.js */


// const cumGifs = [
//   'https://cdn.discordapp.com/attachments/541290399155748867/575437430774300682/343_1000.gif?ex=65b032de&is=659dbdde&hm=f5a6f686607f0a8be4ecbe165c98887007d744168573acd09855a4e5b21de99d&',
//   'https://cdn.discordapp.com/attachments/541290399155748867/575438862441250846/tumblr_nqbvkonF0f1uwisgeo1_500.gif?ex=65b03433&is=659dbf33&hm=806aa6904207bccebeee1a335ca21627413a2f59f361f2f1d6cd0eb014211d14&',


// ]

// client.on('messageCreate', message => {

//   if (message.content.toLowerCase().startsWith('b!cum') && message.mentions.users.size > 0){
//     const targetUser = message.mentions.users.first();

//     const randomGif = cumGifs[Math.floor(Math.random()* cumGifs.length)];

//     if (randomGif)
//     {
//       message.channel.send(`<@${message.author.id}> Se vino en <@${targetUser.id}>`);
//       message.channel.send(randomGif);
//     }

//   }

// })

//                            SECCION ADMINISTADOR                                      
