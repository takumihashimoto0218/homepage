import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const DetailContent = () => {
	return (
		<div>
			<div className="mb-10">会社概要</div>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="font-bold text-2xl ">会社名</TableCell>
						<TableCell className="text-center font-bold text-2xl">
							株式会社Neteceh
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-bold text-2xl ">設立</TableCell>
						<TableCell className="text-center font-bold text-2xl">
							2024年
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-bold text-2xl ">役員</TableCell>
						<TableCell className="text-center font-bold text-2xl ">
							代表取締役　橋本拓海
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell className="font-bold text-2xl">事業内容</TableCell>
						<TableCell className="text-center font-bold text-2xl">
							ITサービス企画・開発・運営
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-bold text-2xl">所在地</TableCell>
						<TableCell className="text-center font-bold text-2xl">
							〒339-0011 埼玉県さいたま市岩槻区長宮622-7
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};

export default DetailContent;
