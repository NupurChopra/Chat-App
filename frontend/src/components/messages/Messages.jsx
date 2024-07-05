import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto bg-[url("https://media.istockphoto.com/id/1218737747/vector/learning-online-e-learning-video-call-chat-with-class-distance-education.jpg?s=612x612&w=0&k=20&c=fFFwc3CTP4XtvmruZLiK8EzAbzvAxJL_kw5BsA7z7w8=")] bg-contain backdrop-opacity-100'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center font-semibold flex  items-center justify-center h-full '>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;

// // STARTER CODE SNIPPET
// // import Message from "./Message";

// // const Messages = () => {
// // 	return (
// // 		<div className='px-4 flex-1 overflow-auto'>
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 			<Message />
// // 		</div>
// // 	);
// // };
// // export default Messages;