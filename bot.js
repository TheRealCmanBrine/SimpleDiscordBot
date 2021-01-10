const {Client,MessageEmbed} = require('discord.js');
const client = new Client();
const config = require('./config.json');
const channel = config.channel;
const prefix = config.prefix
const inv = config.invlink
client.login(config.token);
const request = require("request");
const cheerio = require("cheerio");
const QueryString = require(`qs`);
const fs = require('fs');


client.on('ready', () => {
  console.clear
  console.log(`Client has logged in with user ID ${client.user.tag}`);
  client.user.setActivity(`${prefix}help`, {
    type: 'LISTENING'
  });
});



client.on('message', message => {
  if (message.content.includes('😏')) {
    message.react('😏')
  }
})



client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();



  if (command === 'help' || command === 'info' || command === 'commands' || command === 'halp') {
    const Embed = new MessageEmbed()
      .setColor(randomembedcolor())
      .setTitle('Bot Commands')
      .setDescription('```' + prefix + 'mcskin <username> <head/face/body>```\n```' + prefix + 'penis <@user>```\n```' + prefix + 'pfp <@username>```\n```' + prefix + 'poll <content> <option1> <option2>```\n```' + prefix + 'randomsentence```\n```' + prefix + 'randomimg```\n```' + prefix + 'randomnumber <length>```\n```' + prefix + 'invitebot```\n```' + prefix + 'rate <@username>```')
    message.channel.send(Embed)
  }
  else if (command === 'mcskin' || command === 'mincraftskin' || command === 'mcavatar' || command === 'skin') {
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + prefix + command + ' <username> <head/body/face> \n (not case sensitive)')
      message.channel.send(Embed)
    }
    else {
      if (args[1] === 'head') {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(args[0] + "'s " + command)
          .setURL('https://mine.ly/' + args[0])
          .setDescription('**(hint) Click Title For NameMC**')
          .setImage('https://mc-heads.net/head/' + args[0])
        message.channel.send(Embed);
      }
      else if (args[1] === 'body') {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(args[0] + "'s " + command)
          .setURL('https://mine.ly/' + args[0])
          .setDescription('**(hint) Click Title For NameMC**')
          .setImage('https://mc-heads.net/body/' + args[0])
        message.channel.send(Embed);
      }
      else if (args[1] === 'face') {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(args[0] + "'s " + command)
          .setURL('https://mine.ly/' + args[0])
          .setDescription('**(hint) Click Title For NameMC**')
          .setImage('https://mc-heads.net/avatar/' + args[0])
        message.channel.send(Embed);
      }
      else if (!args[1]) {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + prefix + command + ' <username> <head/body/face> \n You provided a username, but not a type!')
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + prefix + command + ' <username> <head/body/face> \n (not case sensitive)')
        message.channel.send(Embed)
      }
    }
  }
  else if (command === 'pp' || command === 'penis' || command === 'dick' || command === 'balls') {
    if (!args.length) {
      const items = [
        "**()**",
        "**8==D**",
        "**8===D**",
        "**8====D**",
        "**8=====D**",
        "**8======D**",
        "**8=======D**",
        "**8========D**",
        "**8=========D**",
        "**8===========D**",
        "**8============D**",
        "**8=============D**",
        "**8==============D**",
        "**8===============D**",
        "**8================D**",
        "**8=================D**",
      ]
      var item = items[Math.floor(Math.random() * items.length)];
      const Embed = new MessageEmbed()
        .setColor(randomembedcolor())
        .setTitle(message.author.username + `'s ` + command)
        .setDescription(item)
      message.channel.send(Embed)

    }
    else {
      const user = getUserFromMention(args[0]);
      if (!user) {

      }
      else {
        const items = [
          "**()**",
          "**8==D**",
          "**8===D**",
          "**8====D**",
          "**8=====D**",
          "**8======D**",
          "**8=======D**",
          "**8========D**",
          "**8=========D**",
          "**8===========D**",
          "**8============D**",
          "**8=============D**",
          "**8==============D**",
          "**8===============D**",
          "**8================D**",
          "**8=================D**",
        ]
        var item = items[Math.floor(Math.random() * items.length)];
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(user.username + `'s ` + command)
          .setDescription(item)
        message.channel.send(Embed)
      }
    }
  }
  else if (command === 'avatar' || command === 'pfp') {
    if (!args.length) {
      const user = message.author
      if (!user) {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + prefix + command + ' <username>')
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(`${user.username}'s ${command}`)
          .setURL(user.displayAvatarURL({
            dynamic: true
          }))
          .setImage(user.displayAvatarURL({
            dynamic: true
          }))
        message.channel.send(Embed);
      }
    }
    else {
      const user = getUserFromMention(args[0]);
      if (!user) {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + prefix + command + ' <username>')
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(`${user.username}'s ${command}`)
          .setURL(user.displayAvatarURL({
            dynamic: true
          }))
          .setImage(user.displayAvatarURL({
            dynamic: true
          }))
        message.channel.send(Embed);
      }
    }
  }
  else if (command === 'poll') {
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + prefix + command + ' <content> <option1> <option2>')
      message.channel.send(Embed)
    }
    else if (!args[1] || !args[2]) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + prefix + command + ' <content> <option1> <option2>')
      message.channel.send(Embed)
    }
    else {


      const embed = new MessageEmbed()
        .setColor(randomembedcolor())
        .setDescription('▬▬▬▬▬▬▬▬▬**«    Poll    »**▬▬▬▬▬▬▬▬▬\n' + message.content.slice(command.length += 1) + '\n▬▬▬▬▬▬▬**«    @everyone    »**▬▬▬▬▬▬▬▬ ')
        .setFooter(message.author.username, client.user.avatarURL)
      message.channel.send(embed).then(sentEmbed => {
        sentEmbed.react("👍")
        sentEmbed.react("👎")
        sentEmbed.react("✅")
        sentEmbed.react("❎")
        sentEmbed.react("😐")
      })
    }
  }
  else if (command === 'sentence' || command === 'sen' || command === 'randomsentence' || command === 's') {
    const SENTENCEGEN_URL = "https://randomword.com/sentence";
    request(SENTENCEGEN_URL, (err, response, body) => {
      const $ = cheerio.load(body);
      var rans = ($("#random_word").text());
      const Embed = new MessageEmbed()
        .setColor(randomembedcolor())
        .setTitle('Random Sentence')
        .setDescription(rans)
      message.channel.send(Embed)
    })
  }
  else if (command === 'img' || command === 'i' || command === 'image' || command === 'randomimg') {
    const Embed = new MessageEmbed()
      .setColor(randomembedcolor())
      .setTitle('Random Image')
      .setImage('https://picsum.photos/' + makeid(3) + '/' + makeid(3))
    message.channel.send(Embed)
  }
  else if (command === 'randomnumber' || command === 'number' || command === 'rng' || command === 'generatenumber' || command === 'n') {
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + prefix + command + ' <length>')
      message.channel.send(Embed)
    }
    else {
      if (args[0] <= 100) {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle('Random Number')
          .setDescription(makeid(isNumeric(args[0])))
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + prefix + command + ' <length> \n (you can\'t enter a number larger than 100)')
        message.channel.send(Embed)
      }
    }
  }
  else if (command === 'invite' || command === 'inv' || command === 'invitebot') {
    const Embed = new MessageEmbed()
      .setColor(randomembedcolor())
      .setTitle('Invite Me To A Server!')
      .setURL(inv)
      .setDescription('Click the link above to invite this bot to any server you have permissions to do so in.')
    message.channel.send(Embed)
  }
  else if (command === 'rate' || command === 'rateuser') {
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor(randomembedcolor())
        .setTitle(message.author.username + `'s ` + command)
        .setDescription(`${message.author.username} is ${makeid(2)}/100`)
      message.channel.send(Embed)
    }
    else {
      const user = getUserFromMention(args[0]);
      if (!user) {
        const Embed = new MessageEmbed()
          .setColor('#ff0000')
          .setTitle('Incorrect Usage!')
          .setDescription('Usage: ' + prefix + command + ' <@username>')
        message.channel.send(Embed)
      }
      else {
        const Embed = new MessageEmbed()
          .setColor(randomembedcolor())
          .setTitle(user.username + `'s ` + command)
          .setDescription(`${user.username} is ${makeid(2)}/100`)
        message.channel.send(Embed)
      }
    }
  }
  else if (command === '_______') {
    ////////////////////////////////
    if (!args.length) {
      const Embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Incorrect Usage!')
        .setDescription('Usage: ' + prefix + command + ' <> <> <>')
      message.channel.send(Embed)
    }
    else {
      ////////////////////////////////
      message.channel.send(`${args[0]} ${args[1]} ${args[2]}`)
      ////////////////////////////////
    }
  }

})


