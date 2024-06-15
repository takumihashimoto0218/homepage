import React from "react";
import { motion } from "framer-motion";

// Propsの型を定義
interface ModalProps {
	onClose: () => void; // onCloseは関数で、戻り値はvoid（何も返さない）
	content: string; // contentはstring型
}

const Modal: React.FC<ModalProps> = ({ onClose, content }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
			}}
			onClick={onClose}
		>
			<div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					maxWidth: "1000px",
					width: "100%",
				}}
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-center text-2xl ">{content}</h2>

			</div>
		</motion.div>
	);
};

export default Modal;
