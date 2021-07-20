/* eslint-disable linebreak-style */
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'ping',
    description: 'Shows Ping',
    aliases: [],
    guildOnly: false,
    args: false,
    usage: '',
    ownerOnly: true,
    execute: async (message, args, client) => {
        const msg = await message.channel.send('Pinging...');
        let clientStats = stripIndent`
           Gateway Ping : ${Math.round(message.client.ws.ping)}ms
           REST Ping    : ${msg.createdTimestamp - message.createdTimestamp}ms
           `;

        const embed = client.util
            .embed()
            .setAuthor(
                ' |   Pong',
                message.author.displayAvatarURL({ dynamic: true })
            )
            .setDescription(`\`\`\`nim\n${clientStats}\`\`\``);
        msg.edit('', embed);
    }
};