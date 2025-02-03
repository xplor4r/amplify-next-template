import useStreamText from "@/hooks/use-stream-text";
import Markdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

interface StreamingTextProps {
    text: string
}

const ChatText = ({text}: StreamingTextProps) => {
    const streamedText = useStreamText(text, 30);

    return (
        <div>
            <Markdown rehypePlugins={[rehypeSanitize]} remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
                {streamedText}
            </Markdown>
        </div>
    )
}

export default ChatText;