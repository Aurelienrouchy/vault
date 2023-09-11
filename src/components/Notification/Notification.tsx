import { NOTIFICATION_TYPE, NotificationType } from "./type";
import "./Notification.css";

const ACCOUNT_COLORS = {
	bitcoin: "#fffb94",
} as const;

const TRANSACTION_COLORS = {
	ETH: "#b0ff94",
	XTZ: "#94fffd",
	XRP: "#db94ff",
} as const;

const ACTION_TYPES = {
	[NOTIFICATION_TYPE.ACCOUNT_CREATED]: "created",
	[NOTIFICATION_TYPE.TRANSACTION_RECEIVED]: "received",
	[NOTIFICATION_TYPE.TRANSACTION_SENT]: "sent",
} as const;

export const NotificationCmp = ({
	data,
	type,
}: Omit<NotificationType, "id">) => {
	const action = ACTION_TYPES[type];

	if ("currency" in data) {
		const { name, currency } = data;
		return (
			<div
				className="notification"
				style={{ backgroundColor: ACCOUNT_COLORS[currency] }}
			>
				{`${currency.toLocaleUpperCase()} ${name} [${action}]`}
			</div>
		);
	}

	if ("amount" in data) {
		const { amount, from, to, unit } = data;

		return (
			<div
				className="notification"
				style={{ backgroundColor: TRANSACTION_COLORS[unit] }}
			>
				{`${action.toLocaleUpperCase()} ${amount} ${unit} ${
					action === "received" ? `from ${from}` : `to ${to}`
				}`}
			</div>
		);
	}

	return <></>; // Error ?
};
