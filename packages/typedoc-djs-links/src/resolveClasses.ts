const baseLink = 'https://discord.js.org/#/docs/discord.js/main/class';

const knownClasses = new Set([
	'ActionRow',
	'ActionRowBuilder',
	'Activity',
	'ActivityFlagsBitField',
	'AnonymousGuild',
	'Application',
	'ApplicationCommand',
	'ApplicationCommandManager',
	'ApplicationCommandPermissionsManager',
	'ApplicationFlagsBitField',
	'ApplicationRoleConnectionMetadata',
	'Attachment',
	'AttachmentBuilder',
	'AutocompleteInteraction',
	'AutoModerationActionExecution',
	'AutoModerationRule',
	'AutoModerationRuleManager',
	'Base',
	'BaseChannel',
	'BaseClient',
	'BaseGuild',
	'BaseGuildEmoji',
	'BaseGuildEmojiManager',
	'BaseGuildTextChannel',
	'BaseGuildVoiceChannel',
	'BaseInteraction',
	'BaseManager',
	'BaseSelectMenuComponent',
	'BitField',
	'ButtonBuilder',
	'ButtonComponent',
	'ButtonInteraction',
	'CachedManager',
	'CategoryChannel',
	'CategoryChannelChildManager',
	'ChannelFlagsBitField',
	'ChannelManager',
	'ChannelSelectMenuBuilder',
	'ChannelSelectMenuComponent',
	'ChannelSelectMenuInteraction',
	'ChatInputCommandInteraction',
	'Client',
	'ClientApplication',
	'ClientPresence',
	'ClientUser',
	'ClientVoiceManager',
	'Collector',
	'CommandInteraction',
	'CommandInteractionOptionResolver',
	'Component',
	'ContextMenuCommandInteraction',
	'DataManager',
	'DirectoryChannel',
	'DMChannel',
	'Embed',
	'EmbedBuilder',
	'Emoji',
	'Formatters',
	'ForumChannel',
	'Guild',
	'GuildApplicationCommandManager',
	'GuildAuditLogs',
	'GuildAuditLogsEntry',
	'GuildBan',
	'GuildBanManager',
	'GuildChannel',
	'GuildChannelManager',
	'GuildEmoji',
	'GuildEmojiManager',
	'GuildEmojiRoleManager',
	'GuildForumThreadManager',
	'GuildInviteManager',
	'GuildManager',
	'GuildMember',
	'GuildMemberFlagsBitField',
	'GuildMemberManager',
	'GuildMemberRoleManager',
	'GuildPreview',
	'GuildPreviewEmoji',
	'GuildScheduledEvent',
	'GuildScheduledEventManager',
	'GuildStickerManager',
	'GuildTemplate',
	'GuildTextThreadManager',
	'Integration',
	'IntegrationApplication',
	'IntentsBitField',
	'InteractionCollector',
	'InteractionResponse',
	'InteractionWebhook',
	'Invite',
	'InviteGuild',
	'InviteStageInstance',
	'LimitedCollection',
	'MentionableSelectMenuBuilder',
	'MentionableSelectMenuComponent',
	'MentionableSelectMenuInteraction',
	'Message',
	'MessageCollector',
	'MessageComponentInteraction',
	'MessageContextMenuCommandInteraction',
	'MessageFlagsBitField',
	'MessageManager',
	'MessageMentions',
	'MessagePayload',
	'MessageReaction',
	'ModalBuilder',
	'ModalSubmitFields',
	'ModalSubmitInteraction',
	'NewsChannel',
	'OAuth2Guild',
	'Options',
	'PartialGroupDMChannel',
	'PermissionOverwriteManager',
	'PermissionOverwrites',
	'PermissionsBitField',
	'Presence',
	'PresenceManager',
	'ReactionCollector',
	'ReactionEmoji',
	'ReactionManager',
	'ReactionUserManager',
	'RichPresenceAssets',
	'Role',
	'RoleManager',
	'RoleSelectMenuBuilder',
	'RoleSelectMenuComponent',
	'RoleSelectMenuInteraction',
	'SelectMenuBuilder',
	'SelectMenuComponent',
	'SelectMenuInteraction',
	'SelectMenuOptionBuilder',
	'Shard',
	'ShardClientUtil',
	'ShardingManager',
	'StageChannel',
	'StageInstance',
	'StageInstanceManager',
	'Sticker',
	'StickerPack',
	'StringSelectMenuBuilder',
	'StringSelectMenuComponent',
	'StringSelectMenuInteraction',
	'StringSelectMenuOptionBuilder',
	'Sweepers',
	'SystemChannelFlagsBitField',
	'Team',
	'TeamMember',
	'TextChannel',
	'TextInputBuilder',
	'TextInputComponent',
	'ThreadChannel',
	'ThreadManager',
	'ThreadMember',
	'ThreadMemberFlagsBitField',
	'ThreadMemberManager',
	'Typing',
	'User',
	'UserContextMenuCommandInteraction',
	'UserFlagsBitField',
	'UserManager',
	'UserSelectMenuBuilder',
	'UserSelectMenuComponent',
	'UserSelectMenuInteraction',
	'VoiceChannel',
	'VoiceRegion',
	'VoiceState',
	'VoiceStateManager',
	'Webhook',
	'WebhookClient',
	'WebSocketManager',
	'WebSocketShard',
	'WelcomeChannel',
	'WelcomeScreen',
	'Widget',
	'WidgetMember'
]);

export function resolveClasses(name: string): string | undefined {
	if (knownClasses.has(name)) {
		return `${baseLink}/${name}`;
	}

	return undefined;
}
