import { ReactNode } from 'react';

interface MessageWithLoaderProps {
	message: string;
	children?: ReactNode;
}

export default function MessageWithLoader({ message, children }: MessageWithLoaderProps) {
	return (
		<>
			<div className="flex items-center justify-center my-6">
				<div className="mr-3">{message}</div>
				<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-primary"></div>
				<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-primary delay-150"></div>
				<div className="mx-1 h-3 w-3 animate-bounce rounded-full bg-primary delay-300"></div>
			</div>
			{children}
		</>
	);
}
