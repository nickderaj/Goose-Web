import AuthButton from '@/components/buttons/AuthButton';

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10">
            <div className="w-full max-w-4xl flex justify-between items-center px-3 py-4 text-sm">
                <div />
                <AuthButton />
            </div>
        </nav>
    );
}
