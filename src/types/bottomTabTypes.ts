export interface TabNavType {
  id: number;
  title?: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}
