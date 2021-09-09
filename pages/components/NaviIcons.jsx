function NaviIcons({ Logo, title }) {
  return (
    <>
      <div
        className="group flex flex-col justify-center items-center text-center w-5
       hover:text-white"
      >
        <Logo className="h-8 mb-1 group-hover:cursor-pointer group-hover:animate-bounce" />
        <p className="tracking-widest hover:cursor-pointer opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </div>
    </>
  );
}

export default NaviIcons;
