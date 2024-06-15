import Image from 'next/image';

const Introduction = () => {
  return (
		<div className="items-center justify-center font-bold text-3xl mb-10">
      <div className='text-center font-bold text-4xl mb-10'>会社紹介</div>
			<div className="max-w-screen-lg p-4 text-center">
				<div className="mb-8 flex justify-center items-center">
					<div className="rounded-full overflow-hidden w-40 h-40">
						<Image src="/img/takumi.JPG" height={200} width={200} alt="画像" />
					</div>
				</div>
				<div className="text-2xl font-semibold mt-4">
					株式会社Nextechは新しいことに挑戦しようとしている人をITを使ってサポートする会社です。
				</div>
				<div className="text-lg mb-4"></div>
			</div>
		</div>
	);
};

export default Introduction;
