import Logo from '@/app/components/Logo/Logo';

export default function Header({ theme }) {
  return (
    <header className="w-full box-border">
      <div className="flex items-center gap-[1rem]">
        <Logo theme={theme} />
      </div>
    </header>
  );
}
