import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="px-48 py-2.5 border-b-2 border-slate-200">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
}

export default Header;
