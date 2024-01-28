import Button from "./button"

interface ContainerProps {
    children: React.ReactNode
    title: string
}
const Container = ({title,children}:ContainerProps) => {
    return (
        <div className="bg-violet-500 w-5/6 rounded-2xl p-2 pl-5">
            <h1 className="text-slate-300">{title}</h1>

            <div className="flex flex-wrap gap-2 p-6">
                {children}
            </div>
        </div>
    )
}

export default Container