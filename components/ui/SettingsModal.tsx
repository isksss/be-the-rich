"use client";
// components/SettingsModal.tsx
import { useState } from "react";

interface SettingsModalProps {
	currentIncrement: number;
	onSave: (newIncrement: number) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
	currentIncrement,
	onSave,
}) => {
	const [inputValue, setInputValue] = useState<string>(
		currentIncrement.toString(),
	);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleSave = () => {
		const newIncrement = Number.parseInt(inputValue, 10);
		if (!Number.isNaN(newIncrement)) {
			onSave(newIncrement); // 親コンポーネントに新しい増加量を伝える
			setIsModalOpen(false); // モーダルを閉じる
		}
	};

	return (
		<div>
			{/* 設定ボタン */}
			<button
				type="button"
				onClick={() => setIsModalOpen(true)}
				className="
          px-4 py-2 
          text-lg 
          font-semibold 
          text-blue-700 
          bg-white 
          border 
          border-blue-500 
          rounded 
          hover:bg-blue-100 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-300
        "
			>
				設定
			</button>

			{/* モーダル */}
			{isModalOpen && (
				<div
					className="
            fixed inset-0 
            bg-gray-600 bg-opacity-50 
            flex items-center justify-center
          "
				>
					<div className="bg-white p-6 rounded shadow-lg">
						<h2 className="text-xl font-bold mb-4">増加量の設定</h2>
						<input
							type="number"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							className="border border-gray-300 rounded p-2 w-full mb-4"
						/>
						<div className="flex justify-end space-x-4">
							<button
								type="button"
								onClick={() => setIsModalOpen(false)}
								className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
							>
								キャンセル
							</button>
							<button
								type="button"
								onClick={handleSave}
								className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
							>
								保存
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SettingsModal;
