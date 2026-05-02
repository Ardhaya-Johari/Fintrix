

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <AppProvider>
      <div className="min-h-screen bg-white dark:bg-neutral-900 transition-all">
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-4 right-4 px-4 py-2 rounded-lg bg-yellow-400 text-black z-50"
        >
          Toggle Theme
        </button>

        <Dashboard />
      </div>
    </AppProvider>
  );
}

export default App;
