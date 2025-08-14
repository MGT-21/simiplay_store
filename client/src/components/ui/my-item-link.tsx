
interface MyItemProps{
  href?: string;
  children: React.ReactNode;
}

export default function MyItemLink({href = "#", children}: MyItemProps ){

  return(
    <a href={href} className="flex gap-4 font-bold py-3 px-3 rounded items-center xl:gap-2">
      {children}
    </a>
  );
}