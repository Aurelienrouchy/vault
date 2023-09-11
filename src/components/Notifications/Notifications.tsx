import { NotificationCmp } from "../Notification/Notification";
import { NotificationType } from "../Notification/type";
import "./Notifications.css";

type NotificationsProps = {
	results: NotificationType[];
};

export const Notifications = ({ results }: NotificationsProps) => {
	return (
		<div className="notifications">
			{results.map(({ data, id, type }) => (
				<NotificationCmp key={id} data={data} type={type} />
			))}
		</div>
	);
};
