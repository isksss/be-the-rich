import { Init } from "@/components/lib/init";
import Image from "next/image";

export default async function Home() {
	const result = await Init();

	return (
		<>
			<div>
				<h1>Be The Rich</h1>
				<p>a</p>
			</div>
		</>
	);
}
