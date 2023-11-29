import { ReactNode } from 'react';

interface MessageWithLoaderProps {
	message: string;
	children?: ReactNode;
}

export default function MessageWithLoader({ message, children }: MessageWithLoaderProps) {
	return (
		<>
			<div className="flex items-center justify-center my-6">
				<h3 className="text-xl font-semibold mr-3">{message}</h3>
				<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-yellow-300"></div>
				<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-yellow-300 delay-150"></div>
				<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-yellow-300 delay-300"></div>
			</div>
			{children}
		</>
	);
}
