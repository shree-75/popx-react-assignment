function Layout({ children }) {
  return (
    <div className="app">
      <div className="mobile">
        {children}
      </div>
    </div>
  );
}

export default Layout;