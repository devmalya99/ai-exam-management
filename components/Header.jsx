import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UserMenu from "./ui/UserMenu";





const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/Logo.png"}
            alt="Company Logo"
            width={200}
            height={56}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex">

          <Link href="/exam/create">
          
          <button className=" flex items-center bg-red-400 px-2 py-1 hover:bg-red-500 hover:text-white rounded-xl m-1 gap-2">
          <PenBox size={18}/>
          <span>Create New Exam</span>
          </button>

          </Link>



          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <button className="bg-blue-400 px-2 py-1 hover:bg-blue-500 hover:text-white rounded-xl m-1">Login</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
