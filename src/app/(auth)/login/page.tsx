import { buttonVariants } from "@/components/ui/Button";
import { FC } from "react";
import Icons from "@/components/Icons";
import Link from "next/link";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import UserAuthForm from "@/components/UserAuthForm";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit text-slate-100",
            })}
            href="/"
          >
            <Icons.ChevronLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>

          <LargeHeading>Welcome back!</LargeHeading>
          <Paragraph>Please sign in using your Google account</Paragraph>

          <UserAuthForm />
        </div>
      </div>
    </div>
  );
};

export default page;
