

interface StepCardProps {
    number: string;
    title: string;
    description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-primary-500/30">
                {number}
            </div>
            <div>
                <h3 className="text-xl font-bold font-heading mb-2">{title}</h3>
                <p className="text-slate-400">{description}</p>
            </div>
        </div>
    );
}
