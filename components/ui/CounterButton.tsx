"use client";

import { useEffect, useState } from "react";
import SettingsModal from "./SettingsModal";

const CounterButton: React.FC = () => {
	const [count, setCount] = useState<number>(0); // 現在のカウント
	const [incrementAmount, setIncrementAmount] = useState<number>(1); // 増加量

	// 初回レンダリング時に localStorage からカウントを取得
	useEffect(() => {
		const savedCount = localStorage.getItem("count");
		if (savedCount) {
			setCount(Number(savedCount)); // 文字列から数値に変換して設定
		}
	}, []);

	// カウントが変わるたびに localStorage に保存
	useEffect(() => {
		localStorage.setItem("count", count.toString()); // 数値を文字列として保存
	}, [count]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + incrementAmount); // 設定された増加量でカウントアップ
		}, 1000);

		return () => clearInterval(interval); // コンポーネントがアンマウントされたときにタイマーをクリア
	}, [incrementAmount]);

	return (
		<div className="flex flex-col items-center space-y-4">
			<button
				type="button"
				className="
          w-48 h-48 
          text-4xl 
          font-bold 
          text-white 
          bg-blue-500 
          rounded-full 
          hover:bg-blue-600 
          focus:outline-none 
          focus:ring-4 
          focus:ring-blue-300 
          shadow-lg 
          transition duration-300
          flex 
          justify-center 
          items-center
        "
			>
				{count}
			</button>

			{/* 設定ボタンを外部コンポーネントに分離 */}
			<SettingsModal
				currentIncrement={incrementAmount}
				onSave={(newIncrement) => setIncrementAmount(newIncrement)}
			/>
		</div>
	);
};

export default CounterButton;
