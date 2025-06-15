const { Collection } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const figlet = require('figlet');
const warningsMap = new Map();
const usedGifs = new Set();
const get8ballResponse = () => {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};
const boomGifs = [
    'https://cdn.discordapp.com/attachments/399448944889036801/698601161414017275/7cc004a33044f1d83dbcba6fe680f673.gif?ex=65ac1188&is=65999c88&hm=d096e907bbd02f1f319ab5291a5da69023a12fab61843cdb022570219c6d98da&',
    'https://cdn.discordapp.com/attachments/399448944889036801/550388098635137024/5734435372fb877e8f1912814b6f90328b5c53a8_hq.gif?ex=65a8205c&is=6595ab5c&hm=9710ee7011f7cb9665086784024aeb59a6bc2872de90b172910c8647369d6d70&',
    'https://tenor.com/view/forcegate-gif-27315278',
    'https://cdn.discordapp.com/attachments/399448944889036801/550388997814353941/tenor_3.gif?ex=65a82132&is=6595ac32&hm=96cc7306fa260a825578f671a3b82d7e1e2d7ef4ba0dcc3c3a760b0020fcf691&',
    'https://cdn.discordapp.com/attachments/399448944889036801/651487903998017536/35102faf-8640-4a47-bdf6-d32f1de870bc.gif?ex=65a6c8e4&is=659453e4&hm=fb8579d85f124f48e2cacc1c7fbc3da628d0deb7e0d41253115c3736d6c139b8&',
    'https://cdn.discordapp.com/attachments/399448944889036801/550388091030863883/3770.gif?ex=65b15ada&is=659ee5da&hm=29ff9df5e1e73de85a8bfdac56ceeaf53ad62cc43234eaca07c34ce78fa06612&',
    'https://cdn.discordapp.com/attachments/399448944889036801/550388802410250250/giphy.gif?ex=65b15b84&is=659ee684&hm=874ae00e57b7c6c3fac3bc86bcdb046d7c90194d99018e3f43a8d80374c9b8cc&',
  
  ];

  const fbiGifs = [
    'https://cdn.discordapp.com/attachments/399448944889036801/534108237885210665/4.gif?ex=65ad800f&is=659b0b0f&hm=58090955bb772d1a284f3fb2cfd3006ff508ed5f5230126c9f85eab82002e8fb&',
    'https://cdn.discordapp.com/attachments/399448944889036801/534108919656742919/6.gif?ex=65ad80b1&is=659b0bb1&hm=5a004d7e723ef8eb831922df408314179300af92e69ea350afd64e2e3918798f&',
    'https://cdn.discordapp.com/attachments/381330993233002496/541870158445281280/unnamed_8.gif?ex=65ae0d69&is=659b9869&hm=fb9b200be4f454b6f3a527050d3e00c44864077bad67c5b1461603c3b64338ab&',
    'https://cdn.discordapp.com/attachments/399448944889036801/536242642732843008/OpulentLastCutworm-small.gif?ex=65ac0960&is=65999460&hm=8d5291df9b61735e2e66249907674af3ca8fc7dec7595e4179a89b9c161ecc60&',
    'https://media2.giphy.com/media/3osBLaQjYdcuVYpgXu/giphy.gif?cid=ecf05e47zfoiyzpwuh0qoy7f71x640axq5kq0uwdcph02ddy&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/l49JIoZxmnpO09OoM/giphy.gif?cid=ecf05e47h4efi8q1sim2af5o95i92p60b0u8fmaf5iz7oy12&ep=v1_gifs_related&rid=giphy.gif&ct=g',
    'https://c.tenor.com/Z0Tt2vKaYNMAAAAC/tenor.gif',
    'https://c.tenor.com/3PF59WMVLNwAAAAC/tenor.gif',
    'https://c.tenor.com/CKpxxXAcHt4AAAAC/tenor.gif',
    'https://c.tenor.com/5KMl_bmDFWAAAAAC/tenor.gif',
    'https://cdn.discordapp.com/attachments/381330993233002496/541870159267233792/unnamed_9.gif?ex=65ae0d69&is=659b9869&hm=af2e83a684a877a517ee84aba8397b42e2d66dedc01f249793c672cad8f4efb4&',
  
    // ... Agrega más URLs según sea necesario[]
  ];

  const slapGifs = [
    'https://media2.giphy.com/media/pPdNABXupIM2R7MCX2/giphy.gif?cid=ecf05e47wr61gbxjhb9wcuyq16nhjen3nzev8odsqxifz8qz&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/trbEtmZ8fEooOlMvuI/giphy.gif?cid=ecf05e47wr61gbxjhb9wcuyq16nhjen3nzev8odsqxifz8qz&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    'https://c.tenor.com/eU5H6GbVjrcAAAAC/tenor.gif',
    'https://c.tenor.com/bblihRQawfsAAAAC/tenor.gif',
    'https://c.tenor.com/gFqmPEMWqEQAAAAC/tenor.gif',
    'https://c.tenor.com/uUyH26rVp0cAAAAC/tenor.gif',
    'https://cdn.discordapp.com/attachments/399448944889036801/596763241766453248/love-lab-gif.gif?ex=65aab994&is=65984494&hm=37f1cf89f6889d6c209916bac90d124323e7409b0e2b1ffd93ae1901ca4d27e1&',
    'https://cdn.weeb.sh/images/rJ4141YDZ.gif',
    'https://cdn.weeb.sh/images/SJx7M0Ft-.gif',
    'https://cdn.weeb.sh/images/Sk9mfCtY-.gif',
    'https://cdn.discordapp.com/attachments/399448944889036801/595749795059204096/k46vlw.gif?ex=65b0443b&is=659dcf3b&hm=c115a856ee73263fe2069be8afafb5e49694cc965e0521287b02eea2c488a199&',
  
  
    // Agrega más URLs según sea necesario
  ];

  const catGifs = [
    'https://i0.wp.com/imagenesgratis.com.es/wp-content/uploads/2015/11/Cats-Wallpaper-Image-Photos.jpg?fit=1920%2C1200&ssl=1',
    'https://th.bing.com/th/id/R.d67ecddbf916fd310ef48e4e801c13eb?rik=z41FqQNJvHqUmQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-qDT5C_od3vA%2fUsngubf4boI%2fAAAAAAAABCk%2fRNCRUf2EyFU%2fs1600%2fkitten-photo1366x768-happy-cat.jpg&ehk=jY1aKXPJEmdNptwMO8wq25JLf0zlLJ%2bRgCY7T9%2fDgIE%3d&risl=&pid=ImgRaw&r=0',
    'https://i.ytimg.com/vi/bcB8wL90pTg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUChPMA8=&rs=AOn4CLDlKEfUonM9S9r14-i05fSKQEXYUg',
    'https://yt3.ggpht.com/a/AATXAJyF2t9dIKM_jxGQfDrzkRRVqHCgqTD-iXZdlw=s900-c-k-c0xffffffff-no-rj-mo',
    'https://www.show.news/__export/1567201752167/sites/debate/img/2019/08/30/gato_png_crop1567201738546.jpg_839202635.jpg',
    'https://th.bing.com/th/id/R.16ba1f14de05ae89fcf22de09e8a05ef?rik=dvC4oMQk73BP5w&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f1%2f1c%2fGato_irritado.jpg&ehk=Ql9FMv659a%2bLWJQIF7yslndC3JQvni0XjmSs1m0gk0A%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.ZEDgZ7-swNUq6KGS8AI-5AHaEx?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.a36208a888dd853e3bf0dc0adcf50793?rik=Y7RJrdqwg1bnPg&pid=ImgRaw&r=0',
    'https://media.tenor.com/GTcT7HODLRgAAAAC/smiling-cat-creepy-cat.gif',
    'https://media.tenor.com/7t63GFnoIPUAAAAd/huh-cat-huh-m4rtin.gif',
    'https://th.bing.com/th/id/R.eec380bf5ccb0519fc248ee8e9e4550e?rik=y5rPD8mgeOiWXw&pid=ImgRaw&r=0',
    'https://i.pinimg.com/originals/94/f0/65/94f0653d30bd368e5dfe492f0f60e01e.gif',


  ];

  const angryGifs = [
    'https://media1.tenor.com/m/G9qmH_P1nbsAAAAd/angry-angry-cat.gif',
    'https://media1.tenor.com/m/_d-iGikdbSYAAAAd/sushichaeng-reaction.gif',
    'https://c.tenor.com/TivSQgxo0HsAAAAC/tenor.gif',
    'https://c.tenor.com/KzeE5v8tj_QAAAAC/tenor.gif',
    'https://c.tenor.com/nQh-39IHjZQAAAAd/tenor.gif',
    'https://c.tenor.com/Q6Ovpk7nu4gAAAAC/tenor.gif',
  ];

  const killGifs = ['https://c.tenor.com/i0paJmPwbnwAAAAC/tenor.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXowcnVqNmZmYnZ0N2txaGU5c3o3M3VqbmUzc2toMHRlY2gwdmV0YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PnhOSPReBR4F5NT5so/giphy.gif',
    'https://giphy.com/gifs/3o7TKqtGkUW07hDK9y',
    'https://i.pinimg.com/originals/24/7f/a3/247fa3b2b5165a2f74369d587dedaaf8.gif',
    'https://i.pinimg.com/originals/80/38/cc/8038cc6bd1af6e3383af3c2f9b4d6c16.gif',
    'https://i.pinimg.com/originals/04/35/2b/04352b30e958bf05b9841b41678225c9.gif',
    'https://i.pinimg.com/originals/6d/52/73/6d52732852181a3f4ecf505620b2566c.gif', ];

  const responses = [
    'Es cierto.',
    'Es decididamente así.',
    'Sin lugar a dudas.',
    'Sí, definitivamente.',
    'Puedes confiar en ello.',
    
    'Como yo lo veo, sí.',
    'Lo más probable.',
    'Perspectiva buena.',
    'Sí.',
    'Las señales apuntan a que sí.',
    
    'Respuesta confusa, vuelve a intentarlo.',
    'Vuelve a preguntar más tarde.',
    'Mejor no decirte ahora.',
    'No se puede predecir ahora.',
    'Concéntrate y vuelve a preguntar.',
    
    'No cuentes con ello.',
    'Mi respuesta es no.',
    'Mis fuentes dicen que no.',
    'Las perspectivas no son muy buenas.',
    'Muy dudoso.',
  ];
  

