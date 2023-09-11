export const NOTIFICATION_TYPE = {
	TRANSACTION_RECEIVED: "TRANSACTION_RECEIVED",
	TRANSACTION_SENT: "TRANSACTION_SENT",
	ACCOUNT_CREATED: "ACCOUNT_CREATED",
} as const;

export type TRANSACTION_UNITS = "XTZ" | "XRP" | "ETH";
export type CURRENCY_UNITS = "bitcoin";

export type Account = {
	id: number;
	name: string;
	currency: CURRENCY_UNITS;
};

export type Transaction = {
	amount: number;
	from: string;
	id: number;
	to: string;
	unit: TRANSACTION_UNITS;
};

export type NotificationType = {
	data: Account | Transaction;
	id: number;
	type: keyof typeof NOTIFICATION_TYPE;
};
