import LogoImg from "@/assets/Group 4 v4.png";

export default function Logo() {
  return (
    <a className="flex items-center gap-1 text-xl" href="/">
      <img src={LogoImg} alt="" className="size-9" />
      SIMIPLAY
    </a>
  );
}