module.exports = {
    boomCommand: (message) => {
        if (message.content.toLowerCase().includes('b!boom')) {
            // Elige aleatoriamente un gif de la lista de URLs
            //
            const availableGifs = boomGifs.filter(gif => !usedGifs.has(gif));
            if (availableGifs.length === 0) {
              // Si se han utilizado todos los gifs, reinicia el conjunto
              usedGifs.clear(); //used
            }
            //const de random gif llamando = al aviable para ver si estan disponibles y al mismo tiempo usar el matfloor random <3
            const randomGif = availableGifs[Math.floor(Math.random() * availableGifs.length)];
        
        
            // Si hay un gif en la lista, envíalo
            if (randomGif) {
              message.channel.send('KBOOOOOM!!! 💣 💣');
              message.channel.send(randomGif);
              usedGifs.add(randomGif); //hacemos uso del used gif
              
            } else {
              message.channel.send("No se pudo encontrar un gif de anime relacionado con Boooomb.");
            }
          }
    },
    fbiCommand: (message) => {
        if (message.content.toLowerCase().includes('b!fbi')) {
            // Elige aleatoriamente un gif que no se haya utilizado recientemente
            const availableGifs = fbiGifs.filter(gif => !usedGifs.has(gif));
            if (availableGifs.length === 0) {
              // Si se han utilizado todos los gifs, reinicia el conjunto
              usedGifs.clear(); //used
            }
            //const de random gif llamando = al aviable para ver si estan disponibles y al mismo tiempo usar el matfloor random <3
            const randomGif = availableGifs[Math.floor(Math.random() * availableGifs.length)];
        
            // Si hay un gif disponible, envíalo y agrega a la lista de gifs utilizados
            if (randomGif) {
              message.channel.send('CONCHATUMARE EL EFEBEI!');
              message.channel.send(randomGif);
              usedGifs.add(randomGif); //hacemos uso del used gif
            } else {
              message.channel.send("No se pudo encontrar un gif de 'fbi'.");
            }
          }
      },
      slapCommand: (message) => {
        if (message.content.toLowerCase().startsWith('b!slap') && message.mentions.users.size > 0) {
            // Obtiene el usuario mencionado
            const targetUser = message.mentions.users.first();
            
            // Elige aleatoriamente un gif de la lista de URLs
            //const randomGif = slapGifs[Math.floor(Math.random() * slapGifs.length)];
            const availableGifs = slapGifs.filter(gif => !usedGifs.has(gif));
        
            if (availableGifs.length === 0) {
              // Si se han utilizado todos los gifs, reinicia el conjunto
              usedGifs.clear(); //used
            }
            //const de random gif llamando = al aviable para ver si estan disponibles y al mismo tiempo usar el matfloor random <3
            const randomGif = availableGifs[Math.floor(Math.random() * availableGifs.length)];
        
        
            // Si hay un gif en la lista, envíalo con un mensaje personalizado
            if (randomGif) {
              message.channel.send(`> <@${message.author.id}> ha golpeado a <@${targetUser.id}> D:!\n`); +
              message.channel.send(randomGif);
              usedGifs.add(randomGif); //hacemos uso del used gif
            } else {
              message.channel.send("No se pudo encontrar un gif de 'slap'.");
            }
          
        }
      },
      uwuCommand: (message) => {
        if (message.content.toLocaleLowerCase().includes("uwu"))
      //responde esto
      message.channel.send('ugu<3');
      },

      sayCommand: (messagee) =>
      {
        if (messagee.content.toLowerCase().includes("b!say"))  {
            // Obtiene el mensaje después del comando
            const messageToRepeat = messagee.content.slice('b!say'.length).trim();
            
            messagee.delete().catch(error => {
              console.error('Error al intentar eliminar el mensaje:', error);
            });
        
        
            // Responde con el mensaje repetido
            messagee.channel.send(`${messageToRepeat}`);
          }
      },

      angryCommand: (message) =>
      {
        if (message.content.toLowerCase().startsWith("b!angry")) {
          const mentionedUser = message.mentions.users.first();
          
          const availableGifs = angryGifs.filter(gif => !usedGifs.has(gif));
            if (availableGifs.length === 0) {
              // Si se han utilizado todos los gifs, reinicia el conjunto
              usedGifs.clear(); //used
            }
            //const de random gif llamando = al aviable para ver si estan disponibles y al mismo tiempo usar el matfloor random <3
            const randomGif = availableGifs[Math.floor(Math.random() * availableGifs.length)];


          if (mentionedUser) {
            // Si se menciona a un usuario, envía un mensaje personalizado
            message.channel.send(` > <@${message.author.id}> Esta enfadadisimx con <@${targetUser.id}> D:!\n`);
            message.channel.send(randomGif);
          } else {
            
        
            // Si hay un gif disponible, envíalo y agrega a la lista de gifs utilizados
            if (randomGif) {
              message.channel.send('Esta enfadaisimx!');
              message.channel.send(randomGif);
              usedGifs.add(randomGif); //hacemos uso del used gif
            } else {
              message.channel.send("No se pudo encontrar un gif de 'Angry'.");
            }
          }
        }
      },
      killCommand: (message) =>
      {
        if (message.content.toLowerCase().startsWith("b!kill")) {
          const mentionedUser = message.mentions.users.first();
          
          const availableGifs = killGifs.filter(gif => !usedGifs.has(gif));
            if (availableGifs.length === 0) {
              // Si se han utilizado todos los gifs, reinicia el conjunto
              usedGifs.clear(); //used
            }
            //const de random gif llamando = al aviable para ver si estan disponibles y al mismo tiempo usar el matfloor random <3
            const randomGif = availableGifs[Math.floor(Math.random() * availableGifs.length)];


          if (mentionedUser) {
            // Si se menciona a un usuario, envía un mensaje personalizado
            message.channel.send(` > <@${message.author.id}> Mató a ${mentionedUser}`);
            message.channel.send(randomGif);
          } else {
            
        
            // Si hay un gif disponible, envíalo y agrega a la lista de gifs utilizados
            if (randomGif) {
              message.channel.send('¡¡ QUIERE MATAR !!');
              message.channel.send(randomGif);
              usedGifs.add(randomGif); //hacemos uso del used gif
            } else {
              message.channel.send("No se pudo encontrar un gif de 'kill'.");
            }
          }
        }
      },
      

                        //ADMIN

      addcolorolesCommand: ('message', async message  =>
      {
        if (message.content.toLowerCase() === 'b!addcoloroles') {
            // Verifica si el usuario que envió el mensaje es un administrador
            if (message.member.permissions.has('ADMINISTRATOR')) {
              try {
                // Pide al usuario que ingrese la cantidad deseada de roles y colores
                await message.author.send('¿Cuántos roles con colores deseas agregar?');
        
                const collector = message.author.dmChannel.createMessageCollector({
                  filter: response => message.author.id === response.author.id,
                  time: 60000, // 60 segundos para responder
                });
        
                collector.on('collect', async collected => {
                  const numRoles = parseInt(collected.content);
                  
                  if (isNaN(numRoles) || numRoles <= 0) {
                    await message.author.send('Por favor, ingresa un número válido mayor que 0.');
                    return;
                  }
        
                  // Crear roles y asignar colores
                  for (let i = 1; i <= numRoles; i++) {
                    const roleName = `Color${i}`;
                    const roleColor = Math.floor(Math.random() * 16777215); // Color hexadecimal aleatorio
        
                    // Crea el rol
                    const role = await message.guild.roles.create({
                      name: roleName,
                      color: roleColor,
                    });
        
                    await message.author.send(`Rol creado: ${role.name} - Color: ${role.hexColor}`);
                  }
        
                  await message.author.send('Roles con colores creados exitosamente.');
                  collector.stop();
                });
        
                collector.on('end', collected => {
                  if (collected.size === 0) {
                    message.author.send('Tiempo de espera agotado. Por favor, vuelve a ejecutar el comando.');
                  }
                });
              } catch (error) {
                console.error(`Error al ejecutar el comando: ${error.message}`);
                message.author.send('Hubo un error al ejecutar el comando. Por favor, inténtalo nuevamente.');
              }
            } else {
              message.author.send('No tienes permisos de administrador para ejecutar este comando.');
            }
          }
      }),

      kickCommand: ('message',async message => 
      {
        if (message.content.toLowerCase().startsWith('b!kick')) {
            // Verifica si el usuario que envió el mensaje es un administrador
            if (message.member.permissions.has('ADMINISTRATOR')) {
              try {
                // Verifica si se menciona a un usuario en el mensaje
                const targetUser = message.mentions.members.first();
        
                if (!targetUser) {
                  await message.author.send('Por favor, menciona a un usuario que deseas expulsar.');
                  return;
                }
        
                // Expulsa al usuario del servidor
                await targetUser.kick();
        
                await message.author.send(`Usuario expulsado: ${targetUser.user.tag}`);
              } catch (error) {
                console.error(`Error al ejecutar el comando: ${error.message}`);
                message.author.send('Hubo un error al ejecutar el comando. Por favor, inténtalo nuevamente.');
              }
            } else {
              message.author.send('No tienes permisos de administrador para ejecutar este comando.');
            }
          }
      }),

      warnCommand: (message) =>
      {
        if (message.content.toLowerCase().startsWith('b!warn')) {
            // Verifica si el usuario que envió el mensaje es un administrador
            if (message.member.permissions.has('ADMINISTRATOR')) {
              try {
                // Verifica si se menciona a un usuario en el mensaje
                const targetUser = message.mentions.members.first();
        
                if (!targetUser) {
                  message.author.send('Por favor, menciona a un usuario al que desees dar una advertencia.');
                  return;
                }
        
                // Incrementa el contador de advertencias para el usuario
                const userWarnings = warningsMap.get(targetUser.id) || 0;
                warningsMap.set(targetUser.id, userWarnings + 1);
        
                // Muestra el número de advertencias y advierte si es necesario
               message.channel.send(`Usuario advertido: <@${targetUser.id}> - Advertencias: ${userWarnings + 1}`);
                message.channel.send(" ``` Motivo: Chupatulaaa ``` ");
                
                // Verifica si el usuario ha alcanzado el límite de advertencias antes de aplicar un ban
                if (userWarnings + 1 >= 3) {
                  // Aplica un ban al usuario
                  targetUser.ban();
                  message.author.send(`Usuario baneado: ${targetUser.user.tag} - Razón: 3 advertencias.`);
                  
                  // Reinicia el contador de advertencias después de un ban
                  warningsMap.delete(targetUser.id);
                }
              } catch (error) {
                console.error(`Error al ejecutar el comando: ${error.message}`);
                message.author.send('Hubo un error al ejecutar el comando. Por favor, inténtalo nuevamente.');
              }
            } else {
              message.author.send('No tienes permisos de administrador para ejecutar este comando.');
            }
          }
      },

      unwarnCommand: (message) => {
        if (message.content.toLowerCase().startsWith('b!warn')) {
            // ... (código existente para el comando de advertencia)
          } else if (message.content.toLowerCase().startsWith('b!unwarn')) {
            // Verifica si el usuario que envió el mensaje es un administrador
            if (message.member.permissions.has('ADMINISTRATOR')) {
              try {
                // Verifica si se menciona a un usuario en el mensaje
                const targetUser = message.mentions.members.first();
        
                if (!targetUser) {
                  message.author.send('Por favor, menciona a un usuario al que desees quitar una advertencia.');
                  return;
                }
        
                // Verifica si el usuario tiene advertencias
                if (!warningsMap.has(targetUser.id) || warningsMap.get(targetUser.id) === 0) {
                  message.author.send('El usuario no tiene advertencias.');
                  return;
                }
        
                // Decrementa el contador de advertencias para el usuario
                const userWarnings = warningsMap.get(targetUser.id);
                warningsMap.set(targetUser.id, userWarnings - 1);
        
                // Muestra el número actualizado de advertencias
                message.channel.send(`Advertencia eliminada para ${targetUser.user.tag} - Advertencias restantes: ${Math.max(userWarnings - 1, 0)}`);
              } catch (error) {
                console.error(`Error al ejecutar el comando: ${error.message}`);
                message.author.send('Hubo un error al ejecutar el comando. Por favor, inténtalo nuevamente.');
              }
            } else {
              message.author.send('No tienes permisos de administrador para ejecutar este comando.');
            }
          }
      },

      banCommand: (message) =>
      {
        if (!message.content.toLocaleLowerCase().startsWith('b!ban') || !message.member || !message.member.permissions.has('BAN_MEMBERS')) {
          return;
        }
      
        // Obtiene las menciones de usuarios en el mensaje
        const menciones = message.mentions.users;
      
        // Verifica si hay al menos una mención de usuario
        if (menciones.size === 0) {
          message.reply('Debes mencionar al usuario que quieres banear.');
          return;
        }
      
        // Itera sobre las menciones y banea a cada usuario
        menciones.forEach((usuario) => {
          // Obtiene el miembro del servidor correspondiente a la mención
          const miembro = message.guild.members.cache.get(usuario.id);
      
          // Verifica si el miembro existe y si se puede banear
          if (miembro) {
            // Banear al usuario
            miembro.ban({ reason: 'Razón del ban.' })
              .then(() => {
                message.channel.send(`Usuario <@${targetUser.id}> ha sido baneado.`);
              })
              .catch((error) => {
                console.error(error);
                message.channel.send(`No se pudo banear a ${miembro.user.tag}.`);
              });
          } else {
            message.channel.send(`No se encontró al usuario ${usuario.tag} en el servidor.`);
          }
        })
      },

      unbanCommand : (message) => {
        if (!message.content.startsWith('b!unban') || !message.member || !message.member.permissions.has('BAN_MEMBERS')) {
          return;
        }
      
        // Comando b!unban
        if (message.content.startsWith(`b!unban`)) {
          // Obtiene la ID del usuario que se desea desbanear del mensaje
          const args = message.content.split(' ');
          const userId = args[1];
      
          // Verifica si se proporcionó una ID de usuario válida
          if (!userId || isNaN(userId)) {
            message.reply('Debes proporcionar la ID de un usuario para desbanear.');
            return;
          }
      
          // Desbanea al usuario
          message.guild.bans.fetch()
            .then((bans) => {
              const bannedUser = bans.find((ban) => ban.user.id === userId);
      
              if (bannedUser) {
                message.guild.bans.remove(bannedUser.user)
                  .then(() => {
                    message.channel.send(`Usuario ${bannedUser.user.tag} ha sido desbaneado.`);
                  })
                  .catch((error) => {
                    console.error(error);
                    message.channel.send(`No se pudo desbanear al usuario ${userId}.`);
                  });
              } else {
                message.channel.send(`El usuario con la ID ${userId} no está actualmente baneado.`);
              }
            })
            .catch((error) => {
              console.error(error);
              message.channel.send('Error al recuperar la lista de baneos.');
            });
        }
      },
      

      // COMANDOS DIVERTIDOS
      /*8ball achievement ascii bigtext cat choose coinflip
      confession esay horoscope husbando license love machievement meme nekogirl note ranime 
      rate reverse roll rps say trash triggered trump waifu*/


      eballCommand: (message) => {
        if (message.content.toLowerCase().startsWith('b!8ball')) {
          // Obtiene la pregunta del usuario
          const question = message.content.slice('b!8ball'.length).trim();
      
          // Verifica si se proporcionó una pregunta
          if (!question) {
            return message.reply('¡Debes hacer una pregunta para el 8ball!');
          }
      
          // Obtiene una respuesta aleatoria del 8ball
          const response = get8ballResponse();
      
          // Envía la respuesta al canal
          message.channel.send(`La repuesta a tu pregunta esss: ${response}`);
        }
      },
      
      achievementCommand: (message) => {
        if (message.content.toLowerCase().startsWith('b!achievement')) {
    // Obtiene el texto del logro del usuario
    const achievementText = message.content.slice('b!achievement'.length).trim();

    // Verifica si se proporcionó un texto para el logro
    if (!achievementText) {
      return message.reply('¡Debes especificar un texto para el logro!');
    }

    // Verifica la longitud del texto del logro
    if (achievementText.length > 40) {
      return message.reply('El texto del logro no puede tener más de 40 caracteres.');
    }

    // Construye el mensaje del logro al estilo XBOX
    const achievementMessage = `🏆 ¡Logro desbloqueado! 🏆\n\n**${achievementText}**`;

    // Envía el mensaje del logro al canal
    message.channel.send(achievementMessage);
      } 
  },

  asciiCommand: (message) =>
  {
    if (message.content.toLowerCase().startsWith('b!ascii')) {
      // Obtiene el texto a convertir en ASCII
      const textToConvert = message.content.slice('b!ascii'.length).trim();
  
      // Verifica si se proporcionó un texto para la conversión
      if (!textToConvert) {
        return message.reply('¡Debes especificar un texto para la conversión ASCII!');
      }
  
      // Verifica la longitud del texto para la conversión
      if (textToConvert.length > 30) {
        return message.reply('El texto para la conversión no puede tener más de 30 caracteres.');
      }
  
      // Convierte el texto a ASCII usando la biblioteca figlet
      figlet.text(textToConvert, async (error, asciiArt) => {
        if (error) {
          console.error('Error al convertir a ASCII:', error);
          return message.reply('¡Hubo un error al convertir el texto a ASCII!');
        }
  
        // Envía el arte ASCII al canal
        message.channel.send(`\`\`\`\n${asciiArt}\n\`\`\``);
      });
    }
  },
  

   catCommand: async (message) => 
   {
    if (message.content.toLowerCase().includes('b!cat')) {
      // Elige aleatoriamente un gif de la lista de URLs
      //
      const availableGifs = catGifs.filter(gif => !usedGifs.has(gif));
      if (availableGifs.length === 0) {
        // Si se han utilizado todos los gifs, reinicia el conjunto
        usedGifs.clear(); //used
      }
      //const de random gif llamando = al aviable para ver si estan disponibles y al mismo tiempo usar el matfloor random <3
      const randomGif = availableGifs[Math.floor(Math.random() * availableGifs.length)];
  
  
      // Si hay un gif en la lista, envíalo
      if (randomGif) {
        message.channel.send('MIAU');
        message.channel.send(randomGif);
        usedGifs.add(randomGif); //hacemos uso del used gif
        
      } else {
        message.channel.send("ERROR 302");
      }
    }
  },
   

}