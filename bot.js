const Discord = require('discord.js')
const bot = new Discord.Client()
const PREFIX = '!'

bot.on('ready', () => {
  console.log('Ready')
})

bot.login(process.env.BOT_TOKEN)

bot.on('message', function (message) {
  if (message.author.equals(bot.user)) return

  if (!message.content.startsWith(PREFIX)) return

  var args = message.content.substring(PREFIX.length).split(' ')

  switch (args[0].toLowerCase()) {
    case 'ping':
      message.channel.send('Pong!')
      break
    case 'info':
      message.channel.send('A bot created by Krusader, on 07/09/2017.')
      break
    case 'Block':
      message.channel.send('A player with Block is not Knocked Down on a Both Down Result from a Block action.')
      break
    case 'Dauntless':
      message.channel.send(' If the player attempts to block an opponent who is stronger than themselves and they successfully roll higher than the Strength of their opponent (rolling D6 + their strength), they will be considered to have the same strength for this Block.')
      break
	case 'Dirty Player':
      message.channel.send('Add 1 to an Armor or Injury roll made by a player with this skill when they make a Foul.')
      break
	case 'Fend':
      message.channel.send('Opposing players may not follow up blocks made against this player, even if the player with Fend is knocked down')
      break
	case 'Frenzy':
      message.channel.send('A player with Frenzy must always follow up after throwing a Block at an opposing player. In addition, they must make a second block against the same opponent if the first result was Pushed Back.')
      break
	case 'Kick':
      message.channel.send('The ball will scatter half as much as usual. The player must be in the pitch at kick-off, but not on the wide zone or on the line of scrimmage.')
      break
	case 'Kick-off return':
      message.channel.send('A player on the receiving team, not on the line of scrimmage or in a tackle zone, may move up to 3 squares at kick-off. Only one player can use this skill at each kick-off.')
      break
	case 'Pass Block':
      message.channel.send('A player may move up to 3 squares to attempt an interception or otherwise hamper a Pass move declared by the opponent. This is a free move out of turn, but it follows all the normal rules for moving, dodging, etc.')
      break
	case 'Pro':
      message.channel.send('once per turn the player may make a 4+ Roll to re-roll a failed action.')
      break
	case 'Shadowing':
      message.channel.send('a player with Shadowing may attempt to follow an opposing player who dodges out of their tackle zone. ( dodging unit MA ) - ( enemy unit MA ) + 2D6.If the final result is 7 or less they move into the square vacated by the opposing player. No dodge rolls are required for this action. A player may make any number of shadowing moves per turn. If the final result is 8 or more avoid Shadowing.')
      break
	case 'Strip Ball':
      message.channel.send('When a player with this skill pushes an opposing player during a Block, they will cause the opposing player to drop the ball in square they are pushed back to, even if the opposing player is not Knocked Down.')
      break
	case 'Sure Hands':
      message.channel.send('A player with Sure Hands is allowed to re-roll the result if they fail to pick up the ball. In addition, the Strip Ball skill does not work against a player with this skill.')
      break
	case 'Tackle':
      message.channel.send('Opposing player may not use their Dodge skill when attempting to dodge out of this players tackle zone, nor may they use their Dodge skill if the player blocks if the player chooses to use Tackle.')
      break
	case 'Wrestle':
      message.channel.send('AA player with Wrestle may choose to ignore a Both Down result during a block by placing both the players prone, but no Armor rolls are made. In addition, this does not cause a turnover.')
      break
	
	  }
})