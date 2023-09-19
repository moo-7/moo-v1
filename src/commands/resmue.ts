import { ChatInputCommandInteraction, Client, Message } from "discord.js";


export const name = 'resume';
export const aliases = [];
export const description = 'Resume paused track';
export const usage = 'resume';
export const voiceChannel = true;
export const showHelp = true;
export const sendTyping = false;
export const options = [];


export const execute = async (client: Client, message: Message) => {
    const player = client.lavashark.getPlayer(message.guild!.id);

    if (!player) {
        return message.reply({ content: '❌ | There is no music currently playing.', allowedMentions: { repliedUser: false } });
    }

    if(!player.paused) {
        return message.reply({ content: '❌ | The music has been resumed.', allowedMentions: { repliedUser: false } });
    }

    const SUCCESS = await player.resume();
    return SUCCESS ? message.react('▶️') : message.react('❌');
}

export const slashExecute = async (client: Client, interaction: ChatInputCommandInteraction) => {
    const player = client.lavashark.getPlayer(interaction.guild!.id);

    if (!player) {
        return interaction.editReply({ content: '❌ | There is no music currently playing.', allowedMentions: { repliedUser: false } });
    }

    if(!player.paused) {
        return interaction.editReply({ content: '❌ | The music has been resumed.', allowedMentions: { repliedUser: false } });
    }

    const SUCCESS = await player.resume();
    return SUCCESS ? interaction.editReply("▶️ | Music resumed.") : interaction.editReply('❌ | Music pause failed.');
}