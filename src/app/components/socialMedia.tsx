import {
  SvgInstagram,
  SvgEmail,
} from "@/assets/svg-collection";

export default function SocialMediaIcons({
  svgClassName,
}: {
  svgClassName: string;
}) {
  return (
    <>
      <a
        aria-label="Direct to Graha Biru's Instagram"
        href="https://www.instagram.com/graha.biru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        className={svgClassName}
      >
        <SvgInstagram
          width={23}
          height={23}
          fill="none"
          className="hover: fill-current"
        />
      </a>
      <a
        aria-label="Send email to Graha Biru with gmail"
        href="https://mail.google.com/mail/u/0/#search/grahabirujakarta%40gmail.com"
        target="_blank"
        className={svgClassName}
      >
        <SvgEmail
          width={23}
          height={23}
          fill="none"
          className="hover: fill-current"
        />
      </a>
    </>
  );
}