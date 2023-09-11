import { Header } from "./components/Header/Header";
import { NotificationCenterProvider } from "./providers/NotificationsProvider";

const App = () => {
	return (
		<NotificationCenterProvider>
			<Header />
		</NotificationCenterProvider>
	);
};

export default App;
