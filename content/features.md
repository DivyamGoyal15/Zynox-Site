# Zynox Features Documentation

This document provides detailed information about all features available in Zynox Discord bot.

## Core Features

### Antinuke Protection System

Zynox provides comprehensive protection against malicious server takeovers and destructive actions.

#### Protection Modules

| Module | Description | Actions Taken |
|--------|-------------|---------------|
| **AntiBan** | Prevents unauthorized member bans | Reverts ban, bans executor |
| **AntiBotAdd** | Blocks unauthorized bot additions | Kicks bot, bans adder |
| **AntiChannelCreate** | Prevents unauthorized channel creation | Deletes channel, bans creator |
| **AntiChannelDelete** | Prevents unauthorized channel deletion | Recreates channel, bans deleter |
| **AntiChannelUpdate** | Prevents unauthorized channel modifications | Reverts changes, bans modifier |
| **AntiGuildUpdate** | Protects server settings | Reverts name/icon/banner changes |
| **AntiIntegration** | Blocks integration additions | Removes integration, bans adder |
| **AntiKick** | Prevents unauthorized kicks | Reverts kick, bans executor |
| **AntiPrune** | Prevents member pruning | Bans executor |
| **AntiRoleCreate** | Prevents unauthorized role creation | Deletes role, bans creator |
| **AntiRoleDelete** | Prevents unauthorized role deletion | Recreates role, bans deleter |
| **AntiRoleUpdate** | Prevents unauthorized role modifications | Reverts changes, bans modifier |
| **AntiWebhookCreate** | Prevents webhook creation | Deletes webhook, bans creator |
| **AntiWebhookDelete** | Prevents webhook deletion | Recreates webhook, bans deleter |
| **AntiWebhookUpdate** | Prevents webhook modifications | Reverts changes, bans modifier |

#### Configuration Options
- **Whitelist System**: Trusted users who can perform protected actions
- **Extra Owners**: Users with full administrative access
- **Audit Log Verification**: 1-hour timestamp window for action validation
- **Rate Limiting**: 5 requests per 10 seconds with exponential backoff

### Automod System

Automated moderation with 6 configurable rules:

#### Rules

| Rule | Trigger | Default Punishment | Description |
|------|---------|-------------------|-------------|
| **AntiSpam** | 5+ messages in 10 seconds | Mute (12 minutes) | Prevents spam messages |
| **AntiCaps** | >70% caps in 45+ characters | Mute (1 minute) | Reduces shouting/caps abuse |
| **AntiInvites** | Discord invite links | Mute (12 minutes) | Blocks server invites |
| **AntiMassMention** | 5+ mentions in one message | Mute (3 minutes) | Prevents mass pinging |
| **AntiLink** | Generic URLs/links | Mute (configurable) | Blocks unwanted links |
| **AntiEmojiSpam** | Excessive emoji usage | Various punishments | Reduces emoji spam |

#### Features
- **Ignored Channels/Roles**: Exclude specific areas from automod
- **Configurable Punishments**: Mute, Kick, Ban, or Delete-only
- **Logging**: All automod actions are logged
- **Message Deletion**: Automatic removal of violating messages

### Logging System

Comprehensive logging with 14 specialized categories:

#### Logging Categories

| Category | Events Logged | Features |
|----------|---------------|----------|
| **Message Logs** | Deleted/edited messages, attachments | File archiving, embed previews |
| **Moderation Logs** | Bans, kicks, mutes, warns | Action details, responsible users |
| **User Logs** | Joins, leaves, profile updates | Account age, join history |
| **Role Logs** | Role creation/deletion/updates | Permission changes, hierarchy |
| **Channel Logs** | Channel management | Category changes, permission overwrites |
| **Server Logs** | Guild settings changes | Icon, name, verification level |
| **Webhook Logs** | Webhook activities | Creation, deletion, usage |
| **Invite Logs** | Invite creation/usage | Tracking and monitoring |
| **Voice Logs** | Voice channel activities | Join/leave, mute/deafen |
| **Emoji Logs** | Emoji/sticker management | Addition, deletion, usage |
| **Thread Logs** | Thread creation/management | Activity tracking |
| **Application Logs** | Bot application events | Command usage, errors |
| **Event Logs** | General server events | Custom event tracking |
| **VC Logs** | Voice channel specifics | Detailed voice activity |

## Automation Features

### Welcome System
- **Custom Messages**: 11 placeholder variables
- **Embed Support**: Rich embed welcome messages
- **Channel Selection**: Designated welcome channels
- **DM Options**: Direct message welcomes

**Available Placeholders:**

| Placeholder | Description |
|-------------|-------------|
| `{user}` | User mention |
| `{user_name}` | Username |
| `{user_id}` | User ID |
| `{user_nick}` | Server nickname |
| `{user_avatar}` | Avatar URL |
| `{user_joindate}` | Server join date |
| `{user_createdate}` | Account creation date |
| `{server_name}` | Server name |
| `{server_id}` | Server ID |
| `{server_membercount}` | Member count |
| `{server_icon}` | Server icon URL |

### Autorole System
- **Human Roles**: Automatic role assignment for human members
- **Bot Roles**: Separate roles for bot accounts
- **Multiple Roles**: Support for multiple autoroles

### Autoresponder
- **Keyword Triggers**: Automatic responses to specific words/phrases
- **Case-Sensitive Options**: Exact or case-insensitive matching
- **Channel-Specific**: Per-channel autoresponders

### Giveaway System
- **Time-Based**: Scheduled giveaway endings
- **Winner Selection**: Random winner picking
- **Requirements**: Optional role requirements
- **Embed Messages**: Rich giveaway announcements

### Temporary Voice Channels
- **Dynamic Creation**: Voice channels created on demand
- **User Limits**: Configurable user limits
- **Auto-Deletion**: Channels removed when empty

## Moderation Tools

### Advanced Ban System
- **Reason Tracking**: Detailed ban reasons
- **Unban Modal**: Interactive unban interface
- **Audit Integration**: Full audit log integration

### Warning System
- **Count Tracking**: Total warning accumulation
- **Reason Logging**: Detailed warning history
- **Threshold Actions**: Automatic actions at warning limits

### Message Management
- **Advanced Filters**: Multiple clear options
- **Bulk Operations**: Mass message deletion
- **Content Filtering**: Text, embeds, files, images

## Performance & Security

### Connection Management
- **Auto-Sharding**: 2-shard configuration for scaling
- **Connection Pooling**: Efficient resource usage
- **Retry Mechanisms**: Exponential backoff for API calls

### Database Architecture
- **12+ SQLite Databases**: Specialized databases per feature
- **WAL Mode**: Concurrent access support
- **Automatic Backups**: Built-in backup mechanisms

### Security Measures
- **Rate Limiting**: Prevents API abuse
- **Spam Protection**: Multiple anti-spam layers
- **GDPR Compliance**: Data protection regulations
- **Discord TOS**: Full Discord compliance