import { NextPage } from 'next';
import LayoutComponent from '../../../components/shared/layout/layout.component';
import { User } from '../../../lib/types/user';
import HeadingComponent from '../../../components/shared/heading/heading.component';

const FaqPage: NextPage<Props> = ({ user }) => {
  return (
    <div>
      <LayoutComponent user={user}>
        <div>
          <HeadingComponent CustomTag="span" size="xsm" color="pink_primary">
            Masz jakieś pytanie?
          </HeadingComponent>
          <HeadingComponent CustomTag="h2">FAQ</HeadingComponent>
        </div>
      </LayoutComponent>
    </div>
  );
};

export default FaqPage;

interface Props {
  user: User;
}
