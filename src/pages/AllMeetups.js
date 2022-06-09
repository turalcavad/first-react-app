import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
	const [loadingState, setLoading] = useState(false);
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	useEffect(() => {
		fetch(
			"https://react-gettin-started-7455c-default-rtdb.firebaseio.com/meetups.json"
		)
			.then((respnose) => {
				return respnose.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};

					meetups.push(meetup);
				}
				setLoading(true);
				setLoadedMeetups(meetups);
				console.log("test");
			});
	}, []);

	if (loadingState) {
		return (
			<section>
				<h1>All Meetups</h1>
				<MeetupList meetups={loadedMeetups} />
			</section>
		);
	}
}

export default AllMeetupsPage;
