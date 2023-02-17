import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className='mx-auto my-12 w-10/12 max-w-2xl'>{props.children}</main>
    </div>
  );
}

export default Layout;