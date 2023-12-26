import BackButton from '@/components/buttons/BackButton';
import Button from '@/components/buttons/Button';
import { handleSignIn, handleSignUp } from '@/utils/auth';

export type Props = Readonly<{ searchParams: { message: string } }>;

export default function Login({ searchParams }: Props) {
    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <BackButton href={'/'} className="absolute left-8 top-8" />

            <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
                <label className="text-md" htmlFor="email">
                    Email
                </label>
                <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    name="email"
                    placeholder="you@example.com"
                    required
                />
                <label className="text-md" htmlFor="password">
                    Password
                </label>
                <input
                    className="rounded-md px-4 py-2 bg-inherit border mb-6"
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                />
                <Button
                    className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
                    formAction={handleSignIn}
                >
                    Sign In
                </Button>
                <Button
                    formAction={handleSignUp}
                    className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
                    variant="secondary"
                >
                    Sign Up
                </Button>
                {searchParams?.message && (
                    <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                        {searchParams.message}
                    </p>
                )}
            </form>
        </div>
    );
}
