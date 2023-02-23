import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className='mt-28 md:mt-20 mx-auto w-10/12'>{props.children}</main>
    </div>
  );
}

export default Layout;