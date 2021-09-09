import Image from "next/image";
import NaviIcons from "./NaviIcons";
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  UserIcon,
  CollectionIcon,
  SearchIcon,
} from "@heroicons/react/outline";
export default function Headers() {
  return (
    <>
      <header className="flex flex-col sm:flex-row m-5 h-auto justify-between">
        <div className="flex flex-grow justify-evenly mt-2 max-w-lg min-w-md">
          <NaviIcons Logo={HomeIcon} title="HOME" />
          <NaviIcons Logo={LightningBoltIcon} title="TRENDING" />
          <NaviIcons Logo={BadgeCheckIcon} title="VERIFIED" />
          <NaviIcons Logo={CollectionIcon} title="COLLECTIONS" />
          <NaviIcons Logo={SearchIcon} title="SEARCH" />
          <NaviIcons Logo={UserIcon} title="ACCOUNT" />
        </div>
        <Image
          className="object-contain"
          src="https://hulu.tv/3mJpEeB"
          width={200}
          height={100}
        />
      </header>
    </>
  );
}



