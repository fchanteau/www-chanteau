'use client';

export function Footer() {
    return (<footer className="w-full py-stack-lg border-t border-outline-variant/10 dark:border-outline-variant/10 bg-surface-container-lowest dark:bg-surface-container-lowest mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter gap-stack-md">
            <div className="font-headline-md text-headline-md text-on-surface">François Chanteau</div>
            <div className="text-secondary dark:text-secondary font-label-sm text-label-sm">
                © 2026 François Chanteau. All rights reserved.
            </div>
            <div className="flex gap-4">
                <a className="text-on-surface-variant dark:text-on-surface-variant font-label-sm text-label-sm hover:text-secondary dark:hover:text-secondary underline decoration-2 underline-offset-4 transition-all duration-300" href="https://github.com/fchanteau" target="_blank">GitHub</a>
                <a className="text-on-surface-variant dark:text-on-surface-variant font-label-sm text-label-sm hover:text-secondary dark:hover:text-secondary underline decoration-2 underline-offset-4 transition-all duration-300" href="https://www.linkedin.com/in/françois-chanteau" target="_blank">LinkedIn</a>
                <a className="text-on-surface-variant dark:text-on-surface-variant font-label-sm text-label-sm hover:text-secondary dark:hover:text-secondary underline decoration-2 underline-offset-4 transition-all duration-300" href="mailto:francois.chanteau49@gmail.com" target="_blank">Email</a>
            </div>
        </div>
    </footer>
    );
}