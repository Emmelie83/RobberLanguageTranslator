export interface TranslatorInputProps {
	inputText: string;
	onChange: (text: string) => void;
	onEnter: () => void;
	inputRef: React.RefObject<HTMLTextAreaElement | null>;
	resetPlaceholderTrigger?: number;
}
