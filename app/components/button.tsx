"use client";
import { toast } from 'sonner';
import { useCopyToClipboard } from 'usehooks-ts'

type ButtonType = "link" | "import";

interface ButtonProps {
    text: string
    icon: string
    textColor: string
    backgroundColor: string
    url : string
    type: ButtonType
}
const Button = ({text,icon,textColor,backgroundColor,type,url}:ButtonProps) => {
    const [copiedText, copy] = useCopyToClipboard()

    return (
        <div
            className="flex rounded-2xl p-2 hover:shadow-lg cursor-pointer hover:-translate-y-1 duration-300"
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            <div className="m-auto"
                style={{
                    color: textColor,
                }}
                onClick={() => {
                    if(type === "link") {
                        copy(url)
                        toast.success(url)
                    } else if(type === "import") {
                        // open a new url
                        window.open(url)
                    }
                }}
            >{text}</div>
        </div>
    )
}

export default Button