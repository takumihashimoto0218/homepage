"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import DetailContent from "@/components/DetailContent";
import Introduction from "@/components/Introduction";
import Image from "next/image";

export default function Home() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>("");

	const handleOpenModal = (contentType: string) => {
		switch (contentType) {
			case "introduction":
				setModalContent(<Introduction />);
				break;
			case "details":
				setModalContent(<DetailContent />);
				break;
			case "contact":
				setModalContent(
					<span className="text-3xl font-bold">shimayo02180218@gmail.com</span>
				);
				break;
			default:
				setModalContent("内容が設定されていません");
		}
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<div className="relative h-screen w-full overflow-hidden">
			<div className="absolute inset-0">
				<Image
					src="/img/homepagebg.jpg"
					alt="Background"
					layout="fill"
					objectFit="cover"
					priority={true}
					className="z-[-10] brightness-50"
				/>
			</div>

			<button
				className="text-2xl border-4 border-red-100 p-10 rounded-md absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%] text-white font-bold mb-5"
				onClick={() => handleOpenModal("introduction")}
			>
				会社紹介
			</button>
			<button
				className="text-2xl border-4 border-red-100 p-10 rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold mb-5"
				onClick={() => handleOpenModal("details")}
			>
				会社概要
			</button>
			<button
				className="text-2xl border-4 border-red-100 p-10 rounded-md absolute top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] text-white font-bold mb-5"
				onClick={() => handleOpenModal("contact")}
			>
				お問い合わせ
			</button>

			<AnimatePresence>
				{isModalOpen && (
					<Modal onClose={handleCloseModal} content={modalContent} />
				)}
			</AnimatePresence>
		</div>
	);
}
