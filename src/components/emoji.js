import React, { useState } from "react";

const emojis = {
	"😁": "laugh",
	"❤️": "love",
	"😍": "loving eyes",
	"😊": "emotional",
	"🎆": "startwars",
};

function Emoji() {
	const [inputEmoji, setInputEmoji] = useState("");
	const [meaning, setMeaning] = useState("meaning of emojis");
	const arrofEmoji = Object.keys(emojis);
	console.log(`arrofEmoji`, arrofEmoji);

	const changeHanlder = (e) => {
		const inputEmoji = e.target.value;
		setInputEmoji(inputEmoji);
		inputEmoji in emojis
			? setMeaning(emojis[inputEmoji])
			: setMeaning("nothing from this emoji");
	};
	const emojiHandler = (inputEmoji) => {
		setMeaning(emojis[inputEmoji]);
	};

	return (
		<div style={{ background: "transparent" }}>
			<h1>Emoji Interpreter</h1>
			<input
				value={inputEmoji}
				onChange={changeHanlder}
				placeholder="put your emoji we will give you meaning"
				style={{
					margin: "10px",
					padding: "10px",
					width: "60%",
				}}
			/>
			<h2>{inputEmoji}</h2>
			<h3 style={{ fontSize: "2rem" }}>{meaning}</h3>

			{arrofEmoji.map((emoji) => (
				<span
					onClick={() => emojiHandler(emoji)}
					style={{
						cursor: "pointer",
						padding: "10px",
						fontSize: "2rem",
					}}
				>
					{emoji}
				</span>
			))}
		</div>
	);
}

export default Emoji;
