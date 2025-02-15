import React, { useContext, useEffect, useRef, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);
	const resultRef = useRef(null);
	const [rows, setRows] = useState(1);
	return (
		<div className="main">
			<div className="nav">
				<p>Gemini</p>
				<img src={assets.user_icon} alt="user icon" />
			</div>

			<div className="main-container">
				{!showResult ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, DEV</span>
							</p>
							<p>How can I help you today?</p>
						</div>
						<div className="cards">
							<div className="card">
								<p>Suggest beautiful places to see on an upcoming road trip</p>
								<img src={assets.bulb_icon} alt="road trip" />
							</div>
							<div className="card">
								<p>Suggest beautiful cities</p>
								<img src={assets.message_icon} alt="road trip" />
							</div>
							<div className="card">
								<p>Suggest AI</p>
								<img src={assets.code_icon} alt="road trip" />
							</div>
							<div className="card">
								<p>Suggest beautiful places to see on an upcoming road trip</p>
								<img src={assets.compass_icon} alt="road trip" />
							</div>
						</div>
					</>
				) : (
					<div className="result" ref={resultRef}>
						<div className="result-title">
							<img src={assets.user_icon} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img
								className="result-data-icon"
								src={assets.gemini_icon}
								alt=""
							/>
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => setInput(e.target.value)}
							value={input}
							type="text"
							placeholder="Enter a prompt here"
						/>
						<div>
							<img src={assets.gallery_icon} alt="mic icon" />
							<img src={assets.mic_icon} alt="send icon" />
							{input ? (
								<img onClick={() => onSent()} src={assets.send_icon} alt="" />
							) : null}
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Gemini may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Gemini Apps
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
