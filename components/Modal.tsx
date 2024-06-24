import React from "react";
import { motion } from "framer-motion";

// Propsの型を定義
interface ModalProps {
	onClose: () => void;
	content: React.ReactNode;
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
				zIndex: 50, // 確実に他の要素の上に表示されるようにする
			}}
			onClick={onClose}
		>
			<div
				style={{
					backgroundColor: "white",
					padding: "20px",
					borderRadius: "10px",
					maxWidth: "1000px",
					width: "90%", // SP版でも適切に表示されるように調整
					position: "relative",
				}}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					style={{
						position: "absolute",
						top: "10px",
						right: "10px",
						background: "none",
						border: "none",
						fontSize: "1.0rem",
						cursor: "pointer",
					}}
				>
					×
				</button>
				{content}
			</div>
		</motion.div>
	);
};

export default Modal;
