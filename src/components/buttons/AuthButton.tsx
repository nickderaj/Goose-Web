import { cookies } from 'next/headers';
import Link from 'next/link';

import Button from '@/components/buttons/Button';
import { generateButtonClasses } from '@/components/buttons/util';
import { handleSignOut } from '@/utils/auth';
import { createClient } from '@/utils/supabase/server';

type Props = Readonly<{
    variant?: 'primary' | 'secondary' | 'black' | 'red';
    size?: 'sm' | 'lg';
    grow?: boolean;
}>;

export default async function AuthButton({ variant, size, grow }: Props) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const classes = generateButtonClasses({ variant, size, grow });

    if (!user)
        return (
            <Link href="/login" className={classes}>
                Login
            </Link>
        );

    return (
        <div className="flex items-center gap-4">
            Hey, {user.email?.split('@')[0]}!
            <form action={handleSignOut}>
                <Button>Logout</Button>
            </form>
        </div>
    );
}
