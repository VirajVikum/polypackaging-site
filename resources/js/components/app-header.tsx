import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Menu, Youtube, Facebook, Linkedin } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import AppLogoIcon from '@/components/app-logo-icon';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { UserMenuContent } from '@/components/user-menu-content';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useInitials } from '@/hooks/use-initials';
import { cn, toUrl } from '@/lib/utils';
import { dashboard } from '@/routes';
import type { BreadcrumbItem, NavItem } from '@/types';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

const mainNavItems: NavItem[] = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Products', href: '/products' },
    { title: 'News and Events', href: '/news-events' },
    { title: 'Careers', href: '/careers' },
    { title: 'Branches', href: '/branches' },
    { title: 'Contact Us', href: '/contact' },
];

const rightNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

const activeItemStyles =
    'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100';

export function AppHeader({ breadcrumbs = [] }: Props) {
    const page = usePage();
    const { auth } = page.props;
    const getInitials = useInitials();
    const { isCurrentUrl, whenCurrentUrl } = useCurrentUrl();

    return (
        <>
            <div className="sticky top-0 z-40 w-full bg-[var(--primary)] border-b border-sidebar-border/80 shadow-lg">
                <div className="flex h-20 items-center w-full px-4 md:px-8">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mr-2 h-[34px] w-[34px]"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar"
                            >
                                <SheetTitle className="sr-only">
                                    Navigation menu
                                </SheetTitle>
                                <SheetHeader className="flex justify-start text-left">
                                    <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                                </SheetHeader>
                                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                                    <div className="flex h-full flex-col justify-between text-sm">
                                        <div className="flex flex-col space-y-4">
                                            {mainNavItems.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="flex items-center space-x-2 font-medium"
                                                >
                                                    {item.icon && (
                                                        <item.icon className="h-5 w-5" />
                                                    )}
                                                    <span>{item.title}</span>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="flex flex-col space-y-4">
                                            {rightNavItems.map((item) => (
                                                <a
                                                    key={item.title}
                                                    href={toUrl(item.href)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center space-x-2 font-medium"
                                                >
                                                    {item.icon && (
                                                        <item.icon className="h-5 w-5" />
                                                    )}
                                                    <span>{item.title}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Link
                        href="/"
                        prefetch
                        className="flex items-center space-x-2 group"
                        aria-label="Home"
                    >
                        <AppLogo />
                        <span className="sr-only">Home</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="ml-6 hidden h-full items-center space-x-2 lg:flex">
                        <NavigationMenu className="flex h-full items-stretch">
                            <NavigationMenuList className="flex h-full items-stretch space-x-1">
                                {mainNavItems.map((item, index) => (
                                    <NavigationMenuItem
                                        key={index}
                                        className="relative flex h-full items-center"
                                    >
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                'px-4 py-2 rounded-lg font-medium transition-all duration-200 text-white',
                                                whenCurrentUrl(
                                                    item.href,
                                                    'bg-white/10 text-gold shadow-inner',
                                                ),
                                                'hover:bg-gold/10 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold',
                                            )}
                                        >
                                            {item.icon && (
                                                <item.icon className="mr-2 h-4 w-4" />
                                            )}
                                            {item.title}
                                        </Link>
                                        {isCurrentUrl(item.href) && (
                                            <div className="absolute bottom-0 left-2 right-2 h-1 rounded bg-gold"></div>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="ml-auto flex items-center space-x-2">
                        <div className="relative flex items-center space-x-1">
                            {/* Social Media Icons */}
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-10 w-10 flex items-center justify-center rounded-full hover:bg-gold/10 transition"
                                aria-label="YouTube"
                            >
                                <Youtube className="size-6 text-red-600 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-10 w-10 flex items-center justify-center rounded-full hover:bg-gold/10 transition"
                                aria-label="Facebook"
                            >
                                <Facebook className="size-6 text-blue-600 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-10 w-10 flex items-center justify-center rounded-full hover:bg-gold/10 transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="size-6 text-blue-800 group-hover:scale-110 transition-transform" />
                            </a>
                            <div className="ml-1 hidden gap-1 lg:flex">
                                {rightNavItems.map((item) => (
                                    <Tooltip key={item.title}>
                                        <TooltipTrigger>
                                            <a
                                                href={toUrl(item.href)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex h-9 w-9 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium text-accent-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                            >
                                                <span className="sr-only">
                                                    {item.title}
                                                </span>
                                                {item.icon && (
                                                    <item.icon className="size-5 opacity-80 group-hover:opacity-100" />
                                                )}
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{item.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                        {/* Only show user avatar/menu if user is admin */}
                        {auth.user?.is_admin && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="size-10 rounded-full p-1"
                                    >
                                        <Avatar className="size-8 overflow-hidden rounded-full">
                                            <AvatarImage
                                                src={auth.user?.avatar}
                                                alt={auth.user?.name}
                                            />
                                            <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                                {getInitials(auth.user?.name ?? '')}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end">
                                    <UserMenuContent user={auth.user} />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                </div>
            </div>
            {breadcrumbs.length > 1 && (
                <div className="flex w-full border-b border-sidebar-border/70">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    );
}
