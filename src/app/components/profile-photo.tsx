import Image from "next/image";

export function ProfilePhoto() {
  return (
    <Image
      src="/profile.jpeg"
      alt="Kyle Rummens Profile"
      width={80}
      height={80}
      className="rounded-full overflow-hidden pointer-events-none"
    />
  );
}
