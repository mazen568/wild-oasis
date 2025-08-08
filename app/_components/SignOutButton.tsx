import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <form >
      <button className="flex gap-4 py-4 hover:bg-primary-100 hover:text-primary-900 transition-colors w-full rounded-sm">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600 hover:text-primary-900 transition-colors" />
        
        <span>Sign out</span>
      </button> 
    </form>
  );
}

export default SignOutButton;