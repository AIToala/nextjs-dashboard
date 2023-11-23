import { urban } from './ui/fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urban.className} antialiased`}>
        {children}
        <footer className="flex h-16 items-center justify-center bg-gray-800 text-white">
          <p>© 2023 Andrés Toala.</p>
        </footer>
      </body>
    </html>
  );
}
