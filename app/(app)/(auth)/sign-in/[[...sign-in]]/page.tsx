import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-screen content-center flex items-center justify-center">
      <SignIn />
    </div>
  );
}
