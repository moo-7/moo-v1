import { ChatInputCommandInteraction, Client, Message } from "discord.js";
import { embeds } from "../embeds";

export const name = 'server';
export const aliases = [];
export const description = 'Show currently active servers';
export const usage = 'server';
export const voiceChannel = false;
export const showHelp = true;
export const sendTyping = false;
export const options = [];

export const execute = async (client: Client, message: Message) => {
    // Check if the message author is the bot owner
    if (message.author.id !== client.config.ownerID) {
        return message.reply("Only the bot owner can use this command.");
    }

    const serverlist = client.guilds.cache
        .map(g => `Guild ID: ${g.id}\n Guild: ${g.name}\n Members: ${g.memberCount}`)
        .join('\n\n');

    return message.reply({
        embeds: [embeds.server(client.config, serverlist)],
        allowedMentions: { repliedUser: false }
    });
}

export const slashExecute = async (client: Client, interaction: ChatInputCommandInteraction) => {
    // Check if the interaction user is the bot owner
    if (interaction.user.id !== client.config.ownerID) {
        return interaction.editReply("Only the bot owner can use this command.");
    }

    const serverlist = client.guilds.cache
        .map(g => `Guild ID: ${g.id}\n Guild: ${g.name}\n Members: ${g.memberCount}`)
        .join('\n\n');

    return interaction.editReply({
        embeds: [embeds.server(client.config, serverlist)],
        allowedMentions: { repliedUser: false }
    });
}
