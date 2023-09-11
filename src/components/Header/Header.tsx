import { useNotificationCenterContext } from "../../providers/NotificationsProvider";
import { NotificationCenter } from "../NotificationsCenter/NotificationsCenter";
import "./Header.css";

export const Header = () => {
	const { toggleNotifCenter, anchorRef } = useNotificationCenterContext();

	return (
		<div className="header">
			<button
				ref={anchorRef}
				className="header-button"
				onClick={toggleNotifCenter}
			>
				<img
					src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
					alt=""
				/>
			</button>
			<NotificationCenter />
		</div>
	);
};
