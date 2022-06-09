import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
	return (
		<ul className={classes.list}>
			{props.meetups.map((meetup) => (
				<MeetupItem
					image={meetup.image}
					key={meetup.id}
					id={meetup.id}
					title={meetup.title}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</ul>
	);
}

export default MeetupList;
