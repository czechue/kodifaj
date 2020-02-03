import { NextPage } from 'next';
import LayoutComponent from '../../../components/shared/layout/layout.component';
import { User } from '../../../lib/types/user';
import HeadingComponent from '../../../components/shared/heading/heading.component';
import CollapseComponent from '../../../components/shared/collapse/collapse.component';
import SidebarComponent from '../../../components/shared/sidebar/sidebar.component';

const FaqPage: NextPage<Props> = ({ user }) => {
  return (
    <LayoutComponent user={user}>
      <div className="w-full md:w-10/12 m-auto py-8 px-4">
        <div className="mb-10">
          <HeadingComponent CustomTag="span" size="xsm" color="pink_primary">
            Masz jakieś pytanie?
          </HeadingComponent>
          <HeadingComponent CustomTag="h2">FAQ</HeadingComponent>
        </div>

        <div className="w-full flex flex-col sm:flex-row m-auto justify-between">
          <div className="w-full md:w-7/12">
            <CollapseComponent
              title="Where is my order?"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Pellentesque vitae eros quis orci venenatis aliquam. Aliquam in libero eget est porta tempus id non urna. Praesent et felis faucibus, "
            />
            <CollapseComponent
              title="Lorem ipsum dolo"
              description="Duis lectus tortor, molestie et porttitor in, pretium non ante. Morbi tellus lectus, sodales nec massa vel, mattis consectetur enim"
            />
            <CollapseComponent
              title="Lorem ipsum dolo"
              description="Duis lectus tortor, molestie et porttitor in, pretium non ante. Morbi tellus lectus, sodales nec massa vel, mattis consectetur enim"
            />
            <CollapseComponent
              title="Lorem ipsum dolo"
              description="Duis lectus tortor, molestie et porttitor in, pretium non ante. Morbi tellus lectus, sodales nec massa vel, mattis consectetur enim"
            />
            <CollapseComponent
              title="Lorem ipsum dolo"
              description="Duis lectus tortor, molestie et porttitor in, pretium non ante. Morbi tellus lectus, sodales nec massa vel, mattis consectetur enim"
            />
          </div>

          <div className="flex flex-col items-end self-start w-full md:w-5/12 mt-10 sm:mt-0 sm:pl-20">
            <SidebarComponent
              title="Kodifaj.pl"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius ultricies est, id fermentum mi. Praesent sit amet tincidunt lorem. Sed cursus, nisl consequat vulputate pretium"
              textLink="Opis buttona"
            />
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default FaqPage;

interface Props {
  user: User;
}
