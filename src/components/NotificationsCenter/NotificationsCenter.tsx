import { useState, useEffect, useRef } from "react";
import { useNotificationCenterContext } from "../../providers/NotificationsProvider";
import TextInput from "../TextInput/TextInput";
import "./NotificationsCenter.css";
import { Notifications } from "../Notifications/Notifications";
import { NotificationType } from "../Notification/type";

const API = "http://localhost:8000";

export const NotificationCenter = () => {
	const { anchorRef, notifCenterIsOpen } = useNotificationCenterContext();
	const [searchText, setSearchText] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [results, setResults] = useState<null | NotificationType[]>(null);
	const notifCenterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const effect = async () => {
			setLoading(true);
			const res = await fetch(`${API}/search?q=${searchText}`);
			const data = await res.json();
			setResults(data);
			setLoading(false);
		};
		effect();
	}, [searchText, setLoading, setResults]);

	useEffect(() => {
		if (anchorRef?.current && notifCenterRef?.current) {
			const anchorRect = anchorRef.current.getBoundingClientRect();
			const top = anchorRect.bottom + anchorRect.height + window.scrollY;
			const left = anchorRect.left + window.scrollX;
			notifCenterRef.current.style.top = `${top}px`;
			notifCenterRef.current.style.left = `${left}px`;
		}
	}, [anchorRef, notifCenterRef]);

	return (
		<div
			ref={notifCenterRef}
			className={`notification-center ${notifCenterIsOpen ? "open" : ""}`}
		>
			<TextInput
				value={searchText}
				onChange={setSearchText}
				placeholder="Type to filter events"
			/>
			{isLoading ? (
				<div>Loading...</div>
			) : results?.length ? (
				<Notifications results={results} />
			) : (
				<div>No result</div>
			)}
		</div>
	);
};
