import React, { ReactElement } from 'react';
import NavbarComponent from '../../navbar/navbar.component';
import { User } from '../../../lib/types/user';

export default function LayoutComponent({
  user,
  withHero,
  children,
}: LayoutProps): ReactElement {
  return (
    <div className="antialiased text-gray-900">
      <NavbarComponent user={user} withHero={withHero} />
      <main className="container mx-auto">{children}</main>
    </div>
  );
}

interface LayoutProps {
  children: ReactElement | ReactElement[];
  withHero?: boolean;
  user: User;
}
