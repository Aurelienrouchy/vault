import {
	createContext,
	PropsWithChildren,
	RefObject,
	useContext,
	useRef,
	useState,
} from "react";

type NotificationCenterProvider = {
	notifCenterIsOpen: boolean;
	toggleNotifCenter: () => void;
	anchorRef: RefObject<HTMLButtonElement>;
};

export const NotificationCenterContext = createContext(
	{} as NotificationCenterProvider
);
export const NotificationCenterProvider = ({
	children,
}: PropsWithChildren<NotificationCenterProvider>) => {
	const anchorRef = useRef<HTMLButtonElement>(null);
	const [notifCenterIsOpen, setNotifCenterIsOpen] = useState(false);
	const toggleNotifCenter = () => {
		setNotifCenterIsOpen(!notifCenterIsOpen);
	};

	return (
		<NotificationCenterContext.Provider
			value={{
				notifCenterIsOpen,
				toggleNotifCenter,
				anchorRef,
			}}
		>
			{children}
		</NotificationCenterContext.Provider>
	);
};

export const useNotificationCenterContext = () =>
	useContext(NotificationCenterContext);