function getUserFromMention(mention) {
  if (!mention) return;

  if (mention.startsWith('<@') && mention.endsWith('>')) {
    mention = mention.slice(2, -1);

    if (mention.startsWith('!')) {
      mention = mention.slice(1);
    }

    return client.users.cache.get(mention);
  }
}



function randomembedcolor() {
  var embedcolors = [
    "ff0000",
    "ff7000",
    "ffd600",
    "d6ff00",
    "47ff00",
    "00ff99",
    "00ffeb",
    "008fff",
    "0029ff",
    "4700ff",
    "ad00ff",
    "ff00eb",
    "ff0066",
    "ff003d",
    "491200",
    "f79401",
    "f7ed01",
    "a8f701",
    "8cf859",
    "43c596",
    "4391c5",
    "4352c5",
    "8c43c5",
    "c543c0",
    "c54377",
    "441010",
    "442710",
    "444010",
    "2b4410",
    "104421",
    "104044",
    "101744",
    "2b1044",
    "441044"
  ]
  var randomcolor = embedcolors[Math.floor(Math.random() * embedcolors.length)];
  return `0x` + randomcolor
}

function makeid(length) {
  var result = '';
  var characters = '123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



function isNumeric(num) {
  if (!isNaN(num)) {
    return (num)
  }
  else {
    return (1)
  }
}