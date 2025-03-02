import CustomImage from "@components/CustomImage";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>{children} </>);
}
