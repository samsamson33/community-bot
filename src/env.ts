import dotenv from 'dotenv-safe';
dotenv.config();

export const token = process.env.TOKEN!;
export const botAdmins = process.env.BOT_ADMINS!.split(',');

export const autorole = process.env.AUTOROLE!.split(',').map(x => {
	const [msgID, roleID, emoji, autoRemove] = x.split(':');
	return {
		msgID,
		roleID,
		emoji,
		autoRemove: autoRemove == 'true',
	};
});

export const dbUrl = process.env.DATABASE_URL!;

export const categories = {
	ask: process.env.ASK_CATEGORY!,
	ongoing: process.env.ONGOING_CATEGORY!,
	dormant: process.env.DORMANT_CATEGORY!,
};

export const askCooldownRoleId = process.env.ASK_COOLDOWN_ROLE!;
export const askCooldownTimeout = parseInt(process.env.ASK_COOLDOWN_TIMEOUT!);

export const channelNames = process.env.CHANNEL_NAMES!.split(',');
export const dormantChannelTimeout = parseInt(
	process.env.DORMANT_CHANNEL_TIMEOUT!,
);
export const dormantChannelLoop = parseInt(process.env.DORMANT_CHANNEL_LOOP!);
export const TS_BLUE = '#007ACC';
