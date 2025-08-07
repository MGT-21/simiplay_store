import LogoImg from "@/assets/Logo-simi 2-bg-white.png";

export default function Logo() {
  return (
    <a className="flex items-center gap-1" href="/">
      <img src={LogoImg} alt="" className="size-9" />
      SIMIPLAY
    </a>
  );
}
