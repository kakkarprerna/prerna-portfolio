import Image from "next/image";

export default function Avatar({
  size = 96,
  hasPhoto = false,
  rounded = "rounded-full",
}: {
  size?: number;
  hasPhoto?: boolean;
  rounded?: string;
}) {
  if (hasPhoto) {
    return (
      <Image
        src="/photo.png"
        alt="Prerna Kakkar"
        width={size}
        height={size}
        className={`border border-paper-line object-cover ${rounded}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-paper-line bg-gradient-to-br from-indigo to-teal font-display font-bold text-white ${rounded}`}
      style={{ width: size, height: size, fontSize: size * 0.22 }}
      aria-label="Prerna Kakkar"
    >
      PK
    </div>
  );
}
