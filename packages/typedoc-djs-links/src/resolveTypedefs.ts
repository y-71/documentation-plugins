const baseLink = 'https://discord.js.org/#/docs/discord.js/main/typedef';

const knownTypeDefs = new Set([
	'ActionRowData',
	'ActionRowModalData',
	'ActivitiesOptions',
	'ActivityOptions',
	'ActivityParty',
	'ActivityTimestamps',
	'AddGuildMemberOptions',
	'AddOrRemoveGuildMemberRoleOptions',
	'ApplicationCommandData',
	'ApplicationCommandDataResolvable',
	'ApplicationCommandOption',
	'ApplicationCommandOptionChoice',
	'ApplicationCommandOptionChoiceData',
	'ApplicationCommandOptionData',
	'ApplicationCommandPermissionIdResolvable',
	'ApplicationCommandPermissions',
	'ApplicationCommandPermissionsEditOptions',
	'ApplicationCommandPermissionsUpdateData',
	'ApplicationCommandResolvable',
	'ApplicationResolvable',
	'ApplicationRoleConnectionMetadataEditOptions',
	'AttachmentData',
	'AttachmentPayload',
	'AuditLogActionType',
	'AuditLogChange',
	'AuditLogEntryTarget',
	'AuditLogTargetType',
	'AutocompleteFocusedOption',
	'AutoModerationAction',
	'AutoModerationActionMetadata',
	'AutoModerationActionMetadataOptions',
	'AutoModerationActionOptions',
	'AutoModerationRuleCreateOptions',
	'AutoModerationRuleEditOptions',
	'AutoModerationRuleResolvable',
	'AutoModerationTriggerMetadata',
	'AutoModerationTriggerMetadataOptions',
	'AwaitMessageComponentOptions',
	'AwaitMessagesOptions',
	'AwaitModalSubmitOptions',
	'AwaitReactionsOptions',
	'BanOptions',
	'Base64Resolvable',
	'BaseApplicationCommandPermissionsOptions',
	'BaseComponentData',
	'BaseFetchOptions',
	'BaseMessageOptions',
	'BitFieldResolvable',
	'BroadcastEvalOptions',
	'BufferResolvable',
	'ButtonComponentData',
	'CacheFactory',
	'CategoryChannelResolvable',
	'CategoryCreateChannelOptions',
	'ChannelFlagsResolvable',
	'ChannelPermissionConstant',
	'ChannelPosition',
	'ChannelResolvable',
	'ChannelWebhookCreateOptions',
	'ClientApplicationInstallParams',
	'ClientFetchInviteOptions',
	'ClientOptions',
	'ClientPresenceStatus',
	'ClientUserEditOptions',
	'CollectorFilter',
	'CollectorOptions',
	'CollectorResetTimerOptions',
	'ColorResolvable',
	'Colors',
	'CommandInteractionOption',
	'CommandInteractionResolvedData',
	'ComponentData',
	'ComponentEmojiResolvable',
	'Constants',
	'CrosspostedChannel',
	'DateResolvable',
	'DefaultReactionEmoji',
	'DeletableMessageTypes',
	'DiscordjsErrorCodes',
	'EmbedAssetData',
	'EmbedAuthorData',
	'EmbedFooterData',
	'EmojiIdentifierResolvable',
	'EmojiResolvable',
	'Events',
	'FetchApplicationCommandOptions',
	'FetchArchivedThreadOptions',
	'FetchAutoModerationRuleOptions',
	'FetchAutoModerationRulesOptions',
	'FetchBanOptions',
	'FetchBansOptions',
	'FetchChannelOptions',
	'FetchedThreads',
	'FetchedThreadsMore',
	'FetchGuildOptions',
	'FetchGuildScheduledEventOptions',
	'FetchGuildScheduledEventsOptions',
	'FetchGuildScheduledEventSubscribersOptions',
	'FetchGuildsOptions',
	'FetchInviteOptions',
	'FetchInvitesOptions',
	'FetchMemberOptions',
	'FetchMembersOptions',
	'FetchMessageOptions',
	'FetchMessagesOptions',
	'FetchReactionUsersOptions',
	'FetchRecommendedShardCountOptions',
	'FetchThreadMemberOptions',
	'FetchThreadMembersOptions',
	'FetchThreadMembersWithGuildMemberDataOptions',
	'FetchThreadMembersWithoutGuildMemberDataOptions',
	'FetchThreadsOptions',
	'FileOptions',
	'GlobalSweepFilter',
	'GuildAuditLogsFetchOptions',
	'GuildBanResolvable',
	'GuildChannelCloneOptions',
	'GuildChannelCreateOptions',
	'GuildChannelEditOptions',
	'GuildChannelOverwriteOptions',
	'GuildChannelResolvable',
	'GuildCreateOptions',
	'GuildEditOptions',
	'GuildEmojiCreateOptions',
	'GuildEmojiEditOptions',
	'GuildForumTag',
	'GuildForumTagData',
	'GuildForumTagEmoji',
	'GuildForumThreadCreateOptions',
	'GuildForumThreadMessageCreateOptions',
	'GuildInvitableChannelResolvable',
	'GuildListMembersOptions',
	'GuildMemberEditOptions',
	'GuildMemberFlagsResolvable',
	'GuildMemberResolvable',
	'GuildMembersChunk',
	'GuildPruneMembersOptions',
	'GuildResolvable',
	'GuildRolePosition',
	'GuildScheduledEventCreateOptions',
	'GuildScheduledEventEditOptions',
	'GuildScheduledEventEntityMetadata',
	'GuildScheduledEventEntityMetadataOptions',
	'GuildScheduledEventInviteURLCreateOptions',
	'GuildScheduledEventResolvable',
	'GuildScheduledEventUser',
	'GuildSearchMembersOptions',
	'GuildStickerCreateOptions',
	'GuildStickerEditOptions',
	'GuildTemplateEditOptions',
	'GuildTemplateResolvable',
	'GuildTextBasedChannel',
	'GuildTextBasedChannelTypes',
	'GuildTextChannelResolvable',
	'GuildVoiceChannelResolvable',
	'GuildWidgetSettings',
	'GuildWidgetSettingsData',
	'HasApplicationCommandPermissionsOptions',
	'IntegrationAccount',
	'IntegrationType',
	'IntentsResolvable',
	'InteractionCollectorOptions',
	'InteractionDeferReplyOptions',
	'InteractionDeferUpdateOptions',
	'InteractionEditReplyOptions',
	'InteractionReplyOptions',
	'InteractionUpdateOptions',
	'InviteCreateOptions',
	'InviteGenerationOptions',
	'InviteResolvable',
	'LifetimeFilterOptions',
	'LimitedCollectionOptions',
	'Locale',
	'MakeErrorOptions',
	'MaxBulkDeletableMessageAge',
	'MessageActionRowComponent',
	'MessageActivity',
	'MessageCollectorOptions',
	'MessageComponentCollectorOptions',
	'MessageComponentData',
	'MessageCreateOptions',
	'MessageEditOptions',
	'MessageInteraction',
	'MessageMentionOptions',
	'MessageMentionsHasOptions',
	'MessageMentionTypes',
	'MessagePayloadOption',
	'MessageReactionResolvable',
	'MessageReference',
	'MessageReplyOptions',
	'MessageResolvable',
	'MessageTarget',
	'ModalComponentData',
	'ModalData',
	'MultipleShardRespawnOptions',
	'MultipleShardSpawnOptions',
	'NonSystemMessageTypes',
	'OverwriteData',
	'OverwriteResolvable',
	'PartialChannelData',
	'PartialOverwriteData',
	'PartialRecipient',
	'PartialRoleData',
	'Partials',
	'PermissionOverwriteOptions',
	'PermissionResolvable',
	'PresenceData',
	'PresenceResolvable',
	'PresenceStatus',
	'PresenceStatusData',
	'RawEmoji',
	'RawOverwriteData',
	'ReactionCollectorOptions',
	'RemoveApplicationCommandPermissionsOptions',
	'ReplyOptions',
	'ResolvedFile',
	'ResolvedOverwriteOptions',
	'RoleCreateOptions',
	'RoleData',
	'RoleEditOptions',
	'RolePermissionConstant',
	'RoleResolvable',
	'RoleSubscriptionData',
	'SelectMenuComponentData',
	'SelectMenuComponentOptionData',
	'SelectMenuTypes',
	'SetChannelPositionOptions',
	'SetParentOptions',
	'SetRolePositionOptions',
	'ShardEvents',
	'ShardingManagerMode',
	'ShardingManagerOptions',
	'ShardRespawnOptions',
	'Snowflake',
	'StageChannelResolvable',
	'StageInstanceCreateOptions',
	'StageInstanceEditOptions',
	'StartThreadOptions',
	'Status',
	'StickerFormatExtensionMap',
	'StickerResolvable',
	'SweeperKey',
	'SweeperOptions',
	'SweepOptions',
	'SystemChannelFlagsResolvable',
	'TextBasedChannels',
	'TextBasedChannelsResolvable',
	'TextBasedChannelTypes',
	'TextChannelResolvable',
	'TextInputComponentData',
	'ThreadChannelResolvable',
	'ThreadChannelTypes',
	'ThreadCreateOptions',
	'ThreadEditOptions',
	'ThreadMemberResolvable',
	'TimestampStylesString',
	'UserResolvable',
	'Vanity',
	'VoiceBasedChannelTypes',
	'VoiceChannelResolvable',
	'VoiceStateEditOptions',
	'WebhookClientData',
	'WebhookClientDataIdWithToken',
	'WebhookClientDataURL',
	'WebhookClientOptions',
	'WebhookCreateOptions',
	'WebhookEditOptions',
	'WebhookFetchMessageOptions',
	'WebhookMessageCreateOptions',
	'WebhookMessageEditOptions',
	'WebsocketOptions',
	'WebSocketShardEvents',
	'WelcomeChannelData',
	'WelcomeScreenEditOptions',
	'WidgetActivity',
	'WidgetChannel'
]);

export function resolveTypeDefs(name: string): string | undefined {
	if (knownTypeDefs.has(name)) {
		return `${baseLink}/${name}`;
	}

	return undefined;
}
