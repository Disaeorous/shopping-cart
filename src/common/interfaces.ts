// Shop products
export interface ProductItemProps {
  id: number;
  name: string;
  price: number;
  imgURL: string;
}

export interface ProductListProps {
  data: {}[];
}

// Navigation
export interface NavItemProps {
  component?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties | undefined;
}

export interface NavListProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties | undefined;
}

export interface ActiveLinkProps {
  id?: number;
  label: string;
  path: string;
  cb: (isActive: boolean) => React.CSSProperties;
}

export interface ActiveLinkProps2 {
  id?: number;
  label: string;
  path: string;
}

export interface NavigationProps {
  className?: string;
  style?: React.CSSProperties | undefined;
}
