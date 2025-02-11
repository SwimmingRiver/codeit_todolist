import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-48 py-2.5 border-b-2 border-slate-200">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer hidden md:block lg:block"
        />
        <Image
          src={"/logoMobile.svg"}
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer md:hidden lg:hidden"
        />
      </Link>
    </div>
  );
}

export default Header;
