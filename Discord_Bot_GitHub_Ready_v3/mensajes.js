// Lista de URLs directos a gifs de FBI
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
  
  //const de gifs usados, para setearlos y hacer que en su mayoría no se repitan 
  const usedGifs = new Set();
  
  client.on('messageCreate', async message => {
    // Verifica si el mensaje contiene la palabra "fbi"
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
  });
  
  // client.on('messageCreate', message => {
  //   // Verifica si el mensaje contiene la palabra "fbi"
  //   if (message.content.toLowerCase().includes('fbi')) {
  //     // Elige aleatoriamente un gif de la lista de URLs
  //     const randomGif = fbiGifs[Math.floor(Math.random() * fbiGifs.length)];
  
  //     // Si hay un gif en la lista, envíalo
  //     if (randomGif) {
  //       message.channel.send('CONCHATUMARE EL EFEBEI!');
  //       message.channel.send(randomGif);
        
  //     } else {
  //       message.channel.send("No se pudo encontrar un gif de anime relacionado con FBI.");
  //     }
  //   }
  // });
  
  //booms explotaaaaaaaaa
  const boomGifs = [
    'https://cdn.discordapp.com/attachments/399448944889036801/698601161414017275/7cc004a33044f1d83dbcba6fe680f673.gif?ex=65ac1188&is=65999c88&hm=d096e907bbd02f1f319ab5291a5da69023a12fab61843cdb022570219c6d98da&',
    'https://cdn.discordapp.com/attachments/399448944889036801/550388098635137024/5734435372fb877e8f1912814b6f90328b5c53a8_hq.gif?ex=65a8205c&is=6595ab5c&hm=9710ee7011f7cb9665086784024aeb59a6bc2872de90b172910c8647369d6d70&',
    'https://tenor.com/view/forcegate-gif-27315278',
    'https://cdn.discordapp.com/attachments/399448944889036801/550388997814353941/tenor_3.gif?ex=65a82132&is=6595ac32&hm=96cc7306fa260a825578f671a3b82d7e1e2d7ef4ba0dcc3c3a760b0020fcf691&',
    'https://cdn.discordapp.com/attachments/399448944889036801/651487903998017536/35102faf-8640-4a47-bdf6-d32f1de870bc.gif?ex=65a6c8e4&is=659453e4&hm=fb8579d85f124f48e2cacc1c7fbc3da628d0deb7e0d41253115c3736d6c139b8&',
    'https://cdn.discordapp.com/attachments/399448944889036801/550388091030863883/3770.gif?ex=65b15ada&is=659ee5da&hm=29ff9df5e1e73de85a8bfdac56ceeaf53ad62cc43234eaca07c34ce78fa06612&',
    'https://cdn.discordapp.com/attachments/399448944889036801/550388802410250250/giphy.gif?ex=65b15b84&is=659ee684&hm=874ae00e57b7c6c3fac3bc86bcdb046d7c90194d99018e3f43a8d80374c9b8cc&',
  
  ];
  
  
  
  client.on('messageCreate', message => {
    // Verifica si el mensaje contiene la palabra "Boom!"
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
  });
  
  
  //separacion ahora vamos con lo dificil
  
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
  
  /* const availableGifs = boomGifs.filter(gif => !usedGifs.has(gif));
      if (availableGifs.length === 0) {
        // Si se han utilizado todos los gifs, reinicia el conjunto
        usedGifs.clear(); //used
      }
      //const de random gif llamando = al aviable para ver si estan disponibles y al mismo tiempo usar el matfloor random <3
      const randomGif = availableGifs[Math.floor(Math.random() * availableGifs.length)];
  */
  
  client.on('messageCreate', message => {
    // Verifica si el mensaje contiene el comando "slap" y menciona a un usuario
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
  });
  
  const kissGifs = [
    'https://i.pinimg.com/originals/e9/35/40/e93540a5c88248b8580fe459dad8911a.gif',
    'https://media.tenor.com/yW5hqpEltQAAAAAM/lucabeth-lucas-elizabeth.gif',
  ];
  
  client.on('messageCreate', message => {
    // Verifica si el mensaje contiene el comando "kiss" y menciona a un usuario
    if (message.content.toLowerCase().startsWith('b!kiss') && message.mentions.users.size > 0) {
      // Obtiene el usuario mencionado
      const targetUser = message.mentions.users.first();
  
      // Elige aleatoriamente un gif de la lista de URLs
      const randomGif = kissGifs[Math.floor(Math.random() * kissGifs.length)];
  
      // Si hay un gif en la lista, envíalo con un mensaje personalizado
      if (randomGif) {
        message.channel.send(`<@${message.author.id}> le ha dado un besito a <@${targetUser.id}> D:!\n`);
        message.channel.send(randomGif);
      } else {
        message.channel.send("No se pudo encontrar un gif de 'kiss'.");
      }
    }
  });

  
client.on('messageCreate', async messagee => {
  
    if (messagee.content.toLowerCase().includes("b!ping")) {
      // Responde con 'Pong!' en el mismo canal (servidor)
      messagee.channel.send('Pooong!');
    }
  });
  
  
  client.on('messageCreate', message => {
    
      if (message.content.toLocaleLowerCase().includes("uwu"))
      //responde esto
      message.channel.send('ugu<3');
    
  })
  
  client.on('messageCreate', async messagee => {
    
    if (messagee.content.toLowerCase().includes("b!say"))  {
      // Obtiene el mensaje después del comando
      const messageToRepeat = messagee.content.slice('b!say'.length).trim();
      
      messagee.delete().catch(error => {
        console.error('Error al intentar eliminar el mensaje:', error);
      });
  
  
      // Responde con el mensaje repetido
      messagee.channel.send(`${messageToRepeat}`);
    }
  });



  // seccion admin

  

client.on('messageCreate', async message => {
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
  });
  
  
  client.on('messageCreate', async message => {
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
  });
  
  const warningsMap = new Map();
  
  client.on('messageCreate', message => {
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
          message.channel.send(`Usuario advertido: ${targetUser.user.tag} - Advertencias: ${userWarnings + 1}`);
  
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
  });
  
  
  client.on('messageCreate', message => {
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
  });
  