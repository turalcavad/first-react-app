import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetUpItem(props) {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				title: props.title,
				address: props.address,
				description: props.description,
				image: props.image,
			});
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title}></img>
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<p>{props.description}</p>
					<address>{props.address}</address>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
						{itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetUpItem;